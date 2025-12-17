// components/home/Hero.tsx

import Link from "next/link";
import { Container } from "@/components/ui/Container";

// IMPORTANTE: este nombre debe coincidir 100% con el archivo real en public/images/hero
const HERO_IMAGE = "/images/hero/hero-ecoflow.webp";

export function Hero() {
  return (
    <section className="bg-black text-zinc-50 border-b border-zinc-900">
      <Container className="py-10 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
          {/* Texto izquierda */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                El Surtidor · Cuba
              </p>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.6rem] lg:leading-tight">
                Energía, frío y confort
                <br />
                <span className="text-zinc-300">en un solo lugar.</span>
              </h1>
              <p className="max-w-md text-sm text-zinc-400 md:text-base">
                Equipos seleccionados para sobrevivir apagones, calor y falta de
                agua en Cuba, sin cuentos ni letra pequeña. Nos escribes, te
                decimos lo que hay y cómo llega.
              </p>
            </div>

            {/* Botones */}
            <div className="flex flex-wrap items-center gap-3">
              <Link href="#destacados" className="btn-gold">
                Ver destacados
              </Link>

              <Link href="/categorias" className="btn-gold-sm">
                Ver categorías
              </Link>

              <a
                href="https://wa.me/59353358"
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                Hablar por WhatsApp
              </a>
            </div>

            {/* Mini confianza */}
            <div className="space-y-1 text-xs text-zinc-500">
              <p>Stock verificado. Precios claros. Entrega coordinada por WhatsApp.</p>
              <p className="text-zinc-600">
                Operamos como catálogo serio, no como publis sueltas en grupos.
              </p>
            </div>
          </div>

          {/* Imagen derecha */}
          <div className="relative">
            <div className="relative mx-auto flex max-w-md items-center justify-center rounded-3xl border border-zinc-800 bg-[#050505] shadow-[0_0_80px_rgba(0,0,0,0.65)] px-4 py-6 md:px-6 md:py-8">
              <div className="aspect-[4/3] w-full max-w-[420px]">
                <img
                  src={HERO_IMAGE}
                  alt="Estación de energía EcoFlow en estudio oscuro"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-3 text-center text-[11px] text-zinc-500">
              Imagen representativa. El catálogo completo está más abajo.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}