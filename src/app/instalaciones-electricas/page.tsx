import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2, Clock, ShieldCheck, Ruler, ArrowRight, Zap, Lightbulb, FileText, Home } from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    title: "Instalaciones Eléctricas en Barcelona | Boletines y Reformas",
    description: "Electricistas autorizados en Barcelona. Realizamos instalaciones eléctricas completas, cambios de cuadro, iluminación LED y boletines (azul/blanco).",
};

const faqs = [
    {
        question: "¿Cuándo es necesario cambiar la instalación eléctrica de una vivienda?",
        answer: "Se recomienda renovar la instalación si tiene más de 30 años, si los cables son de tela o si sufres cortes de luz frecuentes. También es obligatorio si vas a aumentar la potencia significativamente o reformar la cocina y baño."
    },
    {
        question: "¿Tramitáis el Boletín Eléctrico (CIE)?",
        answer: "Sí, somos instaladores autorizados. Tramitamos tanto el Boletín Azul (para cambios de nombre o alta nueva) como el Boletín Blanco (memoria técnica para aumentos de potencia), gestionando todo con Industria."
    },
    {
        question: "¿Cuánto cuesta una instalación eléctrica nueva en Barcelona?",
        answer: "El precio varía según los puntos de luz y el tamaño del inmueble. Realizamos un estudio de las necesidades de tu hogar para ofrecerte un presupuesto cerrado que incluya rozas, cableado, mecanismos y cuadro eléctrico."
    },
    {
        question: "¿Instaláis iluminación LED y domótica?",
        answer: "Sí. Diseñamos estudios lumínicos para ahorro energético e integramos sistemas de domótica para el control de persianas, luces y climatización desde tu móvil."
    },
    {
        question: "¿Cuánto tiempo se tarda en realizar la instalación?",
        answer: "Para un piso estándar de 80m2, el cambio completo de cableado y mecanismos suele llevar entre 5 y 7 días hábiles, coordinados con albañilería si es necesario abrir regatas."
    },
    {
        question: "¿Qué garantía tiene la instalación?",
        answer: "Todas nuestras instalaciones cumplen estrictamente con el Reglamento Electrotécnico de Baja Tensión (REBT) y ofrecemos garantía total sobre la mano de obra y los materiales instalados."
    }
];

export default function InstalacionesElectricasPage() {
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
                    "name": "Instalaciones Eléctricas en Barcelona",
                    "provider": {
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Voltura Projects"
                    },
                    "areaServed": "Barcelona",
                    "description": "Instalaciones eléctricas completas, cambios de cuadro, iluminación LED y boletines eléctricos."
                })}
            </Script>

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop"
                        alt="Instalaciones eléctricas en Barcelona"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block border-b-2 border-voltura-gold pb-2 mb-4">
                        <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Electricistas Autorizados</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Instalaciones Eléctricas en Barcelona
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-5xl mx-auto">
                        Seguridad Normativa, Eficiencia y Certificaciones
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
                        Potencia y seguridad para <span className="text-voltura-gold italic">tu hogar</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        En <strong>Voltura Projects</strong> actualizamos la infraestructura eléctrica de tu vivienda o local para adaptarla a las nuevas necesidades de consumo.
                        Especialistas en <strong>instalaciones eléctricas en Barcelona</strong>, garantizamos el cumplimiento estricto del REBT, priorizando la seguridad contra incendios y la eficiencia energética.
                    </p>
                    <p className="text-gray-400">
                        Desde cambios de cuadro eléctrico hasta recableados completos, nos encargamos de todo el proceso técnico y burocrático.
                    </p>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <FileText className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Boletines Oficiales</h3>
                            <p className="text-gray-400 text-sm">Tramitación rápida de Boletines Azules y Blancos para altas de suministro y legalizaciones.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Cuadros Seguros</h3>
                            <p className="text-gray-400 text-sm">Instalación de cuadros de mando y protección con diferenciales modernos y protección contra sobretensiones.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Lightbulb className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Iluminación LED</h3>
                            <p className="text-gray-400 text-sm">Proyectos de iluminación técnica y decorativa para reducir el consumo y mejorar el confort visual.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <CheckCircle2 className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Instalador Certificado</h3>
                            <p className="text-gray-400 text-sm">Técnicos titulados con carnet de instalador autorizado. Sin intrusismo, máxima garantía.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-voltura-blue relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 md:w-1/2">
                        <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Metodología</h3>
                        <h2 className="text-4xl font-serif text-white mb-6">Tu Nueva Instalación</h2>
                        <p className="text-gray-300">
                            Un proceso técnico riguroso para garantizar que tu electricidad es segura, legal y eficiente.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                            <h3 className="text-2xl font-serif text-white">Diagnóstico</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Revisión del estado actual, medición de tierras y cálculo de cargas para dimensionar la nueva instalación.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">02</div>
                            <h3 className="text-2xl font-serif text-white">Ejecución Técnica</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Apertura de rozas, tendido de cableado libre de halógenos y montaje de mecanismos de primeras marcas.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">03</div>
                            <h3 className="text-2xl font-serif text-white">Certificación</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Pruebas de funcionamiento, emisión del Certificado de Instalación Eléctrica (CIE) y entrega de documentación.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Servicios Eléctricos Integrales</h2>
                        <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Zap className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Carga de Vehículo Eléctrico</h3>
                                    <p className="text-gray-400">Instalación de puntos de recarga (Wallbox) en garajes comunitarios y privados según normativa ITC-BT-52.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Home className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Domótica y Smart Home</h3>
                                    <p className="text-gray-400">Control inteligente de persianas, climatización y accesos para aumentar el confort y la seguridad.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <FileText className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Aumentos de Potencia</h3>
                                    <p className="text-gray-400">Adaptación de la instalación y gestión del expediente con la compañía distribuidora para subir la potencia contratada.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Mecanismos de Diseño</h3>
                                    <p className="text-gray-400">Instalación de series de mecanismos modernos (Simon, Jung, Niessen) que aportan el toque final de diseño.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Electricidad" title="Proyectos de Instalaciones Eléctricas" />

            {/* CTA Final */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">¿Necesitas un electricista experto?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Actualiza tu instalación con total seguridad y garantía. Solicita tu presupuesto sin compromiso.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Contactar Ahora
                    </ContactButton>
                </div>
            </section>

            {/* FAQ Section with JSON-LD and correct headers */}
            <section className="py-20 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">Preguntas sobre instalaciones eléctricas en Barcelona</h2>
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
