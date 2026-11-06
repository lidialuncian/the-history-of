import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display", subsets: ["latin"], weight: ["400", "500"],
  style: ["normal", "italic"], display: "swap",
});
const sans = DM_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "The History Of... | Everything has a history",
  description: "Discover the extraordinary stories behind the things that move us. Explore a curated collection of ballet, tango, and opera histories, coming soon.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
