import type { Metadata } from "next";
import { Fraunces } from 'next/font/google';
import "./globals.css";

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
});

export const metadata: Metadata = {
  title: "Millennial Real Estate",
  description: "Find your dream home with Millennial Real Estate",
  metadataBase: new URL('https://millennial-web.vercel.app'),
  openGraph: {
    title: 'Millennial Real Estate',
    description: 'Find your dream home with Millennial Real Estate',
    url: 'https://millennial-web.vercel.app',
    siteName: 'Millennial Real Estate',
    images: [
      {
        url: '/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Millennial Real Estate Preview',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Millennial Real Estate',
    description: 'Find your dream home with Millennial Real Estate',
    images: ['/thumbnail.png'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
