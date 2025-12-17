// lib/categories.ts

export type Category = {
  key: string;          // categoryKey
  name: string;         // Nombre visible
  description: string;  // Microcopy premium
  shortLabel?: string;
};

export const CATEGORIES: Category[] = [
  {
    key: "01_estaciones_generadores",
    name: "Estaciones de Energía y Generadores",
    description: "Energía estable cuando el país decide apagarse.",
    shortLabel: "Apagones · Respaldo de energía",
  },
  {
    key: "02_refrigeradores",
    name: "Refrigeradores y Neveras",
    description: "Frío confiable para comida, negocio y rutina diaria.",
    shortLabel: "Frío para casa y negocio",
  },
  {
    key: "03_lavadoras",
    name: "Lavadoras y Otras Máquinas",
    description: "Lavado simple y constante, sin inventos ni sorpresas.",
    shortLabel: "Ropa limpia sin sufrir",
  },
  {
    key: "04_cocinas",
    name: "Cocinas, Hornos y Freidoras",
    description: "Todo lo esencial para una cocina que funcione sin enredos.",
    shortLabel: "Cocinar sin dolor de cabeza",
  },
  {
    key: "05_ventilacion",
    name: "Ventilación y Climatización",
    description: "Soluciones reales para que el calor deje de ser un problema.",
    shortLabel: "Ventiladores y clima",
  },
  {
    key: "06_caja_fuerte",
    name: "Caja Fuerte",
    description: "Lo importante, en su sitio y bajo llave.",
    shortLabel: "Seguridad en serio",
  },
  {
    key: "07_solar",
    name: "Energía Solar e Iluminación",
    description: "Menos dependencia del sistema, más control tuyo.",
    shortLabel: "Paneles y luces",
  },
  {
    key: "08_agua",
    name: "Motores de Agua y Presurizadores",
    description: "Agua con presión cuando la necesitas, no cuando quiera llegar.",
    shortLabel: "Presión y abasto",
  },
  {
    key: "09_exhibidoras_industrial",
    name: "Exhibidoras, Heladeras y Equipos Industriales",
    description: "Frío comercial continuo para negocios que necesitan estabilidad.",
    shortLabel: "Negocios y vitrinas",
  },
  {
    key: "10_otros",
    name: "Otros",
    description: "Equipos que no encajan en ninguna etiqueta, pero sí en tu realidad.",
    shortLabel: "Todo lo demás",
  },
  {
    key: "11_tv",
    name: "Televisores y Pantallas",
    description: "Imagen limpia, sonido claro y presencia en cualquier espacio.",
    shortLabel: "Pantallas y TV",
  },
];

// índice rápido, todo normalizado en minúsculas
const CATEGORY_INDEX: Record<string, Category> = Object.fromEntries(
  CATEGORIES.map((cat) => [cat.key.trim().toLowerCase(), cat])
);

export function getAllCategories(): Category[] {
  return CATEGORIES;
}

export function getCategoryByKey(
  key: string | null | undefined
): Category | undefined {
  if (!key) return undefined;

  const normalized = String(key).trim().toLowerCase();
  return CATEGORY_INDEX[normalized];
}