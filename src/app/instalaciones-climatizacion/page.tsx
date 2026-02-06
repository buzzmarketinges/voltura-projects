import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2, Clock, ShieldCheck, Ruler, ArrowRight, Wind, ThermometerSnowflake, Power, Fan } from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    title: "Aire Acondicionado en Barcelona | Instalación y Climatización",
    description: "Expertos en climatización en Barcelona. Instalación de aire acondicionado por conductos, splits, sistemas Airzone y mantenimiento.",
};

const faqs = [
    {
        question: "¿Qué sistema de aire acondicionado es mejor: conductos o splits?",
        answer: "Si tu vivienda tiene falsos techos o estás en plena reforma, el sistema por conductos es más estético, silencioso y reparte mejor el aire. Los splits son ideales para climatizar estancias puntuales sin necesidad de grandes obras."
    },
    {
        question: "¿Instaláis sistemas de zonificación (Airzone)?",
        answer: "Sí, somos especialistas en Airzone. Este sistema permite elegir una temperatura diferente en cada habitación con una sola máquina de conductos, mejorando el confort y ahorrando hasta un 30% de energía."
    },
    {
        question: "¿Cuánto cuesta instalar aire acondicionado por conductos?",
        answer: "El presupuesto incluye la máquina interior y exterior, la red de conductos de fibra, las rejillas y la instalación eléctrica. En Voltura Projects te ofrecemos un diseño a medida para optimizar el rendimiento y el coste."
    },
    {
        question: "¿Las máquinas tienen bomba de calor?",
        answer: "Sí, instalamos equipos Inverter con bomba de calor, lo que te permite usar el mismo sistema para refrigerar en verano y calentar en invierno de forma muy eficiente."
    },
    {
        question: "¿Cuánto tarda la instalación?",
        answer: "Una instalación de conductos en una vivienda habitada suele durar entre 3 y 4 días, incluyendo la apertura y cierre de techos si fuera necesario. La instalación de splits se realiza normalmente en un solo día."
    },
    {
        question: "¿Qué mantenimiento necesita el aire acondicionado?",
        answer: "Recomendamos una revisión anual para limpiar filtros, verificar la carga de gas y desinfectar la batería interior, garantizando así un aire saludable y el máximo rendimiento del equipo."
    }
];

export default function InstalacionesClimatizacionPage() {
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
                    "name": "Instalación de Aire Acondicionado en Barcelona",
                    "provider": {
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Voltura Projects"
                    },
                    "areaServed": "Barcelona",
                    "description": "Instalación de aire acondicionado por conductos, splits y sistemas de zonificación Airzone."
                })}
            </Script>

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/imagenes/Intalar-climatizacion-en-barcelona.webp"
                        alt="Instalación de aire acondicionado en Barcelona"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block border-b-2 border-voltura-gold pb-2 mb-4">
                        <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Climatización Eficiente</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Climatización en Barcelona
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-5xl mx-auto">
                        Confort Térmico, Silencio y Diseño Invisible
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
                        La temperatura perfecta <span className="text-voltura-gold italic">todo el año</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        En <strong>Voltura Projects</strong> diseñamos sistemas de climatización que se integran en la arquitectura de tu hogar.
                        Especialistas en la instalación de <strong>aire acondicionado por conductos en Barcelona</strong>, ofrecemos soluciones silenciosas y eficientes (tecnología Inverter A+++) para combatir el calor húmedo de la ciudad.
                    </p>
                    <p className="text-gray-400">
                        Trabajamos con las marcas líderes del sector (Daikin, Mitsubishi Electric, Fujitsu) para garantizar durabilidad y servicio técnico.
                    </p>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Wind className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Conductos Invisibles</h3>
                            <p className="text-gray-400 text-sm">Instalaciones ocultas en falso techo con rejillas lineales de diseño minimalista.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <ThermometerSnowflake className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Zonificación</h3>
                            <p className="text-gray-400 text-sm">Controla la temperatura de cada habitación de forma independiente mediante termostatos inteligentes.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Power className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Ahorro Energético</h3>
                            <p className="text-gray-400 text-sm">Equipos de alta eficiencia energética que reducen la factura de la luz sin sacrificar confort.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <CheckCircle2 className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Instalación Limpia</h3>
                            <p className="text-gray-400 text-sm">Protegemos tu mobiliario y suelo durante la obra, entregando la vivienda impecable.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-voltura-blue relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 md:w-1/2">
                        <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Metodología</h3>
                        <h2 className="text-4xl font-serif text-white mb-6">Clima a Medida</h2>
                        <p className="text-gray-300">
                            Estudiamos la orientación y aislamiento de tu vivienda para calcular la potencia frigorífica exacta necesaria.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                            <h3 className="text-2xl font-serif text-white">Cálculo Térmico</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Dimensionamos los equipos para evitar consumos excesivos o falta de potencia en los días más calurosos.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">02</div>
                            <h3 className="text-2xl font-serif text-white">Instalación</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Montaje de unidades interiores, exteriores y red de conductos o tuberías frigoríficas.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">03</div>
                            <h3 className="text-2xl font-serif text-white">Puesta en Marcha</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Vacío de la instalación, carga de gas si es necesaria y comprobación de saltos térmicos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Soluciones de Climatización</h2>
                        <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Fan className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Aire por Conductos</h3>
                                    <p className="text-gray-400">La solución más elegante. El aire se distribuye a través de rejillas discretas, sin aparatos a la vista en las paredes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <ThermometerSnowflake className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Splits de Diseño</h3>
                                    <p className="text-gray-400">Unidades murales de marcas premium con acabados en blanco mate, negro o plata para integrarse en la decoración.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Power className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Cassettes de Techo</h3>
                                    <p className="text-gray-400">Ideales para oficinas o espacios diáfanos con techos altos, distribuyendo el aire en 4 direcciones.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Renovación de Aire</h3>
                                    <p className="text-gray-400">Instalación de recuperadores de calor para ventilar la vivienda sin perder la temperatura interior, filtrando polen y contaminantes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Climatización" title="Proyectos de Climatización" />

            {/* CTA Final */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">¿Pasas calor en verano?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Climatiza tu hogar con los mejores profesionales. Comienza hoy mismo.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Pedir Presupuesto
                    </ContactButton>
                </div>
            </section>

            {/* FAQ Section with JSON-LD and correct headers */}
            <section className="py-20 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">Preguntas sobre aire acondicionado en Barcelona</h2>
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
