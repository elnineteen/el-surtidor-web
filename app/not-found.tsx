// app/not-found.tsx

import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="bg-black text-zinc-50">
      <section className="min-h-[70vh] border-b border-zinc-900 bg-[#050506] py-10 md:py-14">
        <Container className="flex flex-col gap-8 md:gap-10">
          {/* Encabezado */}
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              Página no encontrada
            </p>
            <h1 className="text-2xl font-semibold tracking-tight md:text-[1.9rem]">
              Lo que estás buscando no existe en el catálogo.
            </h1>
            <p className="max-w-xl text-sm text-zinc-400 md:text-[13px]">
              Puede que el enlace esté roto, que el producto ya no esté
              disponible o que simplemente no forme parte de lo que estamos
              trabajando ahora mismo en El Surtidor.
            </p>
          </div>

          {/* Bloque principal */}
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
            {/* Lado izquierdo */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-900 bg-[#050506] p-6 shadow-[0_0_80px_rgba(0,0,0,0.95)]">
                {/* Glow dorado sutil */}
                <div className="pointer-events-none absolute inset-x-10 top-6 h-40 rounded-full bg-[#E9B858]/18 blur-[120px]" />

                <div className="relative space-y-4">
                  <p className="text-sm font-medium text-zinc-100 md:text-[15px]">
                    Lo que sí tenemos es un catálogo organizado por{" "}
                    <span className="text-[#E9B858]">problema real</span>:
                    apagones, frío, calor, agua y negocio.
                  </p>
                  <p className="text-[13px] text-zinc-400">
                    En vez de seguir buscando a ciegas, entra por la categoría
                    que más se parezca a lo que necesitas ahora mismo y desde
                    ahí afinamos por WhatsApp.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-1 text-[12px]">
                    <Link
                      href="/categorias"
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-black px-3 py-1.5 text-zinc-100 hover:border-[#E9B858]"
                    >
                      Ver todas las categorías
                    </Link>
                    <Link
                      href="/buscar"
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-zinc-300 hover:border-zinc-600"
                    >
                      Buscar en el catálogo
                    </Link>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-zinc-500 md:text-[12px]">
                Si estabas siguiendo un enlace viejo o algo que viste en otra
                parte, puedes mandarnos la captura por WhatsApp y te decimos si
                lo trabajamos o si hay un equipo equivalente.
              </p>
            </div>

            {/* Lado derecho: tarjeta WhatsApp */}
            <aside className="space-y-4 rounded-3xl border border-zinc-900 bg-black/80 p-5 md:p-6">
              <div className="space-y-2">
                <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  Ayuda rápida
                </p>
                <h2 className="text-lg font-semibold tracking-tight text-zinc-50 md:text-[1.1rem]">
                  Te guiamos directo al equipo por WhatsApp.
                </h2>
                <p className="text-sm text-zinc-400 md:text-[13px]">
                  Manda una nota, una lista o una captura de lo que buscas
                  (planta, nevera, aire, agua, negocio) y lo aterrizamos juntos.
                </p>
              </div>

              <a
                href="https://wa.me/5359353358?text=Hola,%20llegu%C3%A9%20a%20una%20p%C3%A1gina%20no%20encontrada%20en%20El%20Surtidor%20y%20necesito%20ayuda%20para%20buscar%20un%20equipo."
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp w-full justify-center text-sm md:text-[14px]"
              >
                Escribir por WhatsApp
              </a>

              <div className="space-y-1 text-[11px] text-zinc-500">
                <p>Resolvemos mejor si nos dices:</p>
                <ul className="list-disc space-y-0.5 pl-4">
                  <li>Qué equipo buscas</li>
                  <li>Para qué lo quieres usar</li>
                  <li>En qué municipio estás</li>
                </ul>
              </div>

              <div className="pt-1 text-[11px] text-zinc-600">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1 hover:text-zinc-200"
                >
                  ← Volver al inicio
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}