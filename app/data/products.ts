// data/products.ts

import productsData from "./products_merged.json";

export type ProductStatus = "active" | "hidden" | "out_of_stock" | "low_stock";

export type Product = {
  id: string;
  name: string;
  categoryKey: string;
  categoryName: string;
  priceClient: number;
  status: ProductStatus;
  featured: boolean;
  imageFilename: string | null;
  descriptionShort: string;
  descriptionLong: string;
  points: string[];
  specs: Record<string, string | number>;
};

// Cast básico del JSON a tipo fuerte
export const products: Product[] = productsData as Product[];

export function getAllProducts(): Product[] {
  return products.filter(p => p.status !== "hidden");
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(categoryKey: string): Product[] {
  return getAllProducts().filter(p => p.categoryKey === categoryKey);
}

export function getFeaturedProducts(): Product[] {
  return getAllProducts().filter(p => p.featured);
}