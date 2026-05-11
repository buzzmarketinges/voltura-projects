import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { CheckCircle2, Clock, ShieldCheck, Ruler, ArrowRight, Home, Paintbrush, Hammer } from "lucide-react";
import Script from "next/script";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactButton } from "@/components/contact-button";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "./cities";
import type { Metadata } from "next";

interface Props {
    params: Promise<{ ciudad: string }>;
}

export async function generateStaticParams() {
    return cities.map((city) => ({ ciudad: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { ciudad } = await params;
    const city = getCityBySlug(ciudad);
    if (!city) return { title: "Página no encontrada" };

    return {
        title: `Reformas Integrales en ${city.name} | Voltura Projects`,
        description: `Especialistas en reformas integrales en ${city.name}. Proyectos llave en mano, arquitectura técnica y diseño de interiores de alta gama. Presupuesto gratuito.`,
        alternates: {
            canonical: `https://volturaprojects.es/reformas-integrales-en-${city.slug}`,
            languages: {
                "es": `https://volturaprojects.es/reformas-integrales-en-${city.slug}`,
                "x-default": `https://volturaprojects.es/reformas-integrales-en-${city.slug}`,
            },
        },
    };
}

const otrosServicios = (slug: string, name: string) => [
    { label: `Reformas Integrales en ${name}`, href: `/reformas-integrales-en-${slug}` },
    { label: `Reforma de Baños en ${name}`, href: `/reforma-de-banos-en-${slug}` },
    { label: `Reformas de Cocinas en ${name}`, href: `/reformas-de-cocinas-en-${slug}` },
    { label: `Instalaciones Eléctricas en ${name}`, href: `/instalaciones-electricas-en-${slug}` },
    { label: `Instalaciones de Fontanería en ${name}`, href: `/instalaciones-de-fontaneria-en-${slug}` },
    { label: `Instalación de Climatización en ${name}`, href: `/instalacion-de-climatizacion-en-${slug}` },
    { label: `Instalación de Aerotermia en ${name}`, href: `/instalacion-de-aerotermia-en-${slug}` },
    { label: `Instalación Fotovoltaica en ${name}`, href: `/instalacion-fotovoltaica-en-${slug}` },
    { label: `Trabajos Verticales en ${name}`, href: `/trabajos-verticales-en-${slug}` },
];

export default async function ReformasIntegralesCiudadPage({ params }: Props) {
    const { ciudad } = await params;
    const city = getCityBySlug(ciudad);
    if (!city) notFound();

    const faqs = [
        {
            question: `¿Cuánto cuesta una reforma integral en ${city.faqCity}?`,
            answer: `El precio varía según las calidades elegidas y el estado inicial del inmueble. En Voltura Projects realizamos un estudio previo gratuito en ${city.faqCity} para ofrecerte un presupuesto detallado y ajustado a tus necesidades, sin costes ocultos.`,
        },
        {
            question: `¿Tramitáis los permisos de obra en ${city.faqCity}?`,
            answer: `Sí. Nos encargamos de toda la gestión burocrática con el ayuntamiento de ${city.faqCity}, ya sea una obra menor o una licencia de obra mayor, asegurando que tu proyecto cumple con toda la normativa vigente del municipio.`,
        },
        {
            question: "¿Cuánto tiempo tarda una reforma completa?",
            answer: "El plazo medio para una reforma integral de un piso estándar (80-100m²) suele oscilar entre 3 y 4 meses. Establecemos un cronograma riguroso antes de empezar para garantizar la fecha de entrega.",
        },
        {
            question: "¿Qué garantía ofrecéis en las reformas?",
            answer: "Ofrecemos total tranquilidad con garantías legales sobre la ejecución y los materiales. Además, nuestro servicio post-venta asegura una respuesta rápida ante cualquier incidencia que pueda surgir tras la entrega de llaves.",
        },
        {
            question: "¿Puedo seguir viviendo en la casa durante la reforma?",
            answer: "Para una reforma integral recomendamos que la vivienda esté vacía para agilizar los trabajos y garantizar la seguridad. Si es una reforma parcial, podemos planificar fases para minimizar las molestias.",
        },
        {
            question: "¿Os encargáis del diseño de interiores?",
            answer: "Absolutamente. Contamos con un equipo de diseño e interiorismo que te asesorará en la distribución, selección de materiales, iluminación y mobiliario para crear un espacio coherente, funcional y estéticamente impecable.",
        },
        {
            question: "¿Cómo controláis los costes imprevistos?",
            answer: "La clave es una fase de planificación técnica exhaustiva. Al realizar un estudio detallado previo, minimizamos la aparición de imprevistos. En caso de surgir vicios ocultos, lo comunicamos inmediatamente con soluciones y presupuestos claros.",
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
        })),
    };

    const serviceSchema = {
        "@context": "https://schema.org/",
        "@type": "HomeAndConstructionBusiness",
        "name": "Voltura Projects",
        "image": "https://volturaprojects.es/_next/image?url=%2Foro-imagotipo.png&w=1920&q=75",
        "logo": "https://volturaprojects.es/_next/image?url=%2Foro-imagotipo.png&w=1920&q=75",
        "url": `https://volturaprojects.es/reformas-integrales-en-${city.slug}`,
        "telephone": "+34 640 80 14 91",
        "priceRange": "€€€",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Carrer de Bernat Metge, 14",
            "addressLocality": "Barcelona",
            "postalCode": "08019",
            "addressCountry": "ES",
        },
        "description": `Empresa especialista en reformas integrales de alto standing en ${city.name} con materiales de primera categoría y acabados de alta calidad.`,
        "areaServed": {
            "@type": "City",
            "name": city.name,
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "19",
            "bestRating": "5",
            "worstRating": "4",
        },
    };

    const servicios = otrosServicios(city.slug, city.displayName);

    return (
        <main className="min-h-screen bg-voltura-blue text-voltura-stone font-sans selection:bg-voltura-gold selection:text-white">
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block border-b-2 border-voltura-gold pb-2 mb-4">
                        <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Servicio Premium</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Reformas Integrales en {city.displayName}
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-3xl mx-auto">
                        {city.heroSubtitle}
                    </h2>
                    <div className="pt-8">
                        <ContactButton className="px-8 py-3 inline-flex items-center gap-2">
                            Solicitar Presupuesto Gratuito <ArrowRight className="w-5 h-5" />
                        </ContactButton>
                    </div>
                </div>
            </section>

            {/* Intro & Local SEO Block */}
            <section className="py-20 bg-voltura-blue">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        Transformamos espacios con <span className="text-voltura-gold italic">excelencia técnica</span>
                    </h2>
                    <p
                        className="text-lg text-gray-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: city.intro }}
                    />
                    <p
                        className="text-gray-400 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: city.localDetail }}
                    />
                    <p className="text-gray-400 text-sm italic">{city.processNote}</p>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Ruler className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Proyecto a Medida</h3>
                            <p className="text-gray-400 text-sm">Diseño personalizado adaptado a tus necesidades y a las características estructurales de tu vivienda en {city.displayName}.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Clock className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Plazos Garantizados</h3>
                            <p className="text-gray-400 text-sm">Cronograma de obra detallado y compromiso de entrega en la fecha acordada por contrato.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Garantía Total</h3>
                            <p className="text-gray-400 text-sm">Seguimiento post-obra y garantías legales en todos nuestros trabajos e instalaciones.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <CheckCircle2 className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Presupuesto Cerrado</h3>
                            <p className="text-gray-400 text-sm">Sin sorpresas. Transparencia total en costes desde el inicio hasta la finalización.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-voltura-blue relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 md:w-1/2">
                        <p className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Metodología</p>
                        <h2 className="text-4xl font-serif text-white mb-6">Nuestro Proceso de Reforma</h2>
                        <p className="text-gray-300">
                            Simplificamos lo complejo. Un sistema paso a paso diseñado para eliminar la incertidumbre y garantizar resultados de alta gama en {city.displayName}.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                            <h3 className="text-2xl font-serif text-white">Estudio y Diseño</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Visitamos tu inmueble en {city.displayName} para entender el espacio. Realizamos mediciones, propuestas de distribución y moodboards de materiales.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">02</div>
                            <h3 className="text-2xl font-serif text-white">Gestión Técnica</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Tramitación de licencias de obras mayores o menores, cédulas de habitabilidad y proyectos ejecutivos visados ante el ayuntamiento de {city.displayName}.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">03</div>
                            <h3 className="text-2xl font-serif text-white">Ejecución Experta</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Coordinación de gremios propios (albañiles, fontaneros, electricistas) bajo la supervisión de un jefe de obra dedicado a tu proyecto.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                            Alcance de nuestras Reformas Integrales en {city.displayName}
                        </h2>
                        <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Home className="w-8 h-8 text-voltura-gold mt-1 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Redistribución de Espacios</h3>
                                    <p className="text-gray-400">Demolición de tabiquería, apertura de cocinas al salón (concepto abierto), creación de suites con baño y vestidor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Paintbrush className="w-8 h-8 text-voltura-gold mt-1 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Acabados Premium</h3>
                                    <p className="text-gray-400">Instalación de suelos de madera natural, porcelánicos de gran formato, alisado de paredes y pintura decorativa.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Hammer className="w-8 h-8 text-voltura-gold mt-1 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Carpintería a Medida</h3>
                                    <p className="text-gray-400">Puertas de paso de suelo a techo, armarios empotrados, cocinas de diseño y mobiliario de baño personalizado.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-voltura-gold mt-1 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Instalaciones Certificadas</h3>
                                    <p className="text-gray-400">Renovación completa de electricidad (Boletín Azul/Blanco), fontanería, gas y sistemas de Aerotermia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">{city.ctaText}</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Convierte tu vivienda en el hogar que mereces. Sin compromiso, nuestros técnicos valorarán tu reforma en {city.displayName}.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Solicitar Visita Técnica
                    </ContactButton>
                </div>
            </section>

            {/* Otros Servicios */}
            <section className="py-16 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h3 className="text-2xl font-serif text-white mb-8 text-center">
                        Otros servicios en {city.displayName}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {servicios.map((s) => (
                            <li key={s.href}>
                                <Link
                                    href={s.href}
                                    className="flex items-center gap-3 text-gray-300 hover:text-voltura-gold transition-colors group py-2 border-b border-white/5"
                                >
                                    <ArrowRight className="w-4 h-4 text-voltura-gold shrink-0 group-hover:translate-x-1 transition-transform" />
                                    {s.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">
                        Preguntas sobre reformas integrales en {city.displayName}
                    </h2>
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
