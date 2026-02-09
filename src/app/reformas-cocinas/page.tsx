import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2, Clock, ShieldCheck, Ruler, ArrowRight, Utensils, ChefHat, Zap, Layout } from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    title: "Reformas de Cocinas en Barcelona | Diseño Gourmet y Funcional",
    description: "Expertos en reformas de cocinas en Barcelona. Diseñamos cocinas modernas, abiertas al salón, con isla y acabados premium.",
};

const faqs = [
    {
        question: "¿Cuánto cuesta reformar una cocina en Barcelona?",
        answer: "El coste depende de las dimensiones, los materiales de la encimera, los muebles y los electrodomésticos. En Voltura Projects realizamos un diseño 3D previo y un presupuesto desglosado para que tengas el control total de la inversión."
    },
    {
        question: "¿Podéis abrir la cocina al salón (cocina americana)?",
        answer: "Sí, es nuestra especialidad. Analizamos los muros de carga, gestionamos los permisos necesarios y redistribuimos el espacio para crear zonas de día diáfanas y luminosas."
    },
    {
        question: "¿Cuánto tiempo se tarda en reformar una cocina?",
        answer: "Una reforma integral de cocina suele durar entre 3 y 4 semanas. Planificamos la fabricación de los muebles con antelación para que el montaje sea lo más rápido posible una vez terminada la obra civil."
    },
    {
        question: "¿Os encargáis de los electrodomésticos?",
        answer: "Sí. Podemos suministrar e instalar electrodomésticos de todas las marcas (Bosch, Siemens, Balay, Neff, etc.) integrándolos perfectamente en el mobiliario para un acabado limpio y moderno."
    },
    {
        question: "¿Qué tipos de encimeras instaláis?",
        answer: "Trabajamos con materiales de alta resistencia como Silestone, Dekton, granito nacional o de importación, y porcelánicos de gran formato. Te asesoramos sobre cuál es la mejor opción según tu uso y presupuesto."
    },
    {
        question: "¿Fabricáis muebles a medida?",
        answer: "Sí, adaptamos el mobiliario a cualquier rincón, columna o falsa escuadra. Ofrecemos columnas extraíbles, esquineros mágicos y sistemas de organización interior para maximizar el almacenamiento."
    },
    {
        question: "¿Es necesario cambiar las instalaciones?",
        answer: "En cocinas antiguas, es fundamental renovar la instalación eléctrica (para soportar hornos y placas de inducción modernas) y la fontanería, garantizando la seguridad y el cumplimiento de la normativa actual."
    }
];

export default function ReformasCocinasPage() {
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
                    "name": "Reformas de Cocinas en Barcelona",
                    "provider": {
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Voltura Projects"
                    },
                    "areaServed": "Barcelona",
                    "description": "Diseño y reforma de cocinas modernas, abiertas al salón, con isla y acabados premium."
                })}
            </Script>

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/imagenes/reforma-de-cocina-en-barcelona.webp"
                        alt="Reforma de cocinas en Barcelona"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block border-b-2 border-voltura-gold pb-2 mb-4">
                        <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Alta Cocina en Tu Hogar</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Reformas de Cocinas en Barcelona
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-5xl mx-auto">
                        Diseño Gourmet, Funcionalidad y Estilo
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
                        El corazón de tu hogar: <span className="text-voltura-gold italic">Diseño y Convivencia</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        La cocina ha dejado de ser un espacio de trabajo para convertirse en el centro social de la vivienda. En <strong>Voltura Projects</strong> diseñamos cocinas que invitan a quedarse.
                        Especialistas en <strong>cocinas abiertas al salón</strong> en Barcelona, creamos espacios fluidos donde cocinar y convivir se unen en perfecta armonía.
                    </p>
                    <p className="text-gray-400">
                        Fusionamos ergonomía, capacidad de almacenaje y materiales nobles para crear cocinas que resisten el paso del tiempo y las tendencias.
                    </p>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Layout className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Diseño 3D</h3>
                            <p className="text-gray-400 text-sm">Visualiza tu nueva cocina antes de empezar. Distribuciones optimizadas para tu espacio.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Clock className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Coordinación Total</h3>
                            <p className="text-gray-400 text-sm">Gestión integral de albañiles, marmolistas y montadores para cumplir los plazos.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Calidad Garantizada</h3>
                            <p className="text-gray-400 text-sm">Herrajes de primeras marcas con cierre amortiguado y encimeras resistentes al calor.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <CheckCircle2 className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Presupuesto Cerrado</h3>
                            <p className="text-gray-400 text-sm">Precio final garantizado por contrato, sin desviaciones ni sorpresas de última hora.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-voltura-blue relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 md:w-1/2">
                        <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Metodología</h3>
                        <h2 className="text-4xl font-serif text-white mb-6">Creamos tu Cocina Ideal</h2>
                        <p className="text-gray-300">
                            Desde el primer boceto hasta el último ajuste del cajón, cuidamos cada fase del proyecto.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                            <h3 className="text-2xl font-serif text-white">Planificación</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Estudio de necesidades y triangulo de trabajo. Selección de materiales en showroom especializado.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">02</div>
                            <h3 className="text-2xl font-serif text-white">Obra e Instalaciones</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Renovación de instalaciones y preparación de paramentos. Todo listo para el montaje.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">03</div>
                            <h3 className="text-2xl font-serif text-white">Montaje y Equipamiento</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Instalación precisa del mobiliario, encimera y electrodomésticos. Puesta en marcha y limpieza.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Ingredientes de una Cocina Voltura</h2>
                        <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Utensils className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Islas y Penínsulas</h3>
                                    <p className="text-gray-400">Diseñamos islas centrales con zona de cocción o lavado, barras de desayuno y almacenamiento extra.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <ShieldCheck className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Encimeras Indestructibles</h3>
                                    <p className="text-gray-400">Instalación de Dekton, Neolith o Silestone. Superficies antibacterianas, resistentes al rayado y al calor extremo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Zap className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Iluminación LED Integrada</h3>
                                    <p className="text-gray-400">Tiras LED bajo muebles altos para iluminar la zona de trabajo y vitrinas iluminadas para un toque elegante.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <ChefHat className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Electrodomésticos Integrados</h3>
                                    <p className="text-gray-400">Totalmente ocultos tras los frentes de los muebles para una estética minimalista y uniforme.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Reforma de cocina" title="Proyectos de Cocinas" />

            {/* CTA Final */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">¿Cocinamos tu proyecto juntos?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Diseñamos la cocina donde nacen los grandes momentos. Solicita tu estudio gratuito hoy mismo.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Solicitar Visita Técnica
                    </ContactButton>
                </div>
            </section>

            {/* FAQ Section with JSON-LD and correct headers */}
            <section className="py-20 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">Preguntas sobre reformas de cocinas en Barcelona</h2>
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
