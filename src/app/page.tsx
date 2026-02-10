import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FileText, Building2, Zap, Home, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ContactButton } from "@/components/contact-button";
import { ProjectCarousel } from "@/components/project-carousel";

export default function HomePage() {
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-voltura-gold" />,
      title: "Planificación y Fase Técnica",
      desc: "Proyectos realizados por arquitectos titulados y gestión completa de licencias.",
      href: "/reformas-integrales"
    },
    {
      icon: <Building2 className="w-8 h-8 text-voltura-gold" />,
      title: "Estructura y Albañilería",
      desc: "Desde la demolición hasta la ejecución de forjados y trabajos verticales.",
      href: "/trabajos-verticales"
    },
    {
      icon: <Zap className="w-8 h-8 text-voltura-gold" />,
      title: "Instalaciones de Vanguardia",
      desc: "Especialistas en aerotermia, fontanería, electricidad y climatización.",
      href: "/instalaciones/electricidad"
    },
    {
      icon: <Home className="w-8 h-8 text-voltura-gold" />,
      title: "Reformas e Interiores",
      desc: "Transformación de cocinas, baños, pladur y pavimentos de alta calidad.",
      href: "/reformas-integrales"
    },
    {
      icon: <Palette className="w-8 h-8 text-voltura-gold" />,
      title: "Carpintería y Acabados",
      desc: "Detalles finales: pintura, alisados y carpintería exterior/interior.",
      href: "/reformas-integrales"
    },
  ];

  return (
    <main className="min-h-screen bg-voltura-blue text-voltura-stone font-sans selection:bg-voltura-gold selection:text-white">
      <Navbar />

      <Script id="json-ld-local-business" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "Voltura Projects",
          "image": "https://volturaprojects.es/oro-imagotipo.png",
          "description": "Empresa de reformas integrales y soluciones técnicas de alta gama en Barcelona. Especialistas en rehabilitación, climatización y domótica.",
          "url": "https://volturaprojects.es/",
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
            "name": "Servicios de Reformas e Instalaciones",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Reformas Integrales"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Reformas de Cocinas Premium y Baños de Lujo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Aerotermia y Energía Fotovoltaica"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Climatización y Domótica"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Trabajos Verticales y Rehabilitación de Fachadas"
                }
              }
            ]
          }
        })}
      </Script>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Optimizada */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop"
            alt="Voltura Projects - Reformas de alta gama en Barcelona"
            fill
            priority
            fetchPriority="high"
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-1000">
          <p className="text-voltura-gold font-semibold tracking-[0.2em] uppercase text-sm md:text-base">
            Excelencia en Construcción
          </p>
          <div className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
            Construimos <br className="hidden md:block" />
            <span className="italic font-light">el Futuro</span>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Arquitectura de vanguardia y reformas integrales en Barcelona.
            Ingeniería de precisión para proyectos que perduran.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="#servicios"
              className="bg-voltura-gold text-voltura-blue font-bold px-8 py-3 rounded-sm hover:brightness-110 transition-all uppercase tracking-wide"
            >
              Explorar Servicios
            </Link>
            <Link
              href="/proyectos"
              className="border border-white/30 text-white font-medium px-8 py-3 rounded-sm hover:bg-white/10 transition-all uppercase tracking-wide"
            >
              Nuestros Proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicios" className="py-24 bg-voltura-blue relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Expertos en reformas en Barcelona</h1>
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
                ¿Necesitas un presupuesto para tu reforma?
              </h3>
              <ContactButton className="px-8 py-3 w-full">
                Contactar Ahora
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
            <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm">Filosofía Voltura</h3>
            <h4 className="text-4xl font-serif text-white">Calidad que define Estándares</h4>
            <p className="text-gray-300 leading-relaxed">
              En Voltura Projects, no solo reformamos espacios; elevamos el estándar de vida.
              Nuestro enfoque "llave en mano" integra legalización, diseño y ejecución,
              eliminando la complejidad para el cliente.
            </p>
            <div className="pt-4">
              <div className="flex gap-8">
                <div>
                  <span className="block text-3xl font-bold text-voltura-gold">15+</span>
                  <span className="text-xs uppercase tracking-wider text-white">Años de Exp.</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-voltura-gold">200+</span>
                  <span className="text-xs uppercase tracking-wider text-white">Proyectos</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-80 relative rounded-sm overflow-hidden border border-white/10 group">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
              alt="Filosofía Voltura Projects"
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
