import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ContactProvider } from "@/context/contact-modal-context";
import { CookieConsent } from "@/components/cookie-consent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Evita FOIT (Flash of Invisible Text)
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Voltura Projects | Reformas y Soluciones Técnicas",
  description: "Empresa de reformas integrales y soluciones técnicas de alta gama en Barcelona. Calidad, diseño y seguridad.",
  icons: {
    icon: "/oro-imagotipo.png",
    shortcut: "/oro-imagotipo.png",
    apple: "/oro-imagotipo.png",
  },
  openGraph: {
    title: "Voltura Projects | Reformas y Soluciones Técnicas",
    description: "Empresa de reformas integrales y soluciones técnicas de alta gama en Barcelona.",
    type: "website",
    locale: "es_ES",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Preconnect a Google Fonts para reducir latencia */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preconnect a Unsplash para imágenes */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* Preload critical CSS - Next.js lo inyectará automáticamente */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <CookieConsent />
        <ContactProvider>
          {children}
        </ContactProvider>
      </body>
    </html>
  );
}

