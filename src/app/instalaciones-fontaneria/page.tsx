import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2, Clock, ShieldCheck, Ruler, ArrowRight, Droplets, Wrench, ThermometerSun, Bath } from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    title: "Instalaciones de Fontanería en Barcelona | Reformas y Reparaciones",
    description: "Fontaneros expertos en Barcelona. Cambio de tuberías (cobre, multicapa), bajantes, instalación de termos y descalcificadores.",
};

const faqs = [
    {
        question: "¿Es necesario cambiar las tuberías antiguas de hierro o plomo?",
        answer: "Absolutamente. Las tuberías de plomo son tóxicas y están prohibidas, y las de hierro sufren corrosión que afecta la calidad del agua y provoca fugas. Recomendamos sustituirlas por cobre o multicapa."
    },
    {
        question: "¿Qué tipo de tubería es mejor para una vivienda?",
        answer: "Depende del uso. El cobre es duradero y bacteriostático, ideal para instalaciones vistas. El multicapa es excelente para instalaciones empotradas por su resistencia y facilidad de montaje. Te asesoramos sobre la mejor opción."
    },
    {
        question: "¿Realizáis boletines de agua?",
        answer: "Sí, emitimos el boletín de agua necesario para dar de alta el suministro o realizar cambios de titularidad, certificando que la instalación cumple con la normativa vigente."
    },
    {
        question: "¿Instaláis descalcificadores para el agua de Barcelona?",
        answer: "Sí, el agua de Barcelona es muy dura (mucha cal). Instalar un descalcificador protege tus electrodomésticos, tu piel y el cabello, además de ahorrar en productos de limpieza."
    },
    {
        question: "¿Reparáis bajantes comunitarias?",
        answer: "Sí, realizamos sustitución de bajantes tanto en reformas integrales de pisos como en comunidades de vecinos, incluyendo trabajos verticales si es necesario."
    },
    {
        question: "¿Cuál es el precio de cambiar la fontanería de cocina y baño?",
        answer: "El coste varía según la distancia de los puntos de agua y los materiales. Incluimos en el presupuesto el picado, la nueva instalación y el tapado de rozas."
    }
];

export default function InstalacionesFontaneriaPage() {
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
                    "name": "Instalaciones de Fontanería en Barcelona",
                    "provider": {
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Voltura Projects"
                    },
                    "areaServed": "Barcelona",
                    "description": "Cambio de tuberías, instalación de termos, descalcificadores y reparaciones de fontanería."
                })}
            </Script>

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2670&auto=format&fit=crop"
                        alt="Instalaciones de fontanería en Barcelona"
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

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block border-b-2 border-voltura-gold pb-2 mb-4">
                        <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Fontanería Profesional</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Instalaciones de Fontanería en Barcelona
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-5xl mx-auto">
                        Calidad de Agua, Eficiencia y Materiales de Larga Duración
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
                        El bienestar empieza por <span className="text-voltura-gold italic">un agua sana</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        En <strong>Voltura Projects</strong> realizamos renovaciones integrales de fontanería para garantizar un suministro de agua limpia, con buena presión y sin fugas.
                        Como líderes en <strong>instalaciones de fontanería en Barcelona</strong>, sustituimos tuberías obsoletas por sistemas modernos que aseguran la salubridad y evitan problemas de humedades a largo plazo.
                    </p>
                    <p className="text-gray-400">
                        Trabajamos en cocinas, baños y zonas de lavadero, adaptando las tomas de agua y desagües a la nueva distribución de tu hogar.
                    </p>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Wrench className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Instalación Integral</h3>
                            <p className="text-gray-400 text-sm">Renovación completa de circuitos de agua fría y caliente sanitaria (ACS) y desagües.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Droplets className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Tratamiento de Agua</h3>
                            <p className="text-gray-400 text-sm">Instalación de ósmosis inversa y descalcificadores para mejorar la calidad del agua potable.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <ThermometerSun className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Termos y Calentadores</h3>
                            <p className="text-gray-400 text-sm">Sustitución de termos eléctricos por modelos de alta eficiencia o calentadores de gas estancos.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <CheckCircle2 className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Sin Fugas</h3>
                            <p className="text-gray-400 text-sm">Pruebas de presión exhaustivas antes de cerrar paredes para garantizar la estanqueidad total.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-voltura-blue relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 md:w-1/2">
                        <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Metodología</h3>
                        <h2 className="text-4xl font-serif text-white mb-6">Renovación Hidráulica</h2>
                        <p className="text-gray-300">
                            Sustituimos lo viejo por lo nuevo con mínima invasión y máxima limpieza.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                            <h3 className="text-2xl font-serif text-white">Replanteo</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Marcaje de los nuevos puntos de agua y desagüe según el plano de distribución de sanitarios y electrodomésticos.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">02</div>
                            <h3 className="text-2xl font-serif text-white">Instalación</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Colocación de nuevas tuberías con aislamiento térmico y fijaciones antivibración.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">03</div>
                            <h3 className="text-2xl font-serif text-white">Pruebas</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Verificación de presión y caudal. Instalación de llaves de corte generales y por cuarto húmedo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Soluciones de Fontanería Avanzada</h2>
                        <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Bath className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Grifería Empotrada</h3>
                                    <p className="text-gray-400">Instalación de cuerpos empotrados para duchas y lavabos, requiriendo precisión milimétrica en la fontanería.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <ShieldCheck className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Desagües Silenciosos</h3>
                                    <p className="text-gray-400">Utilizamos tuberías insonorizadas para las bajantes, eliminando el molesto ruido de la descarga de agua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Wrench className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Llaves de Corte Independientes</h3>
                                    <p className="text-gray-400">Sectorizamos la instalación para que puedas cortar el agua del baño sin afectar a la cocina en caso de avería.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Sanitarios Suspendidos</h3>
                                    <p className="text-gray-400">Instalación de bastidores (Geberit) para inodoros suspendidos, asegurando un anclaje firme y seguro.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Fontanería" title="Proyectos de Fontanería" />

            {/* CTA Final */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">¿Problemas con tus tuberías?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Renueva tu instalación con profesionales y olvídate de fugas y averías.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Contactar Ahora
                    </ContactButton>
                </div>
            </section>

            {/* FAQ Section with JSON-LD and correct headers */}
            <section className="py-20 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">Preguntas sobre instalaciones de fontanería en Barcelona</h2>
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
