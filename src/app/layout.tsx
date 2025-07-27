import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/shared/Header'
import Footer from "@/components/shared/Footer";
import EmergencyButton from "@/components/shared/EmergencyButton";
import BackToTopButton from "@/components/shared/BackToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Separate viewport export (Next.js 14+ requirement)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1e40af',
}

// Update your layout.tsx metadata
export const metadata: Metadata = {
  title: "Vinay Vishal Hospital | Expert Medical Care in Roorkee",
  description: "Leading healthcare provider in Roorkee with 15+ years experience. Expert doctors, modern facilities, 24/7 emergency services. Book appointment today.",
  keywords: "hospital roorkee, medical care, emergency services, specialist doctors, healthcare roorkee",
  openGraph: {
    title: "Vinay Vishal Hospital",
    description: "Expert Medical Care in Roorkee",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col overflow-x-hidden max-w-full`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <EmergencyButton />
        <BackToTopButton />
      </body>
    </html>
  );
}
