import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2, Clock, ShieldCheck, Ruler, ArrowRight, Paintbrush, HardHat, Building } from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    title: "Trabajos Verticales en Barcelona | Rehabilitación de Fachadas",
    description: "Empresa de trabajos verticales en Barcelona. Rehabilitación de fachadas, patios de luces y pintura sin andamios. Rápidos, seguros y económicos.",
};

const faqs = [
    {
        question: "¿Qué ventajas tienen los trabajos verticales frente a los andamios?",
        answer: "La principal ventaja es el coste y la rapidez. Al no necesitar montar andamios, ahorras en tasas de ocupación de vía pública y el inicio de la obra es inmediato. Además, es un sistema menos intrusivo para los vecinos (menos riesgo de robo y más luz)."
    },
    {
        question: "¿Qué tipo de trabajos realizáis con técnicas verticales?",
        answer: "Realizamos rehabilitación de fachadas, pintura de patios de luces, impermeabilización de cubiertas, reparación de grietas, limpieza de cristales, instalación de bajantes y salidas de humos, y sistemas anti-aves."
    },
    {
        question: "¿Es seguro este sistema?",
        answer: "Totalmente. Nuestros técnicos cuentan con formación específica en altura (IRATA/ANETVA) y utilizamos equipos de protección individual (EPIs) de última generación. Cumplimos estrictamente la Ley de Prevención de Riesgos Laborales."
    },
    {
        question: "¿Hacéis ITE (Inspección Técnica de Edificios)?",
        answer: "Sí, colaboramos con arquitectos técnicos para realizar la ITE de tu edificio y ejecutamos las obras necesarias para subsanar las deficiencias detectadas en el informe."
    },
    {
        question: "¿Trabajáis en patios de luces interiores?",
        answer: "Sí, es nuestra especialidad. Accedemos mediante cuerdas desde la cubierta para reparar, pintar o cambiar bajantes en patios de luces, sin necesidad de entrar en las viviendas ni montar estructuras complejas."
    },
    {
        question: "¿Ofrecéis garantía de los trabajos de pintura?",
        answer: "Sí, utilizamos pinturas y revestimientos de alta calidad (impermeabilizantes, elásticos, autolimpiables) y ofrecemos garantías de hasta 10 años dependiendo del producto aplicado."
    }
];

export default function TrabajosVerticalesPage() {
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
                    "name": "Trabajos Verticales en Barcelona",
                    "provider": {
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Voltura Projects"
                    },
                    "areaServed": "Barcelona",
                    "description": "Rehabilitación de fachadas, pintura de patios de luces y reparaciones en altura sin andamios."
                })}
            </Script>

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop"
                        alt="Empresa de trabajos verticales en Barcelona"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block border-b-2 border-voltura-gold pb-2 mb-4">
                        <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Sin Andamios</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Trabajos Verticales en Barcelona
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-5xl mx-auto">
                        Rehabilitación de Fachadas, Seguridad y Eficiencia
                    </h2>
                    <div className="pt-8">
                        <ContactButton className="px-8 py-3 inline-flex items-center gap-2">
                            Solicitar Presupuesto Fachada <ArrowRight className="w-5 h-5" />
                        </ContactButton>
                    </div>
                </div>
            </section>

            {/* Intro & Local SEO Block */}
            <section className="py-20 bg-voltura-blue">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        Llegamos donde otros <span className="text-voltura-gold italic">no pueden</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        En <strong>Voltura Projects</strong> ofrecemos soluciones de acceso difícil mediante técnicas de posicionamiento con cuerdas. Somos especialistas en <strong>trabajos verticales en Barcelona</strong>, permitiendo rehabilitar fachadas y patios de luces sin las molestias ni el coste de los andamios.
                    </p>
                    <p className="text-gray-400">
                        Intervenciones rápidas, seguras y económicas para comunidades de propietarios y administradores de fincas.
                    </p>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Clock className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Rapidez</h3>
                            <p className="text-gray-400 text-sm">Inicio de obra inmediato. Montaje y desmontaje de los sistemas de acceso en el mismo día.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Seguridad</h3>
                            <p className="text-gray-400 text-sm">Técnicos certificados IRATA con seguro de responsabilidad civil específico para trabajos en altura.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <CheckCircle2 className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Economía</h3>
                            <p className="text-gray-400 text-sm">Ahorra hasta un 40% en el presupuesto al eliminar el coste de alquiler y montaje de andamios.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Building className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Versatilidad</h3>
                            <p className="text-gray-400 text-sm">Accedemos a cualquier rincón de la fachada, patios interiores, cornisas o cubiertas inclinadas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-voltura-blue relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 md:w-1/2">
                        <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Metodología</h3>
                        <h2 className="text-4xl font-serif text-white mb-6">Rehabilitación Eficiente</h2>
                        <p className="text-gray-300">
                            Protocolos de actuación probados para garantizar resultados perfectos sin riesgos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                            <h3 className="text-2xl font-serif text-white">Inspección</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Visita técnica para evaluar el estado de los paramentos, grietas o desprendimientos y elegir el sistema de anclaje.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">02</div>
                            <h3 className="text-2xl font-serif text-white">Ejecución</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Saneamiento de soportes, aplicación de imprimaciones y capas de acabado siguiendo las especificaciones del fabricante.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">03</div>
                            <h3 className="text-2xl font-serif text-white">Acabado</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Retirada de escombros, limpieza de zonas afectadas y entrega de obra con revisión del cliente.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Servicios en Altura</h2>
                        <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Paintbrush className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Pintura de Fachadas</h3>
                                    <p className="text-gray-400">Rehabilitación estética y funcional con pinturas impermeabilizantes y transpirables para proteger el edificio.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <HardHat className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Reparación de Grietas</h3>
                                    <p className="text-gray-400">Cosido de grietas estructurales y sellado de juntas de dilatación para evitar filtraciones de agua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Building className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Patios de Luces</h3>
                                    <p className="text-gray-400">Limpieza, saneado y pintura de patios interiores, mejorando la luminosidad y salubridad de las viviendas.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Instalaciones Verticales</h3>
                                    <p className="text-gray-400">Colocación de bajantes, chimeneas de extracción de humos y conductos de aire acondicionado por fachada.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Trabajos Verticales" title="Proyectos de Trabajos Verticales" />

            {/* CTA Final */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">¿Necesitas rehabilitar tu fachada?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Pide presupuesto sin compromiso y descubre cuánto puedes ahorrar con nuestros sistemas verticales.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Contactar Ahora
                    </ContactButton>
                </div>
            </section>

            {/* FAQ Section with JSON-LD and correct headers */}
            <section className="py-20 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">Preguntas sobre trabajos verticales en Barcelona</h2>
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
