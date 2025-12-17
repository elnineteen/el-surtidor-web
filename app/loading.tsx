// app/loading.tsx

import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <main className="bg-black text-zinc-50">
      {/* HERO SKELETON */}
      <section className="border-b border-zinc-900 bg-[#050506] py-8 md:py-12">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
          {/* Texto */}
          <div className="space-y-4">
            <div className="h-3 w-32 rounded-full bg-zinc-900" />
            <div className="space-y-2">
              <div className="h-7 w-56 rounded-full bg-zinc-900" />
              <div className="h-7 w-40 rounded-full bg-zinc-900" />
            </div>
            <div className="space-y-2">
              <div className="h-3 w-64 rounded-full bg-zinc-900" />
              <div className="h-3 w-56 rounded-full bg-zinc-900" />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="h-8 w-28 rounded-full bg-zinc-900" />
              <div className="h-8 w-28 rounded-full bg-zinc-900" />
              <div className="h-8 w-36 rounded-full bg-zinc-900" />
            </div>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="mx-auto h-64 max-w-md rounded-3xl border border-zinc-900 bg-[#050506] shadow-[0_0_40px_rgba(0,0,0,0.9)]">
              <div className="h-full w-full rounded-3xl bg-gradient-to-b from-zinc-900 to-black" />
            </div>
            <div className="mt-3 h-3 w-40 mx-auto rounded-full bg-zinc-900" />
          </div>
        </Container>
      </section>

      {/* GRID DESTACADOS FANTASMA */}
      <section className="border-b border-zinc-900 bg-[#050506] py-8 md:py-10">
        <Container className="space-y-6">
          <div className="space-y-2">
            <div className="h-3 w-32 rounded-full bg-zinc-900" />
            <div className="h-5 w-64 rounded-full bg-zinc-900" />
            <div className="h-3 w-80 rounded-full bg-zinc-900" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, idx) => (
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