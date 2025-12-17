// components/home/FeaturedGrid.tsx

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getFeaturedProducts } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";

export function FeaturedGrid() {
  const featured = getFeaturedProducts(6);

  if (!featured || featured.length === 0) {
    return null;
  }

  return (
    <section
      id="destacados"
      className="border-b border-zinc-900 bg-[#050506] py-9 md:py-12"
    >
      <Container className="space-y-7 md:space-y-8">
        {/* CABECERA + CONTEXTO */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          {/* Texto principal */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-black/60 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E9B858] shadow-[0_0_10px_rgba(233,184,88,0.9)]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">
                Selección curada
              </span>
            </div>

            <div className="space-y-1.5">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-50 md:text-2xl">
                Equipos que de verdad cambian el día a día.
              </h2>
              <p className="max-w-xl text-sm text-zinc-400 md:text-[13px]">
                Una selección corta de estaciones, frío y confort que tienen
                sentido hoy en Cuba: menos improvisación, más equipos que
                aguantan apagones, calor y agua complicada.
              </p>
            </div>
          </div>

          {/* Acción lateral */}
          <div className="flex flex-col items-start gap-2 text-xs md:items-end md:text-sm">
            <Link
              href="/categorias"
              className="inline-flex items-center rounded-full border border-zinc-700 px-4 py-2 text-zinc-100 transition-colors hover:border-[#E9B858] hover:text-zinc-50"
            >
              Ver todo el catálogo
            </Link>
            <p className="text-[11px] text-zinc-500 md:text-[12px]">
              Si no ves lo que buscas aquí, revisa por categoría
              {" o escríbenos por WhatsApp."}
            </p>
          </div>
        </div>

        {/* GRID DE PRODUCTOS */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {featured.map((product) => (
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