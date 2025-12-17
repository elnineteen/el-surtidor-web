// components/home/MiniCatalogGrid.tsx

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getAllProducts, type Product } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";

function getBalancedSample(products: Product[], limit: number): Product[] {
  if (!products || products.length === 0) return [];

  // Agrupamos por categoría
  const byCategory = new Map<string, Product[]>();

  for (const p of products) {
    const key = (p.categoryKey || "otros").trim();
    if (!byCategory.has(key)) {
      byCategory.set(key, []);
    }
    byCategory.get(key)!.push(p);
  }

  const result: Product[] = [];

  // 1ª pasada: 1 producto por categoría hasta llenar o quedarnos sin categorías
  for (const [, list] of byCategory) {
    if (result.length >= limit) break;
    if (list.length > 0) {
      result.push(list[0]);
    }
  }

  // 2ª pasada: si faltan, rellenamos con los siguientes de cada categoría
  if (result.length < limit) {
    for (const [, list] of byCategory) {
      if (result.length >= limit) break;
      // empezamos en 1 porque el 0 ya se usó
      for (let i = 1; i < list.length && result.length < limit; i++) {
        result.push(list[i]);
      }
    }
  }

  return result;
}

export function MiniCatalogGrid() {
  const all = getAllProducts();
  const sample = getBalancedSample(all, 8); // 8 productos variados

  if (!sample || sample.length === 0) {
    return null;
  }

  return (
    <section
      id="catalogo-rapido"
      className="border-b border-zinc-900 bg-black py-10 md:py-14"
    >
      <Container className="space-y-7 md:space-y-9">
        {/* CABECERA */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              Vista rápida
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-zinc-50 md:text-2xl">
              Un recorrido express por el catálogo.
            </h2>
            <p className="max-w-xl text-sm text-zinc-400 md:text-[13px]">
              Mezcla de estaciones, frío, ventilación y otros equipos para que
              veas el nivel real del catálogo sin tener que abrir cada sección.
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 text-xs md:items-end md:text-sm">
            <Link href="/categorias" className="btn-gold-sm">
              Ver catálogo completo
            </Link>
            <p className="text-[11px] text-zinc-500 md:text-[12px]">
              Si ya sabes lo que buscas, entra directo por categoría.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {sample.map((product) => (
            <ProductCard
              key={product.id ?? product.slug ?? product.name}
              product={product}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}