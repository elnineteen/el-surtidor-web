// scripts/bootstrapProductsFromImages.js
const fs = require("fs");
const path = require("path");

// Root of your images
const IMAGES_ROOT = path.join(__dirname, "..", "public", "images");

// Output JSON (this will be your temporary DB)
const OUTPUT_PATH = path.join(__dirname, "..", "data", "products.json");

// Map: folder name -> human category name
const CATEGORY_MAP = {
    "01_estaciones_generadores": "Estaciones de Energía y Generadores",
    "02_refrigeradores": "Refrigeradores y  Neveras ",
    "03_lavadoras": "Lavadoras ",
    "04_cocinas": "Cocina",
    "05_ventilacion": "Ventiladores y Climatización",
    "06_caja_fuerte": "Cajas Fuertes",
    "07_solar": "Energía Solar e Iluminación",
    "08_agua": "Motores de Agua y Presurizadores",
    "09_exhibidoras_industrial": "Exhibidoras , Equipos Industriales y Heladeras Comerciales",
    "10_otros": "Otros Electrodomésticos",
    "11_TV": "Televisores y Pantallas"
  };

// Turn filename into an id/slug: "EcoFlow-RiverPRO.webp" -> "ecoflow-riverpro"
function slugFromFilename(filename) {
  return filename
    .replace(/\.webp$/i, "")          // remove extension
    .replace(/[\s_]+/g, "-")          // spaces/underscores -> dash
    .replace(/[^a-zA-Z0-9\-]/g, "")   // kill weird chars
    .toLowerCase();
}

// Turn filename into a readable default name: "EcoFlow-RiverPRO.webp" -> "Ecoflow Riverpro"
function titleFromFilename(filename) {
  const base = filename.replace(/\.webp$/i, "");
  return base
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\w\S*/g, (txt) => txt[0].toUpperCase() + txt.slice(1));
}

function main() {
  if (!fs.existsSync(IMAGES_ROOT)) {
    console.error("❌ public/images not found:", IMAGES_ROOT);
    process.exit(1);
  }

  const categories = fs.readdirSync(IMAGES_ROOT, { withFileTypes: true });
  const products = [];

  for (const dirent of categories) {
    if (!dirent.isDirectory()) continue;

    const categoryKey = dirent.name; // e.g. "01_estaciones_generadores"
    const categoryName = CATEGORY_MAP[categoryKey] ?? categoryKey;
    const categoryPath = path.join(IMAGES_ROOT, categoryKey);

    const files = fs.readdirSync(categoryPath, { withFileTypes: true });

    for (const file of files) {
      if (!file.isFile()) continue;
      if (!file.name.toLowerCase().endsWith(".webp")) continue;

      const filename = file.name;
      const id = slugFromFilename(filename);
      const autoName = titleFromFilename(filename);

      products.push({
        id,
        name: autoName,
        categoryKey,
        categoryName,
        provider: "",          // you will fill this
        priceProvider: null,   // you will fill this
        priceClient: null,     // you will fill this
        stock: null,           // you will fill this
        imageFilename: filename
      });
    }
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(products, null, 2), "utf8");

  console.log(`✅ Wrote ${products.length} products to ${OUTPUT_PATH}`);
}

main();