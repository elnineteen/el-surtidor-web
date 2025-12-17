// components/home/HowToBuy.tsx

import Link from "next/link";
import { Container } from "@/components/ui/Container";

const STEPS = [
  {
    step: "01",
    title: "Elegir el equipo",
    text: "Entras a la categoría, revisas fichas y guardas 1–3 opciones que realmente te sirvan.",
  },
  {
    step: "02",
    title: "Enviar por WhatsApp",
    text: "Nos mandas el enlace o captura de los productos. Sin registros, sin usuario, sin clave.",
  },
  {
    step: "03",
    title: "Validar realidad",
    text: "Te confirmamos stock real, precio actualizado, variantes y condiciones según tu zona.",
  },
  {
    step: "04",
    title: "Cerrar y entregar",
    text: "Acordamos forma de pago y entrega: mensajero, punto de recogida o lo más eficiente para ti.",
  },
];

export function HowToBuy() {
  return (
    <section className="border-t border-b border-zinc-900 bg-black py-10 md:py-14">
      <Container className="space-y-8 md:space-y-10">
        {/* CABECERA */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] items-start">
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              Cómo se compra aquí
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 md:text-[1.6rem]">
              Un catálogo serio, pensado para la logística real de Cuba.
            </h2>
            <p className="max-w-xl text-sm text-zinc-400 md:text-[13px]">
              No jugamos a “tienda online” que no existe. Aquí ves equipos
              reales, hablas con una persona real y cierras por WhatsApp, con
              información clara antes de mover un dólar.
            </p>

            <div className="grid gap-3 text-xs text-zinc-400 md:text-[13px]">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E9B858] shadow-[0_0_10px_rgba(233,184,88,0.7)]" />
                <p>
                  <span className="text-zinc-200">Sin carritos vacíos:</span>{" "}
                  todo se confirma por chat, no por formularios rotos.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E9B858] shadow-[0_0_10px_rgba(233,184,88,0.7)]" />
                <p>
                  <span className="text-zinc-200">Precios vivos:</span> los
                  montos se revisan al momento según proveedor y stock.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E9B858] shadow-[0_0_10px_rgba(233,184,88,0.7)]" />
                <p>
                  <span className="text-zinc-200">Entrega con contexto:</span>{" "}
                  no prometemos lo que no se puede cumplir en tu municipio.
                </p>
              </div>
            </div>
          </div>

          {/* TARJETA LATERAL */}
          <aside className="space-y-4 rounded-3xl border border-zinc-800 bg-[#050506] p-5 md:p-6">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                Siguiente paso
              </p>
              <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
                ¿Ya viste algo que te sirve?
              </h3>
              <p className="text-sm text-zinc-400 md:text-[13px]">
                Mándanos ahora mismo el enlace o una captura. Te respondemos con
                stock, precio real y opciones de entrega antes de decidir.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="https://wa.me/5359353358"
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp w-full justify-center text-sm md:text-[14px]"
              >
                Hablar ahora por WhatsApp
              </a>
              <p className="text-[11px] text-zinc-500">
                Si aún estás mirando, puedes seguir revisando los{" "}
                <Link
                  href="/categorias"
                  className="underline decoration-zinc-600 underline-offset-4 hover:text-zinc-300"
                >
                  equipos por categoría
                </Link>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black/60 p-4 text-[11px] text-zinc-500 md:text-[12px]">
              <p className="flex items-center justify-between">
                <span className="text-zinc-300">Cobertura principal</span>
                <span className="text-zinc-400">La Habana*</span>
              </p>
              <p className="mt-2">
                Pagos coordinados por WhatsApp según cada caso (MLC, CUP, Zelle,
                etc., según proveedor).
              </p>
              <p className="mt-2 text-zinc-600">
                *Para otras provincias, revisamos posibilidad según equipo,
                ruta y proveedor.
              </p>
            </div>
          </aside>
        </div>

        {/* STEPPER DE PASOS */}
        <div className="rounded-3xl border border-zinc-900 bg-[#050506] p-5 md:p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              Paso a paso
            </p>
            <p className="text-[11px] text-zinc-500">
              Del catálogo a tu casa en 4 movimientos claros.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {STEPS.map((item) => (
              <div
                key={item.step}
                className="flex flex-col gap-2 rounded-2xl border border-zinc-800 bg-black/70 p-4"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-zinc-700 text-[11px] text-zinc-300">
                    {item.step}
                  </span>
                  <span className="text-[12px] font-medium text-zinc-100">
                    {item.title}
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed text-zinc-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}