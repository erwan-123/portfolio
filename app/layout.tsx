import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/bouton"; // Ajustez le chemin selon votre projet
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "Développeur Full-Stack Next.js & Laravel",
};

export const viewport: Viewport={
  themeColor:"#070d18",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050a14] text-slate-100">
        {/* Rendu dynamique des pages */}
        {children}

        {/* Bouton WhatsApp global accessible sur toutes les pages */}
        <WhatsAppButton />
        <Analytics/>
      </body>
    </html>
  );
}