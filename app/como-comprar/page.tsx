// app/como-comprar/page.tsx

import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function ComoComprarPage() {
  return (
    <main className="bg-black text-zinc-50">
      {/* HERO / INTRO */}
      <section className="border-b border-zinc-900 bg-gradient-to-b from-[#050506] via-black to-black py-10 md:py-14">
        <Container className="space-y-6 md:space-y-8">
          {/* MIGAS */}
          <nav className="text-[11px] text-zinc-500">
            <Link href="/" className="hover:text-zinc-300">
              Inicio
            </Link>
            <span className="mx-1">/</span>
            <span className="text-zinc-300">Cómo comprar</span>
          </nav>

          <div className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-end">
            {/* TEXTO PRINCIPAL */}
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  Cómo funciona
                </p>
                <h1 className="text-2xl font-semibold tracking-tight md:text-[1.9rem]">
                  Comprar en El Surtidor es simple,
                  <br />
                  <span className="text-zinc-300">
                    pensado para la realidad de Cuba.
                  </span>
                </h1>
                <p className="max-w-xl text-sm text-zinc-400 md:text-[13px]">
                  No somos una “tienda online” de mentira con carrito roto.
                  Funcionamos como un catálogo serio: ves el equipo, nos
                  escribes por WhatsApp, confirmamos realidad y cerramos con
                  condiciones claras.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-black/70 px-3 py-1 text-[11px] text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E9B858] shadow-[0_0_12px_rgba(233,184,88,0.9)]" />
                <span>Catálogo verificado · Coordinamos todo por WhatsApp</span>
              </div>
            </div>

            {/* TARJETA LATERAL */}
            <aside className="space-y-3 rounded-3xl border border-zinc-800 bg-black/80 p-4 md:p-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                Paso final
              </p>
              <p className="text-sm font-medium text-zinc-100 md:text-[14px]">
                Cuando veas un equipo que te sirva, no te compliques:
                <span className="text-zinc-300">
                  {" "}
                  mándanos captura por WhatsApp y empezamos desde ahí.
                </span>
              </p>
              <a
                href="https://wa.me/5359353358"
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp w-full justify-center text-sm md:text-[14px]"
              >
                Hablar ahora por WhatsApp
              </a>
              <p className="text-[11px] text-zinc-500">
                Resumimos todo por chat: precio final, stock real, forma de
                pago y entrega según tu zona.
              </p>
            </aside>
          </div>
        </Container>
      </section>

      {/* PASOS PRINCIPALES */}
      <section className="border-b border-zinc-900 bg-[#050506] py-9 md:py-12">
        <Container className="space-y-6 md:space-y-7">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-50 md:text-xl">
              Los 4 pasos, sin cuento.
            </h2>
            <p className="max-w-2xl text-sm text-zinc-400 md:text-[13px]">
              El proceso es siempre el mismo, tanto si es una estación EcoFlow
              como una nevera, un motor de agua o varios equipos para un
              negocio.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                step: "01",
                title: "Miras el catálogo",
                text: "Entres por destacados, categorías o búsqueda, el objetivo es el mismo: encontrar el equipo que resuelve tu problema hoy.",
              },
              {
                step: "02",
                title: "Nos mandas el equipo",
                text: "Cuando algo te interese, nos mandas captura o enlace por WhatsApp. Sin formularios ni inventos.",
              },
              {
                step: "03",
                title: "Confirmamos realidad",
                text: "Revisamos stock real, precio actualizado, variantes y condiciones según tu municipio o provincia.",
              },
              {
                step: "04",
                title: "Cierre y entrega",
                text: "Definimos forma de pago y tipo de entrega: mensajero, punto de recogida o la opción más lógica en tu caso.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col gap-2 rounded-2xl border border-zinc-800 bg-black/70 p-4 shadow-[0_0_30px_rgba(0,0,0,0.85)]"
              >
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 text-[10px] text-zinc-300">
                    {item.step}
                  </span>
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-zinc-300 md:text-[13px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FORMAS DE PAGO / COBERTURA */}
      <section className="border-b border-zinc-900 bg-black py-9 md:py-12">
        <Container className="space-y-7 md:space-y-8">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-50 md:text-xl">
              Pagos, cobertura y lo que se habla claro.
            </h2>
            <p className="max-w-2xl text-sm text-zinc-400 md:text-[13px]">
              No todos los equipos tienen las mismas condiciones. Por eso no
              hay “pagar ahora” automático: primero te mostramos bien el equipo
              y luego hablamos como personas.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {/* Cobertura */}
            <div className="space-y-2 rounded-2xl border border-zinc-900 bg-[#050506] p-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                Cobertura
              </p>
              <p className="text-sm font-semibold text-zinc-100">
                Principalmente La Habana,
                <br />
                con opciones para otras zonas.
              </p>
              <p className="text-xs text-zinc-400 md:text-[13px]">
                Dependiendo del equipo y el proveedor, se pueden coordinar
                entregas fuera de La Habana. Eso siempre se ve caso a caso por
                WhatsApp.
              </p>
            </div>

            {/* Pagos */}
            <div className="space-y-2 rounded-2xl border border-zinc-900 bg-[#050506] p-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                Formas de pago
              </p>
              <p className="text-sm font-semibold text-zinc-100">
                MLC, CUP, y opciones externas
                <span className="text-zinc-300"> según proveedor.</span>
              </p>
              <p className="text-xs text-zinc-400 md:text-[13px]">
                Algunos equipos aceptan Zelle u otras vías externas; otros, solo
                pagos locales. Siempre lo dejamos claro antes de que hagas
                cualquier movimiento de dinero.
              </p>
            </div>

            {/* Transparencia */}
            <div className="space-y-2 rounded-2xl border border-zinc-900 bg-[#050506] p-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                Transparencia
              </p>
              <p className="text-sm font-semibold text-zinc-100">
                Sin letra pequeña,
                <span className="text-zinc-300"> sin “ya casi llega”.</span>
              </p>
              <p className="text-xs text-zinc-400 md:text-[13px]">
                Si un equipo no está, lo decimos. Si el precio cambió, lo
                decimos. Si no hay forma lógica de llegar a tu zona, también te
                lo decimos. Preferimos perder una venta que hacerte perder
                tiempo y dinero.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="border-b border-zinc-900 bg-[#050506] py-10 md:py-12">
        <Container className="space-y-5 md:space-y-6">
          <div className="space-y-2 text-center">
            <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              Listo para escoger
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-zinc-50 md:text-[1.6rem]">
              Primero miras el catálogo,
              <br />
              luego cerramos todo por WhatsApp.
            </h2>
            <p className="mx-auto max-w-xl text-sm text-zinc-400 md:text-[13px]">
              Empieza por las categorías o por los destacados. Cuando veas
              algo que tenga sentido para tu casa o tu negocio, nos escribes
              directo. Sin registro, sin código, sin rodeos.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/categorias" className="btn-gold-sm">
              Ver categorías
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