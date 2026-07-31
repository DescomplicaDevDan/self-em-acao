import type { Metadata } from "next";
import { Geist_Mono, Nunito_Sans, Tenor_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tenorSans = Tenor_Sans({
  variable: "--font-brand-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Self em Ação | Gabriel Batista Neuropsicologia",
  description:
    "Atendimento clínico e consultoria organizacional com ciência, empatia e resultados aplicados.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${nunitoSans.variable} ${geistMono.variable} ${tenorSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
