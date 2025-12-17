// app/page.tsx

import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { CategoryIcons } from "@/components/home/CategoryIcons";
import { FeaturedGrid } from "@/components/home/FeaturedGrid";
import { MiniCatalogGrid } from "@/components/home/MiniCatalogGrid";
import { HowToBuy } from "@/components/home/HowToBuy";

export default function HomePage() {
  return (
    <main className="bg-black text-zinc-50">
      {/* Hero principal con imagen EcoFlow */}
      <Hero />

      {/* Barra de confianza */}
      <TrustBar />

      {/* Bloque de categorías con iconos */}
      <section className="border-b border-zinc-900 bg-[#050506] py-8 md:py-10">
        <Container className="space-y-6 md:space-y-7">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                Áreas del catálogo
              </p>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-50 md:text-2xl">
                Energía, frío, agua y algo más,
                <br />
                <span className="text-zinc-300">todo organizado por problema real.</span>
              </h2>
              <p className="max-w-xl text-sm text-zinc-400 md:text-[13px]">
                En vez de perderte en un listado infinito, arrancas por el
                problema que tienes hoy: apagones, falta de agua, calor,
                negocio, seguridad. Luego entras a ver los modelos.
              </p>
            </div>

            <div className="text-[11px] text-zinc-500 md:text-[12px] md:text-right">
              <p>
                Si no sabes en qué categoría entra lo que estás imaginando,
              </p>
              <p>
                nos escribes por WhatsApp y lo resolvemos directo.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-900 bg-black/60 px-3 py-4 md:px-5 md:py-6">
            <CategoryIcons />
          </div>
        </Container>
      </section>

      {/* Destacados */}
      <FeaturedGrid />

      {/* Mini catálogo mezclado */}
      <MiniCatalogGrid />

      {/* Cómo comprar / cierre por WhatsApp */}
      <HowToBuy />
    </main>
  );
}