import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Manos Builds | Premium Software Studio",
  description:
    "Custom websites, web applications, AI agents, voice assistants, automation systems, API integrations, and cloud solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${syne.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[--background] text-[--foreground]">
        {children}
      </body>
    </html>
  );
}
