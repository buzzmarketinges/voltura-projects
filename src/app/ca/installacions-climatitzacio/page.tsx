import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2, Clock, ShieldCheck, Ruler, ArrowRight, Wind, ThermometerSnowflake, Power, Fan } from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    alternates: {
        canonical: "https://volturaprojects.es/ca/installacions-climatitzacio",
        languages: {
            "es": "https://volturaprojects.es/instalaciones-climatizacion",
            "ca": "https://volturaprojects.es/ca/installacions-climatitzacio",
            "x-default": "https://volturaprojects.es/instalaciones-climatizacion",
        },
    },
    title: "Aire Condicionat a Barcelona | Instal·lació i Climatització",
    description: "Experts en climatització a Barcelona. Instal·lació d'aire condicionat per conductes, splits, sistemes Airzone i manteniment.",
};

const faqs = [
    {
        question: "Quin sistema d'aire condicionat és millor: conductes o splits?",
        answer: "Si la teva vivenda té falsos sostres o estàs en plena reforma, el sistema per conductes és més estètic, silenciós i reparteix millor l'aire. Els splits són ideals per a climatitzar estances puntuals sense necessitat de grans obres."
    },
    {
        question: "Instal·leu sistemes de zonificació (Airzone)?",
        answer: "Sí, som experts en Airzone. Aquest sistema permet triar una temperatura diferent a cada habitació amb una sola màquina de conductes, millorant el confort i estalviant fins a un 30% d'energia."
    },
    {
        question: "Quant costa instal·lar aire condicionat per conductes?",
        answer: "El pressupost inclou la màquina interior i exterior, la xarxa de conductes de fibra, les reixetes i l'instal·lació elèctrica. A Voltura Projects t'oferim un disseny a mida per optimitzar el rendiment i el cost."
    },
    {
        question: "Les màquines tenen bomba de calor?",
        answer: "Sí, instal·lem equips Inverter amb bomba de calor, la qual cosa et permet utilitzar el mateix sistema per a refrigerar a l'estiu i escalfar a l'hivern de forma molt eficient."
    },
    {
        question: "Quant triga la instal·lació?",
        answer: "Una instal·lació de conductes en una vivenda habitada sol durar entre 3 i 4 dies, incloent l'obertura i tancament de sostres si fos necessari. La instal·lació de splits es realitza normalment en un sol dia."
    },
    {
        question: "Quin manteniment necessita l'aire condicionat?",
        answer: "Recomanem una revisió anual per a netejar filtres, verificar la càrrega de gas i desinfectar la bateria interior, garantint així un aire saludable i el màxim rendiment de l'equip."
    }
];

export default function InstalacionsClimatizacionPage() {
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
                        "@context": "https://schema.org/",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Voltura Projects",
                        "image": "https://volturaprojects.es/_next/image?url=%2Foro-imagotipo.png&w=1920&q=75",
                        "logo": "https://volturaprojects.es/_next/image?url=%2Foro-imagotipo.png&w=1920&q=75",
                        "url": "https://volturaprojects.es/ca/installacions-climatitzacio",
                        "telephone": "+34 640 80 14 91",
                        "priceRange": "€€€",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Carrer de Bernat Metge, 14",
                            "addressLocality": "Barcelona",
                            "postalCode": "08019",
                            "addressCountry": "ES"
                        },
                        "description": "Disseny i instal·lació de sistemes de climatització invisibles i altament eficients per a habitatges de luxe. A Voltura Projects prioritzem el confort tèrmic mitjançant la tecnologia más avanzada i silenciosa.",
                        "areaServed": {
                            "@type": "AdministrativeArea",
                            "name": "Barcelonès, Barcelona i voltants"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Serveis de Climatització",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Estudi de climatització gratuït",
                                        "serviceType": "Sistemes de Climatització d'alt standing"
                                    },
                                    "priceCurrency": "EUR",
                                    "price": "0",
                                    "description": "Proposta tècnica personalitzada per al control de temperatura en llars exclusives."
                                }
                            ]
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "19",
                            "bestRating": "5",
                            "worstRating": "4"
                        }
                    })}
            </Script>

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/imagenes/Intalar-climatizacion-en-barcelona.webp"
                        alt="Instal·lació d'aire condicionat a Barcelona"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block border-b-2 border-voltura-gold pb-2 mb-4">
                        <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Climatització Eficient</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Climatització a Barcelona
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-5xl mx-auto">
                        Confort Tèrmic, Silenci i Disseny Invisible
                    </h2>
                    <div className="pt-8">
                        <ContactButton className="px-8 py-3 inline-flex items-center gap-2">
                            Sol·licitar Pressupost Gratuït <ArrowRight className="w-5 h-5" />
                        </ContactButton>
                    </div>
                </div>
            </section>

            {/* Intro & Local SEO Block */}
            <section className="py-20 bg-voltura-blue">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        La temperatura perfecta <span className="text-voltura-gold italic">tot l'any</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        A <strong>Voltura Projects</strong> dissenyem sistemes de climatització que s'integren en l'arquitectura de la teva llar.
                        Especialistes en la instal·lació d'<strong>aire condicionat per conductes a Barcelona</strong>, oferim solucions silencioses i eficients (tecnologia Inverter A+++) per combatre la calor humida de la ciutat.
                    </p>
                    <p className="text-gray-400">
                        Treballem amb les marques líders del sector (Daikin, Mitsubishi Electric, Fujitsu) per garantir durabilitat i servei tècnic.
                    </p>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Wind className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Conductes Invisibles</h3>
                            <p className="text-gray-400 text-sm">Instal·lacions ocultes en fals sostre amb reixetes lineals de disseny minimalista.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <ThermometerSnowflake className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Zonificació</h3>
                            <p className="text-gray-400 text-sm">Controla la temperatura de cada habitació de forma independent mitjançant termòstats intel·ligents.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Power className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Estalvi Energètic</h3>
                            <p className="text-gray-400 text-sm">Equips d'alta eficiència energètica que redueixen la factura de la llum sense sacrificar confort.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <CheckCircle2 className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Instal·lació Neta</h3>
                            <p className="text-gray-400 text-sm">Protegim el teu mobiliari i terra durant l'obra, lliurant la vivenda impecable.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-voltura-blue relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 md:w-1/2">
                        <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Metodologia</h3>
                        <h2 className="text-4xl font-serif text-white mb-6">Clima a Mida</h2>
                        <p className="text-gray-300">
                            Estudiem l'orientació i aïllament de la teva vivenda per calcular la potència frigorífica exacta necessària.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                            <h3 className="text-2xl font-serif text-white">Càlcul Tèrmic</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Dimensionem els equips per evitar consums excessius o manca de potència en els dies més calorosos.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">02</div>
                            <h3 className="text-2xl font-serif text-white">Instal·lació</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Muntatge d'unitats interiors, exteriors i xarxa de conductes o canonades frigorífiques.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">03</div>
                            <h3 className="text-2xl font-serif text-white">Posada en Marxa</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Buidat de la instal·lació, càrrega de gas si és necessària i comprovació de salts tèrmics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Solucions de Climatització</h2>
                        <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Fan className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Aire per Conductes</h3>
                                    <p className="text-gray-400">La solució més elegant. L'aire es distribueix a través de reixetes discretes, sense aparells a la vista a les parets.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <ThermometerSnowflake className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Splits de Disseny</h3>
                                    <p className="text-gray-400">Unitats murals de marques premium amb acabats en blanc mat, negre o plata per integrar-se en la decoració.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Power className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Cassettes de Sostre</h3>
                                    <p className="text-gray-400">Ideals per a oficines o espais diàfans amb sostres alts, distribuint l'aire en 4 direccions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Renovació d'Aire</h3>
                                    <p className="text-gray-400">Instal·lació de recuperadors de calor per ventilar la vivenda sense perdre la temperatura interior, filtrant pol·len i contaminants.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Climatitzación" title="Projectes de Climatització" isCatalan={true} />

            {/* CTA Final */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">Pressupost de Climatització a Barcelona</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Climatitza la teva llar amb els millors professionals. Comença avui mateix.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Demanar Pressupost
                    </ContactButton>
                </div>
            </section>

            {/* FAQ Section with JSON-LD and correct headers */}
            <section className="py-20 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">Preguntes sobre aire condicionat a Barcelona</h2>
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
