// app/buscar/loading.tsx

import { Container } from "@/components/ui/Container";

export default function LoadingSearch() {
  return (
    <main className="bg-black text-zinc-50">
      <section className="border-b border-zinc-900 bg-[#050506] py-8 md:py-11">
        <Container className="space-y-6 md:space-y-7">
          <div className="space-y-3">
            <div className="h-3 w-28 rounded-full bg-zinc-900" />
            <div className="h-6 w-64 rounded-full bg-zinc-900" />
            <div className="h-3 w-80 rounded-full bg-zinc-900" />
          </div>

          {/* Barra de búsqueda falsa */}
          <div className="space-y-3 rounded-3xl border border-zinc-900 bg-black/80 p-4 md:p-5">
            <div className="h-9 w-full rounded-full bg-zinc-900" />
            <div className="grid gap-2 text-[12px] text-zinc-500 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="h-7 rounded-full bg-zinc-900" />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-900 bg-black py-9 md:py-12">
        <Container className="space-y-5 md:space-y-6">
          <div className="h-3 w-52 rounded-full bg-zinc-900" />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="h-64 rounded-3xl border border-zinc-900 bg-[#050506]"
              >
                <div className="h-2/3 w-full rounded-t-3xl bg-gradient-to-b from-zinc-900 to-black" />
                <div className="space-y-2 px-4 py-3">
                  <div className="h-4 w-40 rounded-full bg-zinc-900" />
                  <div className="h-3 w-24 rounded-full bg-zinc-900" />
                  <div className="h-3 w-20 rounded-full bg-zinc-900" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}