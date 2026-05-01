// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jsonLd = {
  "@context": "[https://schema.org](https://schema.org)",
  "@type": "Organization",
  "name": "Scooty XP",
  "url": "https://myscooty.ng",
  "logo": "[https://myscooty.ng/images/scooty-xp-logo.png](https://myscooty.ng/images/scooty-xp-logo.png)",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+234-915-430-5583",
    "contactType": "customer support",
    "areaServed": "NG",
    "availableLanguage": "English"
  }
};

// Render inside <head>
// <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

export const metadata: Metadata = {
  metadataBase: new URL("https://myscooty.ng"),
  title: "Scooty XP — Fast Delivery in Lagos | Groceries, Food & More",
  description: "Order groceries, food, medicines and more across Lagos. Fast, reliable delivery with Scooty XP.",
  keywords: ["delivery Lagos", "grocery delivery Nigeria", "food delivery Lagos"],
  openGraph: {
    title: "Scooty XP — Fast Delivery in Lagos",
    description: "Your everyday delivery, fast and easy.",
    url: "https://myscooty.ng",
    siteName: "Scooty XP",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_NG",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
