import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adolf Hitler - Biografía Histórica | Historia Crítica",
  description: "Biografía histórica objetiva de Adolf Hitler: desde su infancia en Austria hasta su papel en la Segunda Guerra Mundial y el Holocausto. Análisis documentado con fuentes históricas.",
  keywords: ["Adolf Hitler", "Biografía", "Segunda Guerra Mundial", "Holocausto", "Historia", "Nazismo", "Alemania", "Tercer Reich"],
  authors: [{ name: "Historia Crítica" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Adolf Hitler - Biografía Histórica",
    description: "Análisis histórico objetivo sobre la vida de Adolf Hitler y su impacto en la historia del siglo XX",
    siteName: "Historia Crítica",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adolf Hitler - Biografía Histórica",
    description: "Análisis histórico objetivo sobre la vida de Adolf Hitler",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
