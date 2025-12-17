// components/products/ProductCard.tsx

import Link from "next/link";
import {
  type Product,
  getProductImagePath,
  getProductPathSlug,
} from "@/lib/products";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const href = `/producto/${getProductPathSlug(product)}`;
  const imageSrc = getProductImagePath(product);

  const priceLabel = formatPrice(product.priceClient);
  const statusInfo = getStatusInfo(product.status);

  return (
    <Link
      href={href}
      aria-label={product.name}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-900 bg-[#050506] shadow-[0_0_26px_rgba(0,0,0,0.75)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E9B858] hover:shadow-[0_0_46px_rgba(0,0,0,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9B858] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      {/* CINTA SUPERIOR SUTIL */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E9B858]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* IMAGEN */}
      <div className="relative px-3 pt-3 md:px-4 md:pt-4">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900 via-black to-black">
          {/* Glow de fondo */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(233,184,88,0.18),_transparent_55%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
          <img
            src={imageSrc}
            alt={product.name}
            loading="lazy"
            className="relative z-[1] h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.04] group-hover:translate-y-[-2px]"
          />
        </div>

        {/* BADGE DESTACADO */}
        {product.featured && (
          <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-black/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#E9B858] shadow-[0_0_18px_rgba(0,0,0,0.9)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E9B858]" />
            Destacado
          </div>
        )}
      </div>

      {/* CONTENIDO */}
      <div className="flex flex-1 flex-col gap-3 px-3 pb-3 pt-2 md:px-4 md:pb-4">
        {/* NOMBRE + CHIPS */}
        <div className="space-y-1.5">
          <p className="line-clamp-2 text-[13px] font-semibold leading-snug text-zinc-50 md:text-[14px]">
            {product.name}
          </p>

          <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-zinc-500">
            {product.categoryName && (
              <span className="inline-flex max-w-[70%] items-center truncate rounded-full border border-zinc-800 bg-black/70 px-2 py-0.5">
                {product.categoryName}
              </span>
            )}

            {statusInfo && (
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${statusInfo.className}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {statusInfo.label}
              </span>
            )}
          </div>
        </div>

        {/* DESCRIPCIÓN CORTA */}
        {product.descriptionShort && (
          <p className="line-clamp-2 text-[12px] text-zinc-400 md:text-[13px]">
            {product.descriptionShort}
          </p>
        )}

        {/* SEPARADOR SUTIL */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-900 to-transparent" />

        {/* PRECIO + CTA */}
        <div className="mt-auto flex items-end justify-between gap-3 pt-1.5">
          <div className="space-y-0.5">
            <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Precio
            </p>
            <p className="text-[15px] font-semibold text-[#E9B858] md:text-[16px]">
              {priceLabel}
            </p>
            <p className="text-[11px] text-zinc-500">
              Detalles y cierre por WhatsApp.
            </p>
          </div>

          <div className="flex flex-col items-end gap-1 text-right">
            <span className="inline-flex items-center gap-1 rounded-full border border-[#E9B858] bg-black px-2.5 py-1 text-[11px] text-[#E9B858] shadow-[0_0_14px_rgba(0,0,0,0.7)] transition-colors group-hover:bg-[#E9B858] group-hover:text-black">
              Ver detalle
            </span>
            <span className="text-[10px] text-zinc-500">
              Toca para ver más.
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ---------- HELPERS ---------- */

function formatPrice(price: number | null | undefined): string {
  if (!price || price <= 0) return "Consultar precio";
  try {
    return `${price.toLocaleString("es-ES", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })} USD`;
  } catch {
    return `${price} USD`;
  }
}

function getStatusInfo(
  status?: string | null
): { label: string; className: string } | null {
  if (!status) return null;

  const value = status.toLowerCase().trim();

  if (value.includes("agotado") || value.includes("out")) {
    return {
      label: "Agotado",
      className: "border border-red-900 bg-red-950/70 text-red-400",
    };
  }

  if (value.includes("bajo") || value.includes("low")) {
    return {
      label: "Bajo stock",
      className:
        "border border-amber-900 bg-amber-950/70 text-amber-400",
    };
  }

  if (
    value.includes("stock") ||
    value.includes("disponible") ||
    value.includes("in_stock")
  ) {
    return {
      label: "En stock",
      className:
        "border border-emerald-900 bg-emerald-950/70 text-emerald-400",
    };
  }

  return null;
}