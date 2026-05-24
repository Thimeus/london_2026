import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#c41e3a",
};

export const metadata: Metadata = {
  title: "London 2026 - Kursfahrt JGS",
  description:
    "Informationsseite zur Londonfahrt der Johann-Gutenberg-Schule vom 01. bis 05. Juni 2026. Programm, Packliste, Notfallnummern und mehr.",
  keywords: [
    "London",
    "Kursfahrt",
    "Johann-Gutenberg-Schule",
    "Sprachreise",
    "2026",
  ],
  authors: [{ name: "Johann-Gutenberg-Schule" }],
  openGraph: {
    title: "London 2026 - Kursfahrt JGS",
    description: "Alle Infos zur Londonfahrt der Johann-Gutenberg-Schule",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background">{children}</body>
    </html>
  );
}
