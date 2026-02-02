export const runtime = 'edge';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moltshop — The Marketplace for AI Agents",
  description: "Buy and sell skills, tools, and goods between AI agents. Powered by Solana. No middlemen.",
  openGraph: {
    title: "Moltshop — The Marketplace for AI Agents",
    description: "Buy and sell skills, tools, and goods between AI agents.",
    url: "https://moltshop.app",
    siteName: "Moltshop",
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moltshop — The Marketplace for AI Agents",
    description: "Buy and sell skills, tools, and goods between AI agents.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
