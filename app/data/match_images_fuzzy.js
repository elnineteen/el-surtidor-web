const fs = require("fs");

const realPath = "./data/products_real.json";
const oldPath = "./data/products.json";

const realRaw = fs.readFileSync(realPath, "utf8");
const oldRaw = fs.readFileSync(oldPath, "utf8");

const realProducts = JSON.parse(realRaw);
const oldProducts = JSON.parse(oldRaw);

// 👇 Ajusta estos nombres de campos según tu products.json viejo
const getOldName = (p) => p.name || p.title || p.productName;
const getOldPrice = (p) => p.priceClient || p.price || p.priceUsd || null;
const getOldImage = (p) =>
  p.imageFilename || p.image || p.imageUrl || p.img || null;

// Normaliza textos: minúsculas, sin acentos, sin símbolos
function normalize(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .normalize("NFD") // quita acentos
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

// Similaridad basada en palabras (Jaccard simple)
function tokenSimilarity(a, b) {
  const ta = new Set(normalize(a).split(" ").filter(Boolean));
  const tb = new Set(normalize(b).split(" ").filter(Boolean));

  if (ta.size === 0 || tb.size === 0) return 0;

  let inter = 0;
  for (const t of ta) {
    if (tb.has(t)) inter++;
  }
  const union = ta.size + tb.size - inter;
  return inter / union;
}

// Bonus por precio parecido
function priceBoost(priceReal, priceOld) {
  if (priceReal == null || priceOld == null) return 0;
  const pr = Number(priceReal);
  const po = Number(priceOld);
  if (!isFinite(pr) || !isFinite(po) || pr <= 0 || po <= 0) return 0;

  const diff = Math.abs(pr - po);
  const rel = diff / pr;

  if (rel < 0.05) return 0.25; // casi iguales
  if (rel < 0.12) return 0.15; // bastante cerca
  if (rel < 0.20) return 0.05; // meh
  return 0;
}

const results = [];
const manualReview = [];

for (const real of realProducts) {
  const realName = real.name;
  const realPrice = real.priceClient || real.price || null;

  if (!realName) {
    console.warn("Producto en products_real.json sin name:", real);
    manualReview.push({ real, reason: "NO_NAME" });
    continue;
  }

  let best = null;
  let bestScore = 0;

  for (const old of oldProducts) {
    const oldName = getOldName(old);
    if (!oldName) continue;

    const nameScore = tokenSimilarity(realName, oldName);
    const priceScore = priceBoost(realPrice, getOldPrice(old));
    const totalScore = nameScore + priceScore;

    if (totalScore > bestScore) {
      bestScore = totalScore;
      best = old;
    }
  }

  if (!best) {
    manualReview.push({ real, reason: "NO_CANDIDATE" });
    continue;
  }

  const image = getOldImage(best);

  if (!image || bestScore < 0.7) {
    // 0.7 es el umbral. Puedes subir/bajar esto.
    manualReview.push({
      realName,
      bestMatchName: getOldName(best),
      score: bestScore.toFixed(2),
      reason: !image ? "NO_IMAGE" : "LOW_SCORE",
    });
    continue;
  }

  // Extraer solo el filename si viene con ruta
  const filename = image.split("/").pop();

  real.imageFilename = filename;
  results.push({
    id: real.id,
    realName,
    matchedName: getOldName(best),
    score: bestScore,
    imageFilename: filename,
  });
}

const outPath = "./products_merged.json";
fs.writeFileSync(outPath, JSON.stringify(realProducts, null, 2), "utf8");

fs.writeFileSync(
  "./match_report.json",
  JSON.stringify(
    {
      matchedCount: results.length,
      manualReviewCount: manualReview.length,
      matches: results,
      manualReview,
    },
    null,
    2
  ),
  "utf8"
);

console.log("✅ Fuzzy match terminado.");
console.log("Productos con imagen asignada:", results.length);
console.log("Productos para revisión manual:", manualReview.length);
console.log("Catálogo final:", outPath);
console.log("Reporte:", "match_report.json");