import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2, Clock, ShieldCheck, Ruler, ArrowRight, Droplets, Bath, Sparkles, Maximize2 } from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    title: "Reformas de Baños en Barcelona | Diseños de Lujo y Modernos",
    description: "Especialistas en reformas de baños en Barcelona. Transformamos tu baño en un spa con microcemento, grifería empotrada y sanitarios suspendidos.",
};

const faqs = [
    {
        question: "¿Cuánto cuesta reformar un baño completo en Barcelona?",
        answer: "El precio de una reforma de baño varía según los m2 y las calidades elegidas (alicatados, grifería, etc.). En Voltura Projects ofrecemos presupuestos detallados por partidas, adaptándonos a tus necesidades, desde baños funcionales hasta spas domésticos de alta gama."
    },
    {
        question: "¿Cuánto tiempo dura la obra?",
        answer: "Una reforma integral de un baño estándar suele durar entre 2 y 3 semanas. Coordinamos a albañiles, fontaneros y electricistas para minimizar los tiempos muertos y cumplir estrictamente los plazos."
    },
    {
        question: "¿Puedo cambiar mi bañera por un plato de ducha?",
        answer: "Sí, es una de nuestras intervenciones más habituales. Instalamos platos de ducha de resina extraplanos o de obra (al mismo nivel del suelo) para mejorar la accesibilidad y la estética del espacio."
    },
    {
        question: "¿Qué es el microcemento y es recomendable para baños?",
        answer: "El microcemento es un revestimiento continuo sin juntas, ideal para baños por su resistencia a la humedad y fácil limpieza. Aporta un look moderno y minimalista, y lo aplicamos sobre suelos, paredes e incluso muebles de obra."
    },
    {
        question: "¿Os encargáis de los sanitarios y muebles?",
        answer: "Sí. Trabajamos con las mejores marcas del mercado (Roca, Grohe, Tres, etc.) y también diseñamos muebles de baño a medida para aprovechar cada centímetro."
    },
    {
        question: "¿Instaláis sanitarios suspendidos?",
        answer: "Somos expertos en la instalación de sistemas de cisterna empotrada (tipo Geberit) y sanitarios suspendidos, que facilitan la limpieza y amplían visualmente el espacio."
    },
    {
        question: "¿Cómo gestionáis los escombros?",
        answer: "Nos encargamos de todo: protección de zonas comunes, retirada de escombros y transporte a vertedero autorizado, asegurando la limpieza durante y después de la obra."
    }
];

export default function ReformasBanosPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    };

    return (
        <main className="min-h-screen bg-voltura-blue text-voltura-stone font-sans selection:bg-voltura-gold selection:text-white">
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script id="service-schema" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Reformas de Baños en Barcelona",
                    "provider": {
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Voltura Projects"
                    },
                    "areaServed": "Barcelona",
                    "description": "Reforma integral de baños con diseños modernos, microcemento, grifería empotrada y sanitarios suspendidos."
                })}
            </Script>

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/imagenes/reforma-de-banos-en-barcelona.webp"
                        alt="Reforma de baños en Barcelona"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block border-b-2 border-voltura-gold pb-2 mb-4">
                        <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Espacios Wellness</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Reformas de Baños en Barcelona
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-5xl mx-auto">
                        Diseño Exclusivo, Materiales Nobles y Confort Absoluto
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
                        El baño que te mereces: <span className="text-voltura-gold italic">Relajación y Estilo</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        En Voltura Projects transformamos baños antiguos en oasis personales. Ya sea un proyecto de <strong>microcemento</strong> minimalista o un baño clásico con <strong>mármol</strong>, cuidamos cada detalle: desde la impermeabilización invisible hasta la iluminación ambiental.
                    </p>
                    <p className="text-gray-400">
                        Optimizamos espacios pequeños típicos de Barcelona para ganar amplitud y funcionalidad, utilizando las últimas tendencias en interiorismo.
                    </p>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Droplets className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Impermeabilización</h3>
                            <p className="text-gray-400 text-sm">Garantía total contra filtraciones y humedades mediante sistemas de última generación.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Clock className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Ejecución Rápida</h3>
                            <p className="text-gray-400 text-sm">Coordinación milimétrica para reducir las molestias y terminar la obra en tiempo récord.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Calidad Premium</h3>
                            <p className="text-gray-400 text-sm">Instalaciones de fontanería nuevas y materiales de alta resistencia y durabilidad.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <CheckCircle2 className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Limpieza Total</h3>
                            <p className="text-gray-400 text-sm">Protección exhaustiva de tu vivienda durante la obra y limpieza final profesional.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-voltura-blue relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 md:w-1/2">
                        <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Metodología</h3>
                        <h2 className="text-4xl font-serif text-white mb-6">Proceso de Renovación</h2>
                        <p className="text-gray-300">
                            Un enfoque ordenado para minimizar el impacto en tu día a día mientras creamos tu nuevo espacio.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                            <h3 className="text-2xl font-serif text-white">Diseño y Materiales</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Asesoramiento en showroom para elegir azulejos, grifería y muebles que combinen estética y funcionalidad.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">02</div>
                            <h3 className="text-2xl font-serif text-white">Renovación Técnica</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Sustitución integral de tuberías y desagües antiguos. Modificación de puntos de luz y enchufes.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">03</div>
                            <h3 className="text-2xl font-serif text-white">Acabados de Lujo</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Instalación de sanitarios, mamparas a medida y detalles finales con la máxima precisión.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Especialistas en Baños de Autor</h2>
                        <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Maximize2 className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Optimización del Espacio</h3>
                                    <p className="text-gray-400">Soluciones para baños pequeños: puertas correderas, muebles suspendidos y hornacinas de obra en la ducha.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Bath className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Duchas a Ras de Suelo</h3>
                                    <p className="text-gray-400">Eliminación de barreras arquitectónicas. Platos de ducha de obra continuos para una estética moderna y segura.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Sparkles className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Iluminación Ambiental</h3>
                                    <p className="text-gray-400">Diseño de iluminación LED indirecta en espejos y techos para crear atmósferas relajantes tipo spa.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Grifería Empotrada</h3>
                                    <p className="text-gray-400">Instalación de sistemas de ducha termostáticos empotrados a pared, rociadores efecto lluvia y cascadas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Reformas de baños" title="Proyectos de Baños" />

            {/* CTA Final */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">¿Hablamos de tu nuevo baño?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Convierte tu rutina diaria en una experiencia de lujo. Solicita visita técnica sin compromiso.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Solicitar Presupuesto
                    </ContactButton>
                </div>
            </section>

            {/* FAQ Section with JSON-LD and correct headers */}
            <section className="py-20 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">Preguntas sobre reformas de baños en Barcelona</h2>
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
