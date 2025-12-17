// lib/products.ts

import rawProducts from "@/app/data/products_merged.json";

export type Product = {
  id?: string;
  slug?: string | null;
  name: string;
  categoryKey: string;
  categoryName?: string;
  priceClient: number | null;
  status?: string | null;
  featured?: boolean;
  imageFilename?: string | null;
  descriptionShort?: string | null;
  descriptionLong?: string | null;
  points?: string[];
  specs?: Record<string, string | number | null>;
};

// Cast directo desde el JSON
const products: Product[] = rawProducts as Product[];

// ---------------- SLUG HELPERS ----------------

function slugifyName(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Slug que usamos en la URL:
 * 1) id si existe
 * 2) slug del JSON si viene
 * 3) nombre slugificado
 */
export function getProductPathSlug(product: Product): string {
  if (product.id && product.id.trim() !== "") {
    return product.id.trim();
  }

  if (product.slug && String(product.slug).trim() !== "") {
    return String(product.slug).trim();
  }

  return slugifyName(product.name);
}

// ---------------- IMAGE HELPER ----------------

/**
 * Soporta TODOS estos formatos en imageFilename:
 * - "ecoflow-delta-2.webp"
 * - "01_estaciones_generadores/ecoflow-delta-2.webp"
 * - "images/01_estaciones_generadores/ecoflow-delta-2.webp"
 * - "/images/01_estaciones_generadores/ecoflow-delta-2.webp"
 */
export function getProductImagePath(product: Product): string {
  const raw = product.imageFilename?.trim();
  const categoryKey = product.categoryKey?.trim();

  // Fallback absoluto: muestra el hero si no hay imagen definida
  if (!raw) {
    return "/images/hero/hero-ecoflow.webp";
  }

  // Si ya viene con /images/... lo respetamos
  if (raw.startsWith("/images/")) {
    return raw;
  }
  if (raw.startsWith("images/")) {
    return `/${raw}`;
  }

  // Si ya viene con carpeta interna ej: "01_estaciones_generadores/eco.webp"
  if (raw.includes("/")) {
    return `/images/${raw}`;
  }

  // Formato limpio: solo filename → usamos categoryKey
  if (categoryKey) {
    return `/images/${categoryKey}/${raw}`;
  }

  // Último recurso
  return `/images/${raw}`;
}

// ---------------- QUERIES DE PRODUCTO ----------------

export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(limit = 6): Product[] {
  const featured = products.filter((p) => p.featured === true);

  if (featured.length > 0) {
    return featured.slice(0, limit);
  }

  // Fallback si aún no marcas featured:true en el JSON
  return products.slice(0, limit);
}

export function getProductsByCategory(categoryKey: string): Product[] {
  const normalizedKey = categoryKey.trim().toLowerCase();

  return products.filter((p) => {
    if (!p.categoryKey) return false;
    return p.categoryKey.trim().toLowerCase() === normalizedKey;
  });
}

export function getProductBySlug(slug: string): Product | undefined {
  const target = String(slug).trim().toLowerCase();

  return products.find((p) => {
    const candidates: string[] = [];

    if (p.id) {
      candidates.push(String(p.id));
    }
    if (p.slug) {
      candidates.push(String(p.slug));
    }

    // Siempre añadimos el slug del nombre como fallback
    candidates.push(slugifyName(p.name));

    const normalizedCandidates = candidates.map((c) =>
      c.trim().toLowerCase()
    );

    return normalizedCandidates.includes(target);
  });
}