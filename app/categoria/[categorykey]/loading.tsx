// app/categoria/[categorykey]/loading.tsx

import { Container } from "@/components/ui/Container";

export default function LoadingCategory() {
  return (
    <main className="bg-black text-zinc-50">
      <section className="border-b border-zinc-900 bg-[#050506] py-8 md:py-12">
        <Container className="space-y-6 md:space-y-8">
          {/* Breadcrumb skeleton */}
          <div className="flex gap-2 text-[11px] text-zinc-600">
            <div className="h-3 w-16 rounded-full bg-zinc-900" />
            <span>/</span>
            <div className="h-3 w-22 rounded-full bg-zinc-900" />
            <span>/</span>
            <div className="h-3 w-32 rounded-full bg-zinc-900" />
          </div>

          {/* Header skeleton */}
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-end">
            <div className="space-y-3">
              <div className="h-3 w-32 rounded-full bg-zinc-900" />
              <div className="space-y-2">
                <div className="h-6 w-64 rounded-full bg-zinc-900" />
                <div className="h-3 w-80 rounded-full bg-zinc-900" />
                <div className="h-3 w-72 rounded-full bg-zinc-900" />
              </div>
              <div className="h-7 w-56 rounded-full bg-zinc-900" />
            </div>

            <div className="space-y-3 rounded-3xl border border-zinc-900 bg-black/80 p-4 md:p-5">
              <div className="h-3 w-28 rounded-full bg-zinc-900" />
              <div className="h-3 w-64 rounded-full bg-zinc-900" />
              <div className="h-3 w-56 rounded-full bg-zinc-900" />
              <div className="h-8 w-full rounded-2xl bg-zinc-900" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-900 bg-black py-9 md:py-12">
        <Container className="space-y-6 md:space-y-7">
          <div className="space-y-2">
            <div className="h-3 w-40 rounded-full bg-zinc-900" />
            <div className="h-5 w-72 rounded-full bg-zinc-900" />
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
                  <div className="h-3 w-28 rounded-full bg-zinc-900" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}