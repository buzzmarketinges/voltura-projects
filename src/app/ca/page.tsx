import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowRight, Zap, Home, Bath, CookingPot, Droplets, Wind, Fan, Sun, Mountain } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ContactButton } from "@/components/contact-button";
import { ProjectCarousel } from "@/components/project-carousel";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://volturaprojects.es/ca",
    languages: {
      "es": "https://volturaprojects.es/",
      "ca": "https://volturaprojects.es/ca"
    }
  },
  title: "Voltura Projects | Reformes i Solucions Tècniques a Barcelona",
  description: "Empresa de reformes integrals i solucions tècniques d'alta gamma a Barcelona. Qualitat, disseny i seguretat a cada projecte.",
};

export default function CatalanHomePage() {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-voltura-gold" />,
      title: "Reformes Integrals",
      desc: "Transformem habitatges per complet amb disseny d'avantguarda, gestió de llicències i acabats de màxima qualitat.",
      href: "/ca/reformes-integrals"
    },
    {
      icon: <Bath className="w-8 h-8 text-voltura-gold" />,
      title: "Reformes de Banys",
      desc: "Disseny i execució de banys moderns i funcionals. Canvis de banyera per plat de dutxa i acabats de luxe.",
      href: "/ca/reformes-banys"
    },
    {
      icon: <CookingPot className="w-8 h-8 text-voltura-gold" />,
      title: "Reformes de Cuina",
      desc: "Cuines premium a mida. Maximitzem l'espai i la lluminositat amb materials d'alta gamma i electrodomèstics eficients.",
      href: "/ca/reformes-cuines"
    },
    {
      icon: <Zap className="w-8 h-8 text-voltura-gold" />,
      title: "Instal·lació Elèctrica",
      desc: "Butlletins de llum, quadres elèctrics i cablejat general. Solucions segures i conformes a la normativa actual.",
      href: "/ca/installacions-electriques"
    },
    {
      icon: <Droplets className="w-8 h-8 text-voltura-gold" />,
      title: "Instal·lació de Fontaneria",
      desc: "Sistemes d'aigua sanitària, baixants i aixeteria. Reparació i instal·lació amb materials d'alta durabilitat.",
      href: "/ca/installacions-fontaneria"
    },
    {
      icon: <Wind className="w-8 h-8 text-voltura-gold" />,
      title: "Instal·lació de Climatització",
      desc: "Aire condicionat per conductes, splits i calefacció. Confort tèrmic amb la major eficiència energètica.",
      href: "/ca/installacions-climatitzacio"
    },
    {
      icon: <Fan className="w-8 h-8 text-voltura-gold" />,
      title: "Instal·lació d'Aerotèrmia",
      desc: "Energia neta per a aigua calenta i calefacció. Redueix la teva factura elèctrica amb sistemes de darrera generació.",
      href: "/ca/installacions-aerotermia"
    },
    {
      icon: <Sun className="w-8 h-8 text-voltura-gold" />,
      title: "Energia Fotovoltaica",
      desc: "Instal·lació de panells solars per a autoconsum. Energia renovable i sostenible per a la teva llar o negoci.",
      href: "/ca/energia-fotovoltaica"
    },
    {
      icon: <Mountain className="w-8 h-8 text-voltura-gold" />,
      title: "Treballs Verticals",
      desc: "Rehabilitació de façanes, patis de llums i treballs en alçada sense necessitat de bastides aparatosas.",
      href: "/ca/treballs-verticals"
    }
  ];

  return (
    <main className="min-h-screen bg-voltura-blue text-voltura-stone font-sans selection:bg-voltura-gold selection:text-white">
      <Navbar />

      <Script id="json-ld-local-business-ca" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "Voltura Projects",
          "image": "https://volturaprojects.es/oro-imagotipo.png",
          "description": "Empresa de reformes integrals i solucions tècniques d'alta gamma a Barcelona. Especialistes en rehabilitació, climatització i domòtica.",
          "url": "https://volturaprojects.es/ca",
          "telephone": "+34640801491",
          "email": "info@volturaprojects.es",
          "priceRange": "$$$",
          "hasMap": "https://maps.app.goo.gl/NMuSVUC3XuwYTZpT7",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Carrer de Bernat Metge, 14",
            "addressLocality": "Barcelona",
            "addressRegion": "Barcelona",
            "postalCode": "08019",
            "addressCountry": "ES"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "20:00"
            }
          ],
          "areaServed": [
            { "@type": "City", "name": "Barcelona" },
            { "@type": "City", "name": "L'Hospitalet de Llobregat" },
            { "@type": "City", "name": "Badalona" },
            { "@type": "City", "name": "Santa Coloma de Gramenet" },
            { "@type": "City", "name": "Sant Adrià de Besòs" },
            { "@type": "City", "name": "Sabadell" },
            { "@type": "City", "name": "Terrassa" },
            { "@type": "City", "name": "Sant Cugat del Vallès" },
            { "@type": "AdministrativeArea", "name": "Vallès Occidental" },
            { "@type": "AdministrativeArea", "name": "Vallès Oriental" }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serveis de Reformes i Instal·lacions",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Reformes Integrals"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Reformes de Cuines Premium i Banys de Luxe"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Aerotèrmia i Energia Fotovoltaica"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Climatització i Domòtica"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Treballs Verticals i Rehabilitació de Façanes"
                }
              }
            ]
          }
        })}
      </Script>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop"
            alt="Voltura Projects - Reformes d'alta gamma a Barcelona"
            fill
            priority
            fetchPriority="high"
            quality={75}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-1000">
          <p className="text-voltura-gold font-semibold tracking-[0.2em] uppercase text-sm md:text-base">
            Excel·lència en Construcció
          </p>
          <div className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
            Construïm <br className="hidden md:block" />
            <span className="italic font-light">el Futur</span>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Arquitectura d'avantguarda i reformes integrals a Barcelona.
            Enginyeria de precisió per a projectes que perduren.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="#servicios"
              className="bg-voltura-gold text-voltura-blue font-bold px-8 py-3 rounded-sm hover:brightness-110 transition-all uppercase tracking-wide"
            >
              Explorar Serveis
            </Link>
            <Link
              href="/ca/projectes"
              className="border border-white/30 text-white font-medium px-8 py-3 rounded-sm hover:bg-white/10 transition-all uppercase tracking-wide"
            >
              Els nostres Projectes
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicios" className="py-24 bg-voltura-blue relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Experts en reformes a Barcelona</h1>
            <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group relative bg-white/5 border border-white/5 p-8 rounded-sm hover:bg-white/10 hover:border-voltura-gold/30 transition-all duration-300 flex flex-col h-full"
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h2 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-voltura-gold transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>
              </Link>
            ))}

            {/* CTA Card */}
            <div className="flex flex-col justify-center items-center text-center p-8 bg-gradient-to-br from-white/10 to-transparent border border-white/5 rounded-sm">
              <h3 className="text-2xl font-serif text-white mb-6">
                ¿Necessites un pressupost per a la teva reforma?
              </h3>
              <ContactButton className="px-8 py-3 w-full">
                Contactar Ara
              </ContactButton>
            </div>

          </div>
        </div>
      </section>

      <ProjectCarousel />

      {/* About Section */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm">Filosofia Voltura</h3>
            <h4 className="text-4xl font-serif text-white">Qualitat que defineix Estàndards</h4>
            <p className="text-gray-300 leading-relaxed">
              A Voltura Projects, no només reformem espais; elevem l'estàndard de vida.
              El nostre enfocament "clau en mà" integra legalització, disseny i execució,
              eliminant la complexitat per al client.
            </p>
            <div className="pt-4">
              <div className="flex gap-8">
                <div>
                  <span className="block text-3xl font-bold text-voltura-gold">15+</span>
                  <span className="text-xs uppercase tracking-wider text-white">Anys d'Exp.</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-voltura-gold">200+</span>
                  <span className="text-xs uppercase tracking-wider text-white">Projectes</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-80 relative rounded-sm overflow-hidden border border-white/10 group">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
              alt="Filosofia Voltura Projects"
              fill
              loading="lazy"
              quality={80}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-voltura-blue/20"></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
