import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2, Clock, ShieldCheck, Ruler, ArrowRight, Sun, Zap, Battery, LineChart } from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    title: "Placas Solares en Barcelona | Instalación y Autoconsumo",
    description: "Instalación de paneles solares en Barcelona. Ahorra hasta un 80% en tu factura de luz. Gestión integral: permisos, instalación y subvenciones.",
};

const faqs = [
    {
        question: "¿Es rentable instalar placas solares en Barcelona?",
        answer: "Sí, Barcelona cuenta con un alto número de horas de sol al año. Una instalación bien dimensionada permite amortizar la inversión en 4-6 años, generando ahorro directo desde el primer día."
    },
    {
        question: "¿Necesito baterías para mi instalación fotovoltaica?",
        answer: "No son obligatorias, pero sí muy recomendables para maximizar el ahorro. Las baterías permiten almacenar el excedente de energía producida durante el día para usarla por la noche, alcanzando cuotas de autoconsumo del 80-90%."
    },
    {
        question: "¿Qué permisos se necesitan para instalar paneles solares?",
        answer: "Nos encargamos de toda la burocracia: licencia de obra (comunicación previa en la mayoría de municipios), legalización ante Industria y gestión de excedentes con la comercializadora."
    },
    {
        question: "¿Hay subvenciones disponibles?",
        answer: "Sí, existen bonificaciones en el IBI (hasta 50% durante varios años según el municipio), deducciones en el IRPF y ayudas de los fondos Next Generation. Nosotros gestionamos la solicitud de todas las ayudas a las que tengas derecho."
    },
    {
        question: "¿Se pueden instalar placas en una comunidad de vecinos?",
        answer: "Por supuesto. El autoconsumo colectivo es una excelente opción para reducir la factura de la luz de la comunidad (ascensor, luz escalera) y de los vecinos participantes."
    },
    {
        question: "¿Qué mantenimiento requieren los paneles solares?",
        answer: "El mantenimiento es mínimo. Recomendamos una limpieza anual de los módulos para evitar que la suciedad reduzca su rendimiento y una revisión eléctrica de las protecciones e inversor."
    }
];

export default function EnergiaFotovoltaicaPage() {
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
                    "name": "Instalación de Placas Solares en Barcelona",
                    "provider": {
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Voltura Projects"
                    },
                    "areaServed": "Barcelona",
                    "description": "Instalación de paneles solares para autoconsumo en viviendas y empresas. Gestión integral de permisos y subvenciones."
                })}
            </Script>

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/imagenes/intalacion-de-placas-fotovoltaicas-en-barcelona.webp"
                        alt="Instalación de placas solares en Barcelona"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block border-b-2 border-voltura-gold pb-2 mb-4">
                        <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Autoconsumo Solar</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Instalación Fotovoltaica en Barcelona
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-5xl mx-auto">
                        Genera tu propia energía, ahorra dinero y protege el planeta
                    </h2>
                    <div className="pt-8">
                        <ContactButton className="px-8 py-3 inline-flex items-center gap-2">
                            Solicitar Estudio Solar Gratuito <ArrowRight className="w-5 h-5" />
                        </ContactButton>
                    </div>
                </div>
            </section>

            {/* Intro & Local SEO Block */}
            <section className="py-20 bg-voltura-blue">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        Tu tejado tiene un valor oculto: <span className="text-voltura-gold italic">Desbloquéalo</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        En <strong>Voltura Projects</strong> somos expertos en la instalación de <strong>paneles solares en Barcelona</strong> y provincia. Ofrecemos soluciones llave en mano para viviendas unifamiliares, comunidades de vecinos y empresas que quieren reducir su dependencia de las eléctricas.
                    </p>
                    <p className="text-gray-400">
                        Utilizamos exclusivamente componentes Tier 1 (paneles de máxima eficiencia y garantía) e inversores de primeras marcas (Huawei, Fronius, SolarEdge) para asegurar el rendimiento de tu instalación durante más de 25 años.
                    </p>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <LineChart className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Ahorro Inmediato</h3>
                            <p className="text-gray-400 text-sm">Reduce tu factura de la luz hasta un 70-80% desde el primer mes gracias al autoconsumo directo.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Garantía 25 Años</h3>
                            <p className="text-gray-400 text-sm">Trabajamos solo con fabricantes que garantizan la producción de los paneles a largo plazo.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Clock className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Trámites Incluidos</h3>
                            <p className="text-gray-400 text-sm">Nos encargamos de legalizar la instalación, tramitar subvenciones y bonificaciones del IBI.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Sun className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Monitorización</h3>
                            <p className="text-gray-400 text-sm">Controla desde tu móvil cuánta energía produces y consumes en tiempo real con nuestra app.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-voltura-blue relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 md:w-1/2">
                        <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Metodología</h3>
                        <h2 className="text-4xl font-serif text-white mb-6">El Camino al Sol</h2>
                        <p className="text-gray-300">
                            Un proceso sencillo y transparente para que empieces a generar tu propia energía cuanto antes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                            <h3 className="text-2xl font-serif text-white">Estudio Personalizado</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Analizamos tu factura de luz y la superficie de tu tejado para diseñar la instalación óptima (número de paneles, ubicación, inversor).
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">02</div>
                            <h3 className="text-2xl font-serif text-white">Instalación Certificada</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Montaje realizado por instaladores propios autorizados, cumpliendo toda la normativa de seguridad y estanqueidad de la cubierta.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">03</div>
                            <h3 className="text-2xl font-serif text-white">Legalización y Ayudas</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Tramitamos el CIE, solicitamos la compensación de excedentes y gestionamos las subvenciones disponibles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Tecnología Solar Avanzada</h2>
                        <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Zap className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Paneles Monocristalinos PERC</h3>
                                    <p className="text-gray-400">Instalamos módulos de última generación que captan más energía incluso en días nublados o con poca radiación.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Battery className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Baterías Inteligentes</h3>
                                    <p className="text-gray-400">Sistemas de almacenamiento (Huawei Luna, Tesla Powerwall) para aprovechar tu energía solar también por la noche.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Inversores Híbridos</h3>
                                    <p className="text-gray-400">Equipos preparados para añadir baterías en el futuro sin necesidad de cambiar el inversor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <ShieldCheck className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Estructuras de Aluminio</h3>
                                    <p className="text-gray-400">Soportes ligeros y ultra-resistentes a la corrosión, con fijaciones que garantizan la integridad de tu tejado.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Energía Fotovoltaica" title="Proyectos de Fotovoltaica" />

            {/* CTA Final */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">Pásate al Autoconsumo</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Invierte en tu hogar, ahorra cada mes y revaloriza tu propiedad.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Solicitar Presupuesto
                    </ContactButton>
                </div>
            </section>

            {/* FAQ Section with JSON-LD and correct headers */}
            <section className="py-20 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">Preguntas sobre placas solares en Barcelona</h2>
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
