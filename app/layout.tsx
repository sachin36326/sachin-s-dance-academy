import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  metadataBase: new URL('https://sachinsdanceacademy.com'), // Replace with actual domain later
  title: {
    default: "Sachin's Dance Academy - India's Premier Online Dance School",
    template: "%s | Sachin's Dance Academy"
  },
  description: "Learn to dance online with Sachin's Dance Academy. Offering premium courses in Contemporary, Hip-Hop, Ballet, Bollywood, Salsa, and Kathak from expert instructors.",
  keywords: ["dance academy", "online dance classes", "learn dance online", "sachin's dance academy", "contemporary dance course", "bollywood dance classes", "hip hop dance lessons"],
  authors: [{ name: "Sachin's Dance Academy" }],
  creator: "Sachin's Dance Academy",
  publisher: "Sachin's Dance Academy",
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sachinsdanceacademy.com',
    title: "Sachin's Dance Academy - Where Movement Meets Mastery",
    description: "Join India's #1 online dance academy. Master your moves with our expert-led courses.",
    siteName: "Sachin's Dance Academy",
    images: [
      {
        url: '/images/og-image.jpg', // Needs to be added to public folder
        width: 1200,
        height: 630,
        alt: "Sachin's Dance Academy",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
