import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "KAZANOVA Móveis Sob Medida | Joinville - SC",
  description:
    "Há 15 anos transformando ambientes com móveis sob medida em Joinville e região. Cozinhas, closets, salas e muito mais. Fabricação própria.",
  keywords:
    "móveis sob medida Joinville, marcenaria Joinville, cozinhas planejadas Joinville, closet sob medida, KAZANOVA",
  openGraph: {
    title: "KAZANOVA Móveis Sob Medida",
    description: "Há 15 anos fazendo móveis na medida do seu sonho.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppBtn />
      </body>
    </html>
  );
}
