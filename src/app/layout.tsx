import type { Metadata } from "next";
import { Inter, Poppins, Outfit } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "@/provider";
import { Navbar, Footer } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit"
});

export const metadata: Metadata = {
  title: "GrovPay",
  description: "GrovPay"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${outfit.variable} font-outfit`}>
        <GlobalProvider>
          <Navbar />
          {children}
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
