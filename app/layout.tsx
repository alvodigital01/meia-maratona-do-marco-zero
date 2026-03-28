import type { Metadata } from "next";
import { Barlow_Condensed, Sora } from "next/font/google";

import "./globals.css";
import { siteUrl } from "@/lib/data";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap"
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "2ª Meia Maratona do Marco Zero | Recife 2026",
  description:
    "Site oficial da 2ª Meia Maratona do Marco Zero. Descubra a prova, o Desafio Capibaribe 30KM, o MZ Summit e garanta sua inscrição para 26 de julho de 2026.",
  applicationName: "Meia Maratona do Marco Zero",
  category: "sports",
  keywords: [
    "meia maratona do marco zero",
    "corrida de rua recife",
    "meia maratona recife 2026",
    "desafio capibaribe 30km",
    "mz summit",
    "corrida pernambuco"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "2ª Meia Maratona do Marco Zero | Recife 2026",
    description:
      "Recife recebe a segunda edição de uma das corridas mais esperadas do ano, agora com o Desafio Capibaribe 30KM.",
    url: siteUrl,
    siteName: "Meia Maratona do Marco Zero",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-marco-zero.png",
        width: 1200,
        height: 630,
        alt: "Identidade visual da 2ª Meia Maratona do Marco Zero"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "2ª Meia Maratona do Marco Zero | Recife 2026",
    description:
      "Performance, cidade, cultura e um novo desafio de 30KM no coração do Recife.",
    images: ["/images/og-marco-zero.png"]
  },
  robots: {
    index: true,
    follow: true
  },
  other: {
    "theme-color": "#005BFF"
  },
  icons: {
    icon: [{ url: "/images/mz-mark.png", type: "image/png" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${sora.variable} ${barlow.variable} bg-midnight text-white antialiased`}>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
