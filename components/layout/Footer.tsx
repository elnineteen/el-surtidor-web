// components/layout/Footer.tsx

import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black pt-8 pb-5 md:pt-10 md:pb-6">
      <Container className="space-y-8 md:space-y-10">
        {/* BLOQUE SUPERIOR */}
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] md:items-start">
          {/* COLUMNA 1: BRAND */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 shadow-[0_0_22px_rgba(0,0,0,0.7)]">
                <span className="text-[11px] font-semibold tracking-[0.16em] text-[#E9B858]">
                  ES
                </span>
              </div>
              <div className="leading-tight">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                  El Surtidor
                </p>
                <p className="text-[11px] text-zinc-500">
                  Energía · Frío · Agua · Cuba
                </p>
              </div>
            </div>

            <p className="max-w-sm text-[12px] text-zinc-500 md:text-[13px]">
              Catálogo pensado para la realidad cubana: apagones, calor,
              agua, negocio y seguridad. Sin humo, sin letra pequeña: equipos
              reales, coordinados por WhatsApp.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-[11px] text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E9B858] shadow-[0_0_10px_rgba(233,184,88,0.7)]" />
              Catálogo en beta · Actualizado manualmente
            </div>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN */}
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Navegación
            </p>
            <div className="grid grid-cols-2 gap-2 text-[13px] text-zinc-400">
              <FooterLink href="/">Inicio</FooterLink>
              <FooterLink href="/categorias">Categorías</FooterLink>
              <FooterLink href="/buscar">Buscar productos</FooterLink>
              <FooterLink href="/#destacados">Destacados</FooterLink>
              <FooterLink href="/#mini-catalogo">Vista rápida</FooterLink>
              <FooterLink href="/como-comprar">Cómo comprar</FooterLink>
            </div>
          </div>

          {/* COLUMNA 3: COMPRA & CONTACTO */}
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Compra & contacto
            </p>
            <div className="space-y-2 text-[12px] text-zinc-400 md:text-[13px]">
              <p>
                Todo se cierra por WhatsApp: stock real, precios actualizados,
                opciones de pago y entrega según tu zona.
              </p>
              <p>
                Cobertura principal:{" "}
                <span className="text-zinc-200">La Habana y alrededores*</span>
              </p>
              <p className="text-[11px] text-zinc-600">
                *Para otras provincias, revisamos caso a caso según el equipo y
                el proveedor.
              </p>
            </div>

            <a
              href="https://wa.me/5359353358"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-1.5 text-[12px] font-semibold text-black shadow-[0_0_18px_rgba(37,211,102,0.4)] transition-colors hover:bg-[#1EC157]"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Hablar por WhatsApp
            </a>
          </div>
        </div>

        {/* LÍNEA INFERIOR */}
        <div className="flex flex-col gap-2 border-t border-zinc-900 pt-4 text-[11px] text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} El Surtidor. Catálogo privado, no es
            una tienda online automatizada.
          </p>
          <p className="text-zinc-600">
            Si ves algún precio raro o falta de info, mejor{" "}
            <a
              href="https://wa.me/5359353358"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-zinc-600 underline-offset-4 hover:text-zinc-300"
            >
              nos escribes directo
            </a>
            .
          </p>
        </div>
      </Container>
    </footer>
  );
}

/* ---------- SUBCOMPONENTES ---------- */

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="hover:text-zinc-100 hover:underline hover:underline-offset-4"
    >
      {children}
    </Link>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.23 6.35 2.23 11.81c0 2.08.61 3.98 1.77 5.61L2 22l4.7-1.94a9.76 9.76 0 0 0 5.34 1.57h.01c5.46 0 9.81-4.35 9.81-9.81C21.86 6.35 17.51 2 12.04 2Zm0 17.54c-1.7 0-3.35-.46-4.8-1.33l-.34-.2-2.79 1.15.6-2.96-.19-.3a8 8 0 0 1-1.22-4.3c0-4.44 3.61-8.05 8.05-8.05 4.43 0 8.04 3.61 8.04 8.05 0 4.44-3.61 8.05-8.05 8.05Z"
      />
    </svg>
  );
}