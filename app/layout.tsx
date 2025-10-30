import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// === Font Configuration ===
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-montserrat",
});

// === Page Metadata ===
export const metadata: Metadata = {
  title: "AI 360 Future",
  description:
    "Discover the world powered by AI – Tools, Jobs, Courses, and Innovation.",
};

// === Root Layout ===
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} bg-gray-50 text-neutral-900 antialiased`}
      >
        {/* === Header (Sticky, Global) === */}
        <Header />

        {/* === Main Content === */}
        <main>{children}</main>

        {/* === Footer Placeholder === */}
        <Footer />
      </body>
    </html>
  );
}
