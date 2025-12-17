// app/categoria/[categorykey]/page.tsx

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getCategoryByKey, type Category } from "@/lib/categories";
import {
  getProductsByCategory,
  type Product,
  getProductPathSlug,
} from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";

type CategoryPageProps = {
  // en esta versión de Next, params viene como Promise
  params: Promise<{
    categorykey: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  // ⬇️ aquí está la clave: desestructurar esperando la promesa
  const { categorykey } = await params;

  const category: Category | undefined = getCategoryByKey(categorykey);
  const products: Product[] = category
    ? getProductsByCategory(category.key)
    : [];

  // 404 elegante si la categoría no existe
  if (!category) {
    return (
      <main className="bg-black text-zinc-50">
        <section className="min-h-[60vh] border-b border-zinc-900 bg-[#050506] py-10 md:py-14">
          <Container className="space-y-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              Categoría no encontrada
            </p>
            <h1 className="text-2xl font-semibold tracking-tight md:text-[1.8rem]">
              Esta categoría no existe en el catálogo.
            </h1>
            <p className="max-w-xl text-sm text-zinc-400 md:text-[13px]">
              Puede que la URL esté mal escrita o que la categoría haya sido
              movida. Vuelve a la vista general de categorías o escríbenos por
              WhatsApp y te guiamos directo al equipo que necesitas.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link href="/categorias" className="btn-gold-sm">
                Ver todas las categorías
              </Link>
              <a
                href="https://wa.me/5359353358"
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </Container>
        </section>
      </main>
    );
  }

  const total = products.length;

  return (
    <main className="bg-black text-zinc-50">
      {/* HERO DE CATEGORÍA */}
      <section className="border-b border-zinc-900 bg-[#050506] py-8 md:py-12">
        <Container className="space-y-6 md:space-y-8">
          {/* BREADCRUMBS */}
          <nav className="text-[11px] text-zinc-500">
            <Link href="/" className="hover:text-zinc-300">
              Inicio
            </Link>
            <span className="mx-1">/</span>
            <Link href="/categorias" className="hover:text-zinc-300">
              Categorías
            </Link>
            <span className="mx-1">/</span>
            <span className="text-zinc-300">{category.name}</span>
          </nav>

          {/* CABECERA PRINCIPAL */}
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-end">
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                Área del catálogo
              </p>
              <h1 className="text-2xl font-semibold tracking-tight md:text-[1.9rem]">
                {category.name}
              </h1>
              <p className="max-w-2xl text-sm text-zinc-400 md:text-[13px]">
                {category.description ||
                  "Equipos pensados para resolver un problema real en Cuba: apagones, calor, agua, negocio o seguridad."}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-[12px] text-zinc-500 md:text-[13px]">
                <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-black/60 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E9B858]" />
                  {total === 0 && "Sin equipos cargados todavía en esta categoría."}
                  {total === 1 && "1 equipo disponible en el catálogo."}
                  {total > 1 && `${total} equipos disponibles en esta categoría.`}
                </span>
                <span className="hidden text-zinc-600 md:inline">
                  Si no ves exactamente lo que buscas, escríbenos por WhatsApp y
                  buscamos alternativas.
                </span>
              </div>
            </div>

            {/* TARJETA LATERAL: WhatsApp contextual */}
            <aside className="space-y-3 rounded-3xl border border-zinc-800 bg-black/80 p-4 md:p-5 text-[13px] shadow-[0_0_40px_rgba(0,0,0,0.6)]">
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                Asesoría directa
              </p>
              <p className="text-sm font-medium text-zinc-100 md:text-[14px]">
                Si tienes dudas con modelos, consumos o compatibilidad, lo
                hablamos directo por WhatsApp.
              </p>
              <p className="text-xs text-zinc-400 md:text-[13px]">
                Mándanos captura de este listado o el nombre del equipo que te
                interesa y te respondemos con stock real, precio actualizado y
                opciones de entrega.
              </p>
              <a
                href="https://wa.me/5359353358"
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp w-full justify-center text-xs md:text-sm"
              >
                Preguntar por esta categoría
              </a>
            </aside>
          </div>
        </Container>
      </section>

      {/* LISTADO DE PRODUCTOS */}
      <section className="border-b border-zinc-900 bg-black py-9 md:py-12">
        <Container className="space-y-6 md:space-y-7">
          {total === 0 ? (
            <div className="space-y-3 rounded-3xl border border-zinc-900 bg-black/70 p-5 md:p-6">
              <h2 className="text-sm font-semibold text-zinc-100">
                Estamos terminando de cargar los equipos de esta categoría.
              </h2>
              <p className="text-sm text-zinc-400 md:text-[13px]">
                La categoría existe, pero el catálogo todavía no está completo
                en la web. Escríbenos por WhatsApp y te mandamos opciones al
                momento según lo que necesites.
              </p>
              <a
                href="https://wa.me/5359353358"
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp w-fit text-xs md:text-sm"
              >
                Ver opciones por WhatsApp
              </a>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                    Equipos en esta categoría
                  </p>
                  <h2 className="text-lg font-semibold tracking-tight text-zinc-50 md:text-xl">
                    Todos los equipos de {category.name}.
                  </h2>
                  <p className="max-w-xl text-sm text-zinc-400 md:text-[13px]">
                    Revisa fichas, precios y puntos fuertes. Cuando tengas 1 o 2
                    claros, abre el detalle y ciérralo por WhatsApp.
                  </p>
                </div>

                <Link
                  href="/categorias"
                  className="inline-flex items-center text-xs text-zinc-400 hover:text-zinc-200 md:text-[13px]"
                >
                  ← Volver al listado de categorías
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <ProductCard
                    key={product.id ?? getProductPathSlug(product)}
                    product={product}
                  />
                ))}
              </div>
            </>
          )}
        </Container>
      </section>
    </main>
  );
}