// sync_categories.js
const fs = require("fs");
const path = require("path");

// Ruta correcta con tu estructura real
const productsPath = path.join(__dirname, "app", "data", "products_merged.json");

// Mapa oficial
const CATEGORY_MAP = {
  "01_estaciones_generadores": "Estaciones de Energía y Generadores",
  "02_refrigeradores": "Refrigeradores y Neveras",
  "03_lavadoras": "Lavadoras y Otras Máquinas",
  "04_cocinas": "Cocinas, Hornos y Freidoras",
  "05_ventilacion": "Ventilación y Climatización",
  "06_caja_fuerte": "Caja Fuerte",
  "07_solar": "Energía Solar e Iluminación",
  "08_agua": "Motores de Agua y Presurizadores",
  "09_exhibidoras_industrial": "Exhibidoras, Heladeras y Equipos Industriales",
  "10_otros": "Otros Electrodomésticos",
  "11_tv": "Televisores y Pantallas"
};

function main() {
  console.log("Leyendo", productsPath);

  const raw = fs.readFileSync(productsPath, "utf8");
  const products = JSON.parse(raw);

  let updated = 0;
  const unknownKeys = new Set();

  const newProducts = products.map((p) => {
    const key = p.categoryKey;
    const mappedName = CATEGORY_MAP[key];

    if (!mappedName) {
      unknownKeys.add(key || "(vacío)");
      return p;
    }

    if (p.categoryName !== mappedName) {
      p.categoryName = mappedName;
      updated++;
    }

    return p;
  });

  fs.writeFileSync(productsPath, JSON.stringify(newProducts, null, 2), "utf8");

  console.log(`✅ categoryName actualizado en ${updated} productos.`);
  if (unknownKeys.size > 0) {
    console.log("⚠ categoryKey desconocidos encontrados:");
    console.log([...unknownKeys]);
  } else {
    console.log("👌 Todos los categoryKey coinciden con el mapa.");
  }
}

main();