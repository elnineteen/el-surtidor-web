// components/home/TrustBar.tsx

import { Container } from "@/components/ui/Container";

const ITEMS = [
  {
    eyebrow: "La referencia en Cuba",
    title: "Equipos para energía, frío y confort",
    text: "Seleccionamos y gestionamos equipos pensados para hogares y negocios en Cuba.",
  },
  {
    eyebrow: "Información clara antes de comprar",
    title: "Te ayudamos a elegir bien",
    text: "Analizamos tu necesidad y te recomendamos la opción adecuada según uso , presupuesto y disponibilidad real.",
  },
  {
    eyebrow: "Atención personalizada",
    title: "Todo se coordina por  WhatsApp",
    text: "Confirmamos stock y entrega en una conversación directa.",
  },
];

export function TrustBar() {
  return (
    <section className="border-b border-zinc-900 bg-[#050506] py-5 md:py-6">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Lado izquierdo: mini título */}
          <div className="max-w-xs space-y-1">
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              Por qué confiar en El Surtidor
            </p>
            <p className="text-sm text-zinc-300">
              Seleccionamos , validamos y recomendamos equipos que realmente funcionan en Cuba.
              
            </p>
          </div>

          {/* Lado derecho: 3 pilares */}
          <div className="grid flex-1 gap-3 md:grid-cols-3">
            {ITEMS.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-black/40 px-3 py-3.5 ring-1 ring-zinc-800 transition-colors hover:ring-[#E9B858]/70"
              >
                {/* Bulleta dorada */}
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E9B858] shadow-[0_0_10px_rgba(233,184,88,0.9)]" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                    {item.eyebrow}
                  </span>
                </div>

                <p className="text-[13px] font-semibold text-zinc-100">
                  {item.title}
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-zinc-400">
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