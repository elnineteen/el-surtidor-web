// app/categorias/page.tsx

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CategoryIcons } from "@/components/home/CategoryIcons";
import { getAllCategories } from "@/lib/categories";

const CATEGORY_TAGS: Record<
  string,
  {
    label: string;
    hint: string;
  }
> = {
  "01_estaciones_generadores": {
    label: "Apagones & Respaldo",
    hint: "Energía estable cuando el país decide apagarse.",
  },
  "02_refrigeradores": {
    label: "Frío para casa & negocio",
    hint: "Conservar comida, bebidas y productos.",
  },
  "03_lavadoras": {
    label: "Rutina diaria",
    hint: "Lavado constante sin inventos raros.",
  },
  "04_cocinas": {
    label: "Cocina funcional",
    hint: "Preparar comida todos los días sin drama.",
  },
  "05_ventilacion": {
    label: "Calor & confort",
    hint: "Bajar la temperatura de la casa o negocio.",
  },
  "06_caja_fuerte": {
    label: "Seguridad física",
    hint: "Documentos, efectivo y bienes protegidos.",
  },
  "07_solar": {
    label: "Autonomía & ahorro",
    hint: "Menos dependencia de la red eléctrica.",
  },
  "08_agua": {
    label: "Presión & flujo",
    hint: "Tener agua cuando y como la necesitas.",
  },
  "09_exhibidoras_industrial": {
    label: "Negocio & vitrinas",
    hint: "Frío estable para ventas serias.",
  },
  "10_otros": {
    label: "Extras útiles",
    hint: "Equipos que resuelven huecos específicos.",
  },
  "11_tv": {
    label: "Entretenimiento & presencia",
    hint: "Pantallas para sala, cuarto o negocio.",
  },
  "12_moviles": {
    label: "Móviles",
    hint: "Teléfonos para trabajo, estudio y uso diario en Cuba."
  },
  "13_laptops": {
    label: "Laptops",
    hint: "Portátiles funcionales para estudiar, trabajar y emprender."
  },
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <main className="bg-black text-zinc-50">
      {/* HERO SUPERIOR */}
      <section className="border-b border-zinc-900 bg-gradient-to-b from-[#050507] via-black to-black py-10 md:py-14">
        <Container className="space-y-8 md:space-y-10">
          {/* CABECERA PRINCIPAL */}
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              Catálogo por áreas
            </p>

            <div className="grid gap-4 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] md:items-end">
              <div className="space-y-3">
                <h1 className="text-2xl font-semibold tracking-tight md:text-[1.8rem]">
                  Todas las categorías de El Surtidor,
                  <br />
                  <span className="text-zinc-300">
                    organizadas por problemas reales en Cuba.
                  </span>
                </h1>
                <p className="max-w-2xl text-sm text-zinc-400 md:text-[13px]">
                Cada categoría responde a una necesidad concreta. Entra directo a resolver.
                </p>
              </div>

              <aside className="space-y-3 rounded-3xl border border-zinc-900 bg-black/70 p-4 md:p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  ¿No sabes por dónde entrar?
                </p>
                <p className="text-sm text-zinc-300 md:text-[13px]">
                  Si tu caso es mezcla de varias cosas (negocio + casa, varios
                  equipos a la vez, planificación de apagones), lo más rápido es
                  que nos escribas directo.
                </p>
                <a
                  href="https://wa.me/5359353358"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-4 py-2 text-[13px] font-semibold text-black shadow-[0_0_20px_rgba(37,211,102,0.45)] transition-colors hover:bg-[#1EC157]"
                >
                  Hablar por WhatsApp
                </a>
                <p className="text-[11px] text-zinc-500">
                  Manda una nota de voz corta contando tu situación y vemos la
                  combinación de equipos que más sentido tenga.
                </p>
              </aside>
            </div>
          </div>

          {/* BLOQUE ICONOS DE CATEGORÍAS */}
          <div className="space-y-4 rounded-3xl border border-zinc-900 bg-[#050506] px-3 py-5 md:px-5 md:py-7 shadow-[0_0_50px_rgba(0,0,0,0.85)]">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  Entrar por iconos
                </p>
                <h2 className="text-sm font-semibold text-zinc-100 md:text-[15px]">
                  Toca el área que mejor describa tu problema ahora mismo.
                </h2>
              </div>
              <p className="text-[11px] text-zinc-500 md:text-[12px]">
                Puedes cambiar de categoría las veces que quieras. La web está
                pensada para explorar sin perderte.
              </p>
            </div>

            <div className="mt-2">
              <CategoryIcons />
            </div>
          </div>
        </Container>
      </section>

      {/* LISTADO DETALLADO DE CATEGORÍAS */}
      <section className="border-b border-zinc-900 bg-black py-9 md:py-12">
        <Container className="space-y-6 md:space-y-7">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                Vista detallada
              </p>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-50 md:text-xl">
                Explora cada categoría con más contexto.
              </h2>
              <p className="max-w-xl text-sm text-zinc-400 md:text-[13px]">
                Aquí ves, una por una, qué resuelve cada categoría y a qué tipo
                de situación está pensada. Ideal si estás armando una compra más
                grande o planificando varios equipos.
              </p>
            </div>

            <Link
              href="/buscar"
              className="inline-flex items-center text-[12px] text-zinc-400 hover:text-zinc-200 md:text-[13px]"
            >
              ¿Buscas algo específico?{" "}
              <span className="ml-1 underline underline-offset-4">
                Ir al buscador →
              </span>
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {categories.map((category) => {
              const tag = CATEGORY_TAGS[category.key];

              return (
                <article
                  key={category.key}
                  className="group relative overflow-hidden rounded-3xl border border-zinc-900 bg-gradient-to-br from-zinc-950 via-black to-black px-4 py-4 shadow-[0_0_40px_rgba(0,0,0,0.85)] transition-all hover:-translate-y-1 hover:border-[#E9B858]/90 hover:shadow-[0_0_60px_rgba(0,0,0,0.95)] md:px-5 md:py-5"
                >
                  {/* Glow sutil en hover */}
                  <div className="pointer-events-none absolute inset-x-10 -top-4 h-16 rounded-full bg-[#E9B858]/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex flex-col gap-3 md:flex-row md:items-start md:gap-4">
                    {/* COLUMNA IZQUIERDA: títulos */}
                    <div className="flex-1 space-y-2">
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-zinc-50 md:text-[15px]">
                          {category.name}
                        </h3>
                        <p className="text-[11px] text-zinc-500 md:text-[12px]">
                          {tag?.hint ??
                            "Equipos pensados para resolver un problema específico en el día a día en Cuba."}
                        </p>
                      </div>

                      <p className="text-[12px] text-zinc-400 md:text-[13px]">
                        {category.description}
                      </p>

                      {tag && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-black/70 px-3 py-1 text-[11px] text-zinc-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#E9B858] shadow-[0_0_12px_rgba(233,184,88,0.9)]" />
                          {tag.label}
                        </span>
                      )}
                    </div>

                    {/* COLUMNA DERECHA: CTA */}
                    <div className="flex flex-col items-end justify-between gap-2 text-right md:min-w-[150px]">
                      <Link
                        href={`/categoria/${category.key}`}
                        className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-black px-3 py-1.5 text-[12px] font-medium text-zinc-100 transition-colors group-hover:border-[#E9B858] group-hover:text-[#E9B858]"
                      >
                        Ver equipos
                      </Link>
                      <p className="text-[11px] text-zinc-500">
                        Ideal si ya tienes claro el tipo de equipo y quieres
                        comparar modelos.
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="text-[11px] text-zinc-600 md:text-[12px]">
            Si tu caso es muy específico (varios negocios, finca, almacén
            grande, sistemas híbridos), puedes saltarte todo esto y{" "}
            <a
              href="https://wa.me/5359353358"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-zinc-600 underline-offset-4 hover:text-zinc-300"
            >
              escribirnos directo por WhatsApp
            </a>{" "}
            para armar una propuesta a medida.
          </p>
        </Container>
      </section>
    </main>
  );
} 