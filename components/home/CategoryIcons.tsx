// components/home/CategoryIcons.tsx

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getAllCategories } from "@/lib/categories";

export function CategoryIcons() {
  const categories = getAllCategories();

  return (
    <div className="space-y-4">
      {/* Cabecera mini */}
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Categorías principales
          </p>
          <h2 className="text-sm font-semibold tracking-tight text-zinc-50 md:text-base">
            Entra por el problema que quieres resolver.
          </h2>
        </div>

        <Link
          href="/categorias"
          className="hidden text-[11px] text-zinc-400 hover:text-zinc-200 md:inline-flex"
        >
          Ver todas las categorías →
        </Link>
      </div>

      {/* Grid de iconos */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {categories.map((cat) => {
          const iconSrc = `/images/icons/${cat.key}.webp`;

          return (
            <Link
              key={cat.key}
              href={`/categoria/${cat.key}`}
              className="group flex flex-col gap-3 rounded-2xl border border-zinc-900 bg-black/60 px-3 py-3.5
                         transition-colors hover:border-[#E9B858] hover:bg-black/90"
            >
              <div className="flex h-14 items-center justify-center rounded-xl bg-black/80 ring-1 ring-zinc-800 group-hover:ring-[#E9B858]/70">
                <img
                  src={iconSrc}
                  alt={cat.name}
                  className="h-8 w-8 object-contain"
                  loading="lazy"
                />
              </div>

              <div className="space-y-1">
                <p className="text-xs font-medium text-zinc-50 md:text-[13px]">
                  {cat.name}
                </p>
                <p className="text-[11px] text-zinc-500 md:text-[12px]">
                  {cat.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* CTA pequeña en mobile */}
      <div className="mt-1 text-center text-[11px] text-zinc-500 md:hidden">
        ¿No sabes por dónde empezar? Entra a{" "}
        <Link
          href="/categoria/01_estaciones_generadores"
          className="underline decoration-zinc-600 underline-offset-4 hover:text-zinc-300"
        >
          Estaciones y generadores
        </Link>
        .
      </div>
    </div>
  );
}