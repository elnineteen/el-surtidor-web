// components/layout/Header.tsx

import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900 bg-black/85 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between gap-3 md:h-16">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 shadow-[0_0_22px_rgba(0,0,0,0.6)]">
            <span className="text-[11px] font-semibold tracking-[0.16em] text-[#E9B858]">
              ES
            </span>
          </div>
          <div className="hidden leading-tight sm:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
              El Surtidor
            </p>
            <p className="text-[11px] text-zinc-500">
              Energía · Frío · Agua · Cocina 
            </p>
          </div>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden items-center gap-1 text-[13px] text-zinc-400 md:flex">
          <HeaderNavLink href="/">Inicio</HeaderNavLink>
          <HeaderNavLink href="/categorias">Categorías</HeaderNavLink>
          <HeaderNavLink href="/buscar">Buscar</HeaderNavLink>
          <HeaderNavLink href="/#destacados">Destacados</HeaderNavLink>
          <HeaderNavLink href="/#mini-catalogo">Vista rápida</HeaderNavLink>
        </nav>

        {/* ACCIONES DERECHA */}
        <div className="flex items-center gap-2">
          <span className="hidden text-[10px] uppercase tracking-[0.18em] text-zinc-500 lg:inline">
            Catálogo  · Cuba
          </span>

          {/* BOTÓN WHATSAPP DESKTOP */}
          <a
            href="https://wa.me/5359353358"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#25D366] px-3 py-1.5 text-[12px] font-semibold text-black shadow-[0_0_18px_rgba(37,211,102,0.4)] transition-colors hover:bg-[#1EC157] md:inline-flex"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            WhatsApp
          </a>

          {/* BOTÓN COMPACTO MOBILE */}
          <a
            href="https://wa.me/5359353358"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-black shadow-[0_0_16px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 md:hidden"
            aria-label="Abrir WhatsApp"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>

          {/* ICONO DE BÚSQUEDA MOBILE */}
          <Link
            href="/buscar"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 shadow-[0_0_16px_rgba(0,0,0,0.5)] hover:text-white md:hidden"
            aria-label="Buscar productos"
          >
            <SearchIcon className="h-4 w-4" />
          </Link>
        </div>
      </Container>

      {/* NAV MOBILE */}
      <nav className="border-t border-zinc-900 bg-black/95 px-3 py-2 text-[11px] text-zinc-400 md:hidden">
        <Container className="flex items-center justify-between gap-2">
          <MobileNavLink href="/">Inicio</MobileNavLink>
          <MobileNavLink href="/categorias">Categorías</MobileNavLink>
          <MobileNavLink href="/buscar">Buscar</MobileNavLink>
          <MobileNavLink href="/#destacados">Destacados</MobileNavLink>
        </Container>
      </nav>
    </header>
  );
}

/* ---------- SUB COMPONENTES ---------- */

type HeaderNavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function HeaderNavLink({ href, children }: HeaderNavLinkProps) {
  return (
    <Link
      href={href}
      className="rounded-full px-3 py-1 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
    >
      {children}
    </Link>
  );
}

type MobileNavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function MobileNavLink({ href, children }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-[11px] text-zinc-300 shadow-[0_0_14px_rgba(0,0,0,0.6)]"
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
        d="M12.04 2C6.58 2 2.23 6.35 2.23 11.81c0 2.08.61 3.98 1.77 5.61L2 22l4.7-1.94a9.76 9.76 0 0 0 5.34 1.57h.01c5.46 0 9.81-4.35 9.81-9.81C21.86 6.35 17.51 2 12.04 2Zm0 17.54c-1.7 0-3.35-.46-4.8-1.33l-.34-.2-2.79 1.15.6-2.96-.19-.3a8 8 0 0 1-1.22-4.3c0-4.44 3.61-8.05 8.05-8.05 4.43 0 8.04 3.61 8.04 8.05 0 4.44-3.61 8.05-8.05 8.05Zm4.43-5.96c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.23-.62.77-.76.93-.14.16-.28.17-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.42-1.35-1.66-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.23.24-.39.08-.16.04-.29-.02-.41-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.29-.22.23-.84.82-.84 2.01 0 1.19.86 2.35.98 2.51.12.16 1.69 2.58 4.1 3.62 1.52.66 2.12.72 2.88.6.46-.07 1.43-.58 1.64-1.14.2-.56.2-1.05.14-1.14-.06-.09-.22-.14-.46-.26Z"
      />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="11"
        cy="11"
        r="7"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <line
        x1="16.5"
        y1="16.5"
        x2="21"
        y2="21"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}