// app/producto/[slug]/loading.tsx

import { Container } from "@/components/ui/Container";

export default function LoadingProduct() {
  return (
    <main className="bg-black text-zinc-50">
      <section className="border-b border-zinc-900 bg-[#050506] py-8 md:py-10 lg:py-12">
        <Container className="space-y-6 md:space-y-8">
          {/* Breadcrumb fake */}
          <div className="flex items-center gap-2 text-[11px] text-zinc-600">
            <div className="h-3 w-16 rounded-full bg-zinc-900" />
            <span>/</span>
            <div className="h-3 w-22 rounded-full bg-zinc-900" />
            <span>/</span>
            <div className="h-3 w-28 rounded-full bg-zinc-900" />
            <span>/</span>
            <div className="h-3 w-40 rounded-full bg-zinc-900" />
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:items-start">
            {/* Lado imagen */}
            <div className="space-y-4">
              <div className="h-6 w-40 rounded-full bg-zinc-900" />

              <div className="relative overflow-hidden rounded-3xl border border-zinc-900 bg-[#050506] shadow-[0_0_80px_rgba(0,0,0,0.95)]">
                <div className="pointer-events-none absolute inset-x-10 top-10 h-40 rounded-full bg-[#E9B858]/18 blur-[100px]" />
                <div className="relative mx-auto flex aspect-[4/3] w-full max-w-xl items-center justify-center bg-gradient-to-b from-zinc-900 to-black p-4 md:p-6">
                  <div className="h-32 w-40 rounded-2xl bg-zinc-950/80" />
                </div>
                <div className="border-t border-zinc-900/70 bg-black/80 px-4 py-3 text-[11px] text-zinc-600 md:px-5">
                  <div className="h-3 w-56 rounded-full bg-zinc-900" />
                </div>
              </div>
            </div>

            {/* Lado ficha */}
            <div className="space-y-6 lg:space-y-7">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="h-6 w-72 rounded-full bg-zinc-900" />
                  <div className="h-3 w-80 rounded-full bg-zinc-900" />
                  <div className="h-3 w-72 rounded-full bg-zinc-900" />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="h-9 w-40 rounded-2xl bg-zinc-900" />
                  <div className="h-7 w-32 rounded-full bg-zinc-900" />
                </div>

                <div className="h-3 w-60 rounded-full bg-zinc-900" />
              </div>

              <div className="space-y-2">
                <div className="h-9 w-full rounded-full bg-zinc-900" />
                <div className="h-3 w-72 rounded-full bg-zinc-900" />
              </div>

              <div className="space-y-3 rounded-3xl border border-zinc-900 bg-black/70 p-4 md:p-5">
                <div className="h-3 w-32 rounded-full bg-zinc-900" />
                <div className="space-y-2">
                  <div className="h-3 w-80 rounded-full bg-zinc-900" />
                  <div className="h-3 w-72 rounded-full bg-zinc-900" />
                  <div className="h-3 w-64 rounded-full bg-zinc-900" />
                </div>
              </div>

              <div className="space-y-2 rounded-3xl border border-zinc-900 bg-black/70 p-4 md:p-5">
                <div className="h-3 w-40 rounded-full bg-zinc-900" />
                <div className="grid gap-2 sm:grid-cols-2">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="h-10 rounded-xl border border-zinc-900 bg-black/90"
                    />
                  ))}
                </div>
              </div>

              <div className="h-3 w-64 rounded-full bg-zinc-900" />
            </div>
          </div>
        </Container>
      </section>

      {/* RELACIONADOS SKELETON */}
      <section className="border-b border-zinc-900 bg-black py-9 md:py-11">
        <Container className="space-y-6 md:space-y-7">
          <div className="space-y-2">
            <div className="h-3 w-40 rounded-full bg-zinc-900" />
            <div className="h-5 w-72 rounded-full bg-zinc-900" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, idx) => (
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