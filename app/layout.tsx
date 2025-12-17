// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "El Surtidor · Energía, frío y agua para Cuba",
    template: "%s · El Surtidor",
  },
  description:
    "Catálogo Apple-tier de plantas, neveras, lavadoras, ventilación, agua y más, pensado para la realidad de Cuba. Equipos reales, stock verificado y cierre por WhatsApp.",
  metadataBase: new URL("https://elsurtidor.cu"), // ⚠️ cambia esto por tu dominio real cuando lo tengas
  openGraph: {
    type: "website",
    siteName: "El Surtidor",
    title: "El Surtidor · Energía, frío y agua para Cuba",
    description:
      "Catálogo Apple-tier de equipos de energía, frío, ventilación, agua y más. Hecho para la realidad cubana.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className="bg-black text-zinc-50 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}