// scripts/indexImages.js
const fs = require("fs");
const path = require("path");

// 1) Carpeta raíz de imágenes
const IMAGES_ROOT = path.join(__dirname, "..", "public", "images");

// 2) Dónde vamos a guardar el "índice" de imágenes
const OUTPUT_PATH = path.join(__dirname, "..", "data", "imageIndex.json");

// 3) Función para sacar un "slug" limpio del filename
function slugFromFilename(filename) {
  return filename
    .replace(/\.webp$/i, "") // quita la extensión
    .replace(/[\s_]+/g, "-") // espacios o guiones bajos → guión
    .toLowerCase();          // todo minúscula para usar en código
}

function main() {
  // Leer todas las carpetas dentro de public/images
  const categories = fs.readdirSync(IMAGES_ROOT, { withFileTypes: true });

  const result = [];

  for (const dirent of categories) {
    if (!dirent.isDirectory()) continue;

    const categoryKey = dirent.name; // p.ej. "01_estaciones_generadores"
    const categoryPath = path.join(IMAGES_ROOT, categoryKey);

    const files = fs.readdirSync(categoryPath, { withFileTypes: true });

    for (const file of files) {
      if (!file.isFile()) continue;
      if (!file.name.toLowerCase().endsWith(".webp")) continue;

      const filename = file.name;                // respeta las mayúsculas reales
      const slug = slugFromFilename(filename);   // versión "clave" en minúscula
      const urlPath = `/images/${categoryKey}/${filename}`;

      result.push({
        categoryKey,
        filename,
        slug,
        urlPath
      });
    }
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 2), "utf8");
  console.log(`✅ Wrote ${result.length} records to ${OUTPUT_PATH}`);
}

main();