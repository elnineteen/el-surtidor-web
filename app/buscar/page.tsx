"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  getAllProducts,
  type Product,
  getProductPathSlug,
} from "@/lib/products";
import { CATEGORIES } from "@/lib/categories";
import { ProductCard } from "@/components/products/ProductCard";

type PriceRange = "all" | "0-300" | "300-600" | "600-1000" | "1000+";

const PRICE_OPTIONS: { value: PriceRange; label: string }[] = [
  { value: "all", label: "Cualquier precio" },
  { value: "0-300", label: "Hasta 300 USD" },
  { value: "300-600", label: "300 – 600 USD" },
  { value: "600-1000", label: "600 – 1000 USD" },
  { value: "1000+", label: "Más de 1000 USD" },
];

// ÁREAS: se generan a partir de las categorías reales
const AREA_OPTIONS = [
  { value: "all", label: "Todas las áreas" },
  ...CATEGORIES.map((cat) => ({
    value: cat.key,
    label: cat.name,
  })),
];

const allProducts: Product[] = getAllProducts();

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<PriceRange>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return allProducts.filter((product) => {
      // filtro por texto
      const hayTexto = q.length > 1;
      if (hayTexto) {
        const hayMatch =
          product.name.toLowerCase().includes(q) ||
          (product.descriptionShort &&
            product.descriptionShort.toLowerCase().includes(q)) ||
          (product.descriptionLong &&
            product.descriptionLong.toLowerCase().includes(q));
        if (!hayMatch) return false;
      }

      // filtro por área
      if (area !== "all") {
        if (!product.categoryKey) return false;
        if (product.categoryKey.trim().toLowerCase() !== area.trim().toLowerCase())
          return false;
      }

      // filtro por precio
      if (priceRange !== "all") {
        const price = product.priceClient ?? 0;

        if (priceRange === "0-300" && !(price > 0 && price <= 300)) return false;
        if (priceRange === "300-600" && !(price > 300 && price <= 600)) return false;
        if (priceRange === "600-1000" && !(price > 600 && price <= 1000)) return false;
        if (priceRange === "1000+" && !(price > 1000)) return false;
      }

      return true;
    });
  }, [query, area, priceRange]);

  return (
    <main className="bg-black text-zinc-50">
      {/* HERO / CABECERA */}
      <section className="border-b border-zinc-900 bg-[#050506] py-9 md:py-12">
        <Container className="space-y-6 md:space-y-7">
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              Buscador del catálogo
            </p>
            <h1 className="text-2xl font-semibold tracking-tight md:text-[1.7rem]">
              Encuentra el equipo que tienes en la cabeza.
            </h1>
            <p className="max-w-2xl text-sm text-zinc-400 md:text-[13px]">
              Escribe lo que estés buscando y ajusta por área y rango de precio.
              Cuando tengas 1 o 2 opciones claras, abre la ficha y ciérralo por
              WhatsApp.
            </p>
          </div>

          {/* CONTROLES */}
          <div className="grid gap-4 rounded-3xl border border-zinc-900 bg-black/80 p-4 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)_minmax(0,1.1fr)] md:p-5">
            {/* BÚSQUEDA TEXTO */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                Buscar por nombre o descripción
              </label>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ej: EcoFlow, nevera 10 pies, planta, presurizador..."
                className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 outline-none ring-0 placeholder:text-zinc-600 focus:border-[#E9B858]"
              />
            </div>

            {/* ÁREA */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                Área
              </label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-[#E9B858]"
              >
                {AREA_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* PRECIO */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                Rango de precio (USD)
              </label>
              <select
                value={priceRange}
                onChange={(e) =>
                  setPriceRange(e.target.value as PriceRange)
                }
                className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-[#E9B858]"
              >
                {PRICE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* PISTA / AYUDA */}
          <p className="text-[11px] text-zinc-500 md:text-[12px]">
            Si lo que necesitas es un combo completo (planta + nevera + motor
            de agua, por ejemplo), casi siempre es mejor que{" "}
            <a
              href="https://wa.me/5359353358"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-zinc-600 underline-offset-4 hover:text-zinc-300"
            >
              nos escribas directo
            </a>{" "}
            y armamos todo por WhatsApp.
          </p>
        </Container>
      </section>

      {/* RESULTADOS */}
      <section className="border-b border-zinc-900 bg-black py-9 md:py-12">
        <Container className="space-y-6 md:space-y-7">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                Resultados
              </p>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-50 md:text-xl">
                {filtered.length === 0
                  ? "Sin coincidencias por ahora."
                  : `${filtered.length} equipo${
                      filtered.length === 1 ? "" : "s"
                    } que encajan con lo que buscas.`}
              </h2>
            </div>
            <Link
              href="/categorias"
              className="text-xs text-zinc-400 hover:text-zinc-200 md:text-[13px]"
            >
              Ver catálogo por categorías →
            </Link>
          </div>

          {filtered.length === 0 ? (
            <div className="space-y-3 rounded-3xl border border-zinc-900 bg-black/70 p-5 md:p-6">
              <p className="text-sm text-zinc-400 md:text-[13px]">
                Prueba con un término más general o quita filtros. Si el equipo
                existe en Cuba, casi seguro lo podemos buscar aunque aún no esté
                todo cargado en la web.
              </p>
              <a
                href="https://wa.me/5359353358"
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp w-fit text-xs md:text-sm"
              >
                Preguntar directo por WhatsApp
              </a>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id ?? getProductPathSlug(product)}
                  product={product}
                />
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}