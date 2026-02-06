import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ContactProvider } from "@/context/contact-modal-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voltura Projects | Reformas y Soluciones Técnicas",
  description: "Empresa de reformas integrales y soluciones técnicas de alta gama en Barcelona. Calidad, diseño y seguridad.",
  icons: {
    icon: "/oro-imagotipo.png",
    shortcut: "/oro-imagotipo.png",
    apple: "/oro-imagotipo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BJK839HK51"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BJK839HK51');
          `}
        </Script>
        <ContactProvider>
          {children}
        </ContactProvider>
      </body>
    </html>
  );
}

