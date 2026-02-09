import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { CheckCircle2, Clock, ShieldCheck, Ruler, ArrowRight, Home, Paintbrush, Hammer } from "lucide-react";
import Script from "next/script";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    title: "Reformas Integrales en Barcelona | Voltura Projects",
    description: "Especialistas en reformas integrales de viviendas y locales en Barcelona. Proyectos llave en mano, arquitectura técnica y diseño de interiores de alta gama.",
};

const faqs = [
    {
        question: "¿Cuánto cuesta una reforma integral en Barcelona?",
        answer: "El precio varía según las calidades y el estado inicial del inmueble. En Voltura Projects realizamos un estudio previo gratuito para ofrecerte un presupuesto detallado y ajustado a tus necesidades, sin costes ocultos."
    },
    {
        question: "¿Tramitáis los permisos de obra?",
        answer: "Sí. Nos encargamos de toda la gestión burocrática con el Ayuntamiento de Barcelona, ya sea un 'Assabentat' (obra menor) o una Licencia de Obra Mayor, asegurando que tu proyecto cumple con toda la normativa vigente."
    },
    {
        question: "¿Cuánto tiempo tarda una reforma completa?",
        answer: "El plazo medio para una reforma integral de un piso estándar (80-100m2) suele oscilar entre 3 y 4 meses. Establecemos un cronograma riguroso antes de empezar para garantizar la fecha de entrega."
    },
    {
        question: "¿Qué garantía ofrecéis en las reformas?",
        answer: "Ofrecemos total tranquilidad con garantías legales sobre la ejecución y los materiales. Además, nuestro servicio post-venta asegura una respuesta rápida ante cualquier incidencia que pueda surgir tras la entrega de llaves."
    },
    {
        question: "¿Puedo seguir viviendo en la casa durante la reforma?",
        answer: "Para una reforma integral, recomendamos que la vivienda esté vacía para agilizar los trabajos y garantizar la seguridad. Si es una reforma parcial, podemos planificar fases para minimizar las molestias, aunque siempre es preferible despejar la zona de trabajo."
    },
    {
        question: "¿Os encargáis del diseño de interiores?",
        answer: "Absolutamente. Contamos con un equipo de diseño e interiorismo que te asesorará en la distribución, selección de materiales, iluminación y mobiliario para crear un espacio coherente, funcional y estéticamente impecable."
    },
    {
        question: "¿Realizáis reformas en locales comerciales u oficinas?",
        answer: "Sí, somos especialistas en reformar espacios comerciales y oficinas en Barcelona. Entendemos la importancia de los plazos en estos proyectos para minimizar el tiempo de inactividad de tu negocio."
    },
    {
        question: "¿Cómo controláis los costes imprevistos?",
        answer: "La clave es una fase de planificación técnica exhaustiva. Al realizar un estudio detallado previo, minimizamos la aparición de imprevistos. En caso de surgir vicios ocultos (estructurales o de instalaciones antiguas), lo comunicamos inmediatamente con soluciones y presupuestos claros."
    },
    {
        question: "¿Trabajáis con marcas específicas de materiales?",
        answer: "Trabajamos con una amplia gama de proveedores de confianza y marcas de alta calidad. Sin embargo, no estamos atados a ninguna exclusiva, lo que nos permite adaptarnos a tus preferencias y prescribir los materiales que mejor se ajusten a tu proyecto y presupuesto."
    },
    {
        question: "¿Es posible mejorar la eficiencia energética de mi piso antiguo en Barcelona?",
        answer: "Sí, es una de nuestras prioridades. Mejoramos el aislamiento térmico y acústico, instalamos ventanas de altas prestaciones y sistemas de climatización eficientes (como aerotermia) para reducir el consumo energético y aumentar el confort."
    }
];

export default function ReformasIntegralesPage() {
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
                    "name": "Reformas Integrales en Barcelona",
                    "provider": {
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Voltura Projects"
                    },
                    "areaServed": "Barcelona",
                    "description": "Servicio de reformas integrales llave en mano para viviendas y locales en Barcelona. Incluye diseño, gestión de licencias y ejecución de obra."
                })}
            </Script>

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
                        Reformas Integrales en Barcelona
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-3xl mx-auto">
                        Diseño, Arquitectura y Ejecución Llave en Mano
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
                    <p className="text-lg text-gray-300 leading-relaxed">
                        En <strong>Voltura Projects</strong>, entendemos que una reforma integral no es solo una obra, es la materialización de un nuevo estilo de vida. Como empresa líder en <strong>reformas en Barcelona</strong>, combinamos la visión arquitectónica con una ejecución impecable.
                    </p>
                    <p className="text-gray-400">
                        Gestionamos todo el proceso: desde el diseño inicial y la tramitación de licencias en el Ayuntamiento de Barcelona, hasta la entrega de llaves. Nuestro compromiso es la tranquilidad absoluta del cliente.
                    </p>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Ruler className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Proyecto a Medida</h3>
                            <p className="text-gray-400 text-sm">Diseño personalizado adaptado a tus necesidades y a las características estructurales de tu vivienda.</p>
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
                        <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Metodología</h3>
                        <h2 className="text-4xl font-serif text-white mb-6">Nuestro Proceso de Reforma</h2>
                        <p className="text-gray-300">
                            Simplificamos lo complejo. Un sistema paso a paso diseñado para eliminar la incertidumbre y garantizar resultados de alta gama.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                            <h3 className="text-2xl font-serif text-white">Estudio y Diseño</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Visitamos tu inmueble para entender el espacio. Realizamos mediciones, propuestas de distribución y moodboards de materiales.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">02</div>
                            <h3 className="text-2xl font-serif text-white">Gestión Técnica</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Tramitación de licencias de obras mayores o menores, cédulas de habitabilidad y proyectos ejecutivos visados.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">03</div>
                            <h3 className="text-2xl font-serif text-white">Ejecución Experta</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Coordinación de gremios propios (albañiles, fontaneros, electricistas) bajo la supervisión de un jefe de obra dedicado.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Alcance de nuestras Reformas Integrales</h2>
                        <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Home className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Redistribución de Espacios</h3>
                                    <p className="text-gray-400">Demolición de tabiquería, apertura de cocinas al salón (concepto abierto), creación de suites con baño y vestidor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Paintbrush className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Acabados Premium</h3>
                                    <p className="text-gray-400">Instalación de suelos de madera natural, porcelánicos de gran formato, alisado de paredes y pintura decorativa.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Hammer className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Carpintería a Medida</h3>
                                    <p className="text-gray-400">Puertas de paso de suelo a techo, armarios empotrados, cocinas de diseño y mobiliario de baño personalizado.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Instalaciones Certificadas</h3>
                                    <p className="text-gray-400">Renovación completa de electricidad (Boletín Azul/Blanco), fontanería, gas y sistemas de Aerotermia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Reformas Integrales" title="Proyectos de Reformas Integrales" />

            {/* CTA Final */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">¿Hablamos de tu proyecto?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Convierte tu vivienda en el hogar que mereces. Sin compromiso, nuestros técnicos valorarán tu reforma.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Solicitar Visita Técnica
                    </ContactButton>
                </div>
            </section>

            {/* FAQ Section with JSON-LD and correct headers */}
            <section className="py-20 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">Preguntas sobre reformas integrales en Barcelona</h2>
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
