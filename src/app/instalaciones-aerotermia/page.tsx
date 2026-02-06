import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2, Clock, ShieldCheck, Ruler, ArrowRight, Sun, Thermometer, Leaf, Layers } from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    title: "Aerotermia en Barcelona | Calefacción y Refrigeración Sostenible",
    description: "Especialistas en instalaciones de aerotermia en Barcelona. Ahorra hasta un 70% en tu factura con suelo radiante y bombas de calor de alta eficiencia.",
};

const faqs = [
    {
        question: "¿Qué es la aerotermia y cuánto se ahorra?",
        answer: "La aerotermia es un sistema que extrae energía del aire exterior para climatizar la vivienda y calentar agua. Es una energía renovable que puede reducir tu factura energética hasta en un 70% comparado con el gas o radiadores eléctricos."
    },
    {
        question: "¿Se puede instalar aerotermia en un piso?",
        answer: "Sí, siempre que haya espacio para la unidad exterior (similar a un aire acondicionado) y la interior (tamaño nevera o mural). Es ideal para reformas integrales."
    },
    {
        question: "¿Es compatible con mis radiadores actuales?",
        answer: "Depende. La aerotermia funciona mejor a baja temperatura (suelo radiante o radiadores de baja temperatura). Si tienes radiadores convencionales, existen equipos de aerotermia de alta temperatura, aunque el rendimiento es ligeramente menor."
    },
    {
        question: "¿Qué es mejor: suelo radiante o fancoils?",
        answer: "El suelo radiante ofrece el máximo confort y eficiencia para calefacción, pero requiere obra en el suelo. Los fancoils son ideales si quieres también refrigeración potente en verano y no quieres levantar el pavimento."
    },
    {
        question: "¿Gestionáis las subvenciones para aerotermia?",
        answer: "Sí, os asesoramos sobre las ayudas vigentes (Fondos Next Generation, etc.) y preparamos la memoria técnica necesaria para solicitarlas."
    },
    {
        question: "¿Cuánto cuesta una instalación de aerotermia?",
        answer: "La inversión inicial es más alta que una caldera de gas, pero se amortiza en 4-6 años gracias al ahorro mensual. El precio depende de la potencia de la máquina y si incluye suelo radiante."
    }
];

export default function InstalacionesAerotermiaPage() {
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
                    "name": "Instalación de Aerotermia en Barcelona",
                    "provider": {
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Voltura Projects"
                    },
                    "areaServed": "Barcelona",
                    "description": "Instalación de sistemas de aerotermia para calefacción, refrigeración y ACS con suelo radiante."
                })}
            </Script>

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/imagenes/instalar-aerotermia-en-barcelona.webp"
                        alt="Instalación de aerotermia en Barcelona"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block border-b-2 border-voltura-gold pb-2 mb-4">
                        <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Energía Renovable</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Aerotermia en Barcelona
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-5xl mx-auto">
                        Climatización Integral, Ahorro Máximo y Sostenibilidad
                    </h2>
                    <div className="pt-8">
                        <ContactButton className="px-8 py-3 inline-flex items-center gap-2">
                            Solicitar Estudio Energético <ArrowRight className="w-5 h-5" />
                        </ContactButton>
                    </div>
                </div>
            </section>

            {/* Intro & Local SEO Block */}
            <section className="py-20 bg-voltura-blue">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        El futuro del confort ya está <span className="text-voltura-gold italic">aquí</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        En <strong>Voltura Projects</strong> apostamos por la eficiencia energética. Somos instaladores certificados de <strong>aerotermia en Barcelona</strong>, la tecnología que utiliza el aire exterior para aportar calefacción en invierno, refrigeración en verano y agua caliente todo el año.
                    </p>
                    <p className="text-gray-400">
                        Olvídate del gas y las facturas elevadas. Transforma tu hogar en un espacio sostenible y de alto confort.
                    </p>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Leaf className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Energía Verde</h3>
                            <p className="text-gray-400 text-sm">Sistema respetuoso con el medio ambiente que reduce drásticamente las emisiones de CO2 de tu vivienda.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Layers className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Todo en Uno</h3>
                            <p className="text-gray-400 text-sm">Un único equipo para calefacción, aire acondicionado y agua caliente sanitaria.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Mínimo Mantenimiento</h3>
                            <p className="text-gray-400 text-sm">A diferencia de las calderas de gas, la aerotermia es más segura (sin combustión) y requiere revisiones sencillas.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <CheckCircle2 className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Alta Rentabilidad</h3>
                            <p className="text-gray-400 text-sm">El retorno de la inversión es rápido gracias al drástico ahorro mensual en suministros.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-voltura-blue relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 md:w-1/2">
                        <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Metodología</h3>
                        <h2 className="text-4xl font-serif text-white mb-6">Instalación Aerotérmica</h2>
                        <p className="text-gray-300">
                            Diseñamos el sistema hidráulico perfecto para tu vivienda.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                            <h3 className="text-2xl font-serif text-white">Estudio Energético</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Analizamos la demanda térmica de tu casa para recomendarte la potencia (kW) y marca más adecuada.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">02</div>
                            <h3 className="text-2xl font-serif text-white">Montaje Hidráulico</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Instalación de unidades y conexión con suelo radiante o fancoils, incluyendo depósito de inercia si es necesario.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">03</div>
                            <h3 className="text-2xl font-serif text-white">Configuración</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Ajuste de curvas de calefacción y termostatos para optimizar el rendimiento estacional (SCOP).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Sistemas Compatibles</h2>
                        <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Layers className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Suelo Radiante-Refrescante</h3>
                                    <p className="text-gray-400">La combinación perfecta. Calor uniforme en invierno y, con la misma instalación, suelo fresco en verano. Invisible y silencioso.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Thermometer className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Radiadores de Baja Temperatura</h3>
                                    <p className="text-gray-400">Radiadores especialmente diseñados para trabajar con agua a 35-45ºC, aprovechando la eficiencia de la bomba de calor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Sun className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Paneles Solares (Fotovoltaica)</h3>
                                    <p className="text-gray-400">Hibridamos aerotermia con placas solares. Si produces tu propia electricidad, tu calefacción puede salirte prácticamente gratis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">ACS (Agua Caliente)</h3>
                                    <p className="text-gray-400">Depósitos de agua caliente integrados de alta eficiencia, con ciclos anti-legionela programados.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Aerotermia" title="Proyectos de Aerotermia" />

            {/* CTA Final */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">¿Quieres ahorrar en tu factura?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Pásate a la aerotermia y empieza a amortizar tu inversión desde el primer mes.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Solicitar Estudio Gratuito
                    </ContactButton>
                </div>
            </section>

            {/* FAQ Section with JSON-LD and correct headers */}
            <section className="py-20 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">Preguntas sobre aerotermia en Barcelona</h2>
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
