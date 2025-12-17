// app/producto/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import {
  getProductBySlug,
  getProductImagePath,
  getProductsByCategory,
  type Product,
} from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";

// Next 15: params es Promise
type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product: Product | undefined = getProductBySlug(slug);
  if (!product) return notFound();

  const imageSrc = getProductImagePath(product);

  const priceLabel =
    typeof product.priceClient === "number"
      ? `${product.priceClient.toLocaleString("es-ES", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })} USD`
      : "Precio a consultar";

  const categoryLabel = product.categoryName ?? "Categoría sin nombre";

  // RELATED
  let related: Product[] = [];
  if (product.categoryKey) {
    const allInCategory = getProductsByCategory(product.categoryKey);
    related = allInCategory
      .filter((p) => {
        if (p.id && product.id && p.id === product.id) return false;
        if (p.slug && product.slug && p.slug === product.slug) return false;
        if (p.name === product.name) return false;
        return true;
      })
      .slice(0, 4);
  }

  const hasSpecs = product.specs && Object.keys(product.specs).length > 0;
  const hasPoints = product.points && product.points.length > 0;

  return (
    <main className="bg-black text-zinc-50">
      {/* HERO DEL PRODUCTO */}
      <section className="border-b border-zinc-900 bg-[#050506] py-8 md:py-10 lg:py-12">
        <Container className="space-y-6 md:space-y-8">

          {/* BREADCRUMBS */}
          <nav className="text-[11px] text-zinc-500">
            <Link href="/" className="hover:text-zinc-300">Inicio</Link>
            <span className="mx-1">/</span>

            <Link href="/categorias" className="hover:text-zinc-300">
              Categorías
            </Link>

            {product.categoryKey && (
              <>
                <span className="mx-1">/</span>
                <Link
                  href={`/categoria/${product.categoryKey}`}
                  className="hover:text-zinc-300"
                >
                  {categoryLabel}
                </Link>
              </>
            )}

            <span className="mx-1">/</span>
            <span className="text-zinc-300">{product.name}</span>
          </nav>

          {/* GRID PRINCIPAL */}
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:items-start">

            {/* IMAGEN + GLOW */}
            <div className="space-y-4">

              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-black/70 px-3 py-1 text-[11px] text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E9B858] shadow-[0_0_14px_rgba(233,184,88,0.95)]" />
                <span>{categoryLabel}</span>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-zinc-900 bg-[#050506] shadow-[0_0_80px_rgba(0,0,0,0.95)]">

                {/* GLOW DORADO */}
                <div className="pointer-events-none absolute inset-x-10 top-10 h-40 rounded-full bg-[#E9B858]/25 blur-[110px] opacity-80" />
                <div className="pointer-events-none absolute inset-x-24 top-20 h-24 rounded-full bg-[#E9B858]/20 blur-[90px] opacity-70" />
                <div className="pointer-events-none absolute inset-x-40 top-28 h-12 rounded-full bg-[#E9B858]/15 blur-[70px]" />

                {/* IMAGEN */}
                <div className="relative mx-auto flex aspect-[4/3] w-full max-w-xl items-center justify-center bg-gradient-to-b from-zinc-900 to-black p-4 md:p-6">
                  <img
                    src={imageSrc}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full max-h-[360px] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* FAJA */}
                <div className="flex items-center justify-between border-t border-zinc-900/70 bg-black/80 px-4 py-3 text-[11px] text-zinc-500 md:px-5">
                  <span>Imagen referencial del equipo.</span>
                  <span className="hidden md:inline text-zinc-400">
                    Especificaciones finales se confirman antes del pago.
                  </span>
                </div>
              </div>
            </div>

            {/* INFORMACIÓN */}
            <div className="space-y-6 lg:space-y-7">

              {/* TITULO + PRECIO */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h1 className="text-xl font-semibold tracking-tight md:text-2xl lg:text-[1.9rem]">
                    {product.name}
                  </h1>

                  {product.descriptionShort && (
                    <p className="max-w-xl text-sm text-zinc-400 md:text-[13px]">
                      {product.descriptionShort}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-baseline gap-2 rounded-2xl bg-zinc-900/90 px-4 py-2 shadow-[0_0_40px_rgba(0,0,0,0.9)]">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                      Precio
                    </span>
                    <span className="text-sm font-semibold text-[#E9B858] md:text-base">
                      {priceLabel}
                    </span>
                  </div>

                  {product.status && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-zinc-800 bg-black/70 px-3 py-1 text-[11px] text-zinc-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                      {product.status}
                    </span>
                  )}
                </div>

                <p className="text-[11px] text-zinc-500 md:text-[12px]">
                  Confirmamos stock real, precio actualizado y condiciones para tu municipio antes de pagar.
                </p>
              </div>

              {/* CTA WHATSAPP */}
              <div className="space-y-2">
                <a
                  href={`https://wa.me/5359353358?text=${encodeURIComponent(
                    `Hola, vi este equipo en El Surtidor y quiero más detalles:\n\n${product.name} (${priceLabel})`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp w-full justify-center text-sm md:text-[14px]"
                >
                  Preguntar por este equipo
                </a>

                <p className="text-[11px] text-zinc-500">
                  Manda captura y el municipio. Te damos opciones reales.
                </p>
              </div>

              {/* DESCRIPCIÓN LARGA + PUNTOS */}
              <div className="space-y-4 rounded-3xl border border-zinc-900 bg-black/70 p-4 md:p-5">

                {product.descriptionLong && (
                  <p className="text-sm text-zinc-300 md:text-[13px]">
                    {product.descriptionLong}
                  </p>
                )}

                {hasPoints && (
                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                      Puntos fuertes
                    </p>

                    <ul className="space-y-1.5 text-sm text-zinc-200 md:text-[13px]">
                      {product.points!.map((pt, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E9B858]" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* ESPECIFICACIONES */}
              {hasSpecs && (
                <div className="space-y-3 rounded-3xl border border-zinc-900 bg-black/70 p-4 md:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                    Ficha técnica
                  </p>

                  <dl className="grid gap-2 text-[13px] text-zinc-300 sm:grid-cols-2">
                    {Object.entries(product.specs!).map(([key, value]) => {
                      if (!value) return null;

                      const label = key
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, (l) => l.toUpperCase());

                      return (
                        <div
                          key={key}
                          className="flex items-center justify-between gap-3 rounded-xl border border-zinc-900 bg-black/80 px-3 py-2"
                        >
                          <dt className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                            {label}
                          </dt>
                          <dd className="text-[13px] text-zinc-100">
                            {String(value)}
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              )}

              {/* LINKS */}
              <div className="flex flex-wrap gap-3 text-[12px] text-zinc-500 md:text-[13px]">
                {product.categoryKey && (
                  <Link
                    href={`/categoria/${product.categoryKey}`}
                    className="inline-flex items-center rounded-full border border-zinc-800 px-3 py-1 hover:border-[#E9B858] hover:text-zinc-100"
                  >
                    ← Volver a {categoryLabel}
                  </Link>
                )}

                <Link
                  href="/categorias"
                  className="inline-flex items-center hover:text-zinc-200"
                >
                  Ver otras categorías
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="border-b border-zinc-900 bg-black py-9 md:py-11">
          <Container className="space-y-6 md:space-y-7">

            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  Productos parecidos
                </p>

                <h2 className="text-lg font-semibold tracking-tight text-zinc-50 md:text-xl">
                  Otros equipos de {categoryLabel}.
                </h2>

                <p className="max-w-xl text-sm text-zinc-400 md:text-[13px]">
                  Si este no es exactamente el modelo, compara estas variantes.
                </p>
              </div>

              <Link
                href={
                  product.categoryKey
                    ? `/categoria/${product.categoryKey}`
                    : "/categorias"
                }
                className="inline-flex items-center text-xs text-zinc-400 hover:text-zinc-200 md:text-[13px]"
              >
                Ver todo en esta categoría →
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {related.map((item) => (
                <ProductCard
                  key={item.id ?? item.slug ?? item.name}
                  product={item}
                />
              ))}
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}