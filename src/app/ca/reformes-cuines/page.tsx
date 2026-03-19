import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2, Clock, ShieldCheck, Ruler, ArrowRight, Utensils, ChefHat, Zap, Layout } from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    alternates: {
        canonical: "https://volturaprojects.es/ca/reformes-cuines",
    },
    title: "Reformes de Cuines a Barcelona | Disseny Gourmet i Funcional",
    description: "Experts en reformes de cuines a Barcelona. Dissenyem cuines modernes, obertes al saló, amb illa i acabats premium.",
};

const faqs = [
    {
        question: "Quant costa reformar una cuina a Barcelona?",
        answer: "El cost depèn de les dimensions, els materials del taulell de cuina, els mobles i els electrodomèstics. A Voltura Projects realitzem un disseny 3D previ i un pressupost desglossat perquè tinguis el control total de la inversió."
    },
    {
        question: "Podeu obrir la cuina al saló (cuina americana)?",
        answer: "Sí, és la nostra especialitat. Analitzem els murs de càrrega, gestionem els permisos necessaris i redistribuïm l'espai per crear zones de dia diàfanes i lluminoses."
    },
    {
        question: "Quant de temps es triga a reformar una cuina?",
        answer: "Una reforma integral de cuina sol durar entre 3 i 4 setmanes. Planifiquem la fabricació dels mobles amb antelació perquè el muntatge sigui el més ràpid possible un cop acabada l'obra civil."
    },
    {
        question: "Us encarregueu dels electrodomèstics?",
        answer: "Sí. Podem subministrar i instal·lar electrodomèstics de totes les marques (Bosch, Siemens, Balay, Neff, etc.) integrant-los perfectament en el mobiliari per a un acabat net i modern."
    },
    {
        question: "Quins tipus de taulells de cuina instal·leu?",
        answer: "Treballem amb materials d'alta resistència com Silestone, Dekton, granit nacional o d'importació, i porcelànics de gran format. T'assessorem sobre quina és la millor opció segons el teu ús i pressupost."
    },
    {
        question: "Fabriqueu mobles a mida?",
        answer: "Sí, adaptem el mobiliari a qualsevol racó, columna o falsa esquadra. Oferim columnes extraïbles, cantoners màgics i sistemes d'organització interior per maximitzar l'emmagatzematge."
    },
    {
        question: "És necessari canviar les instal·lacions?",
        answer: "En cuines antigues, és fonamental renovar la instal·lació elèctrica (per suportar forns i plaques d'inducció modernes) i la fontaneria, garantint la seguretat i el compliment de la normativa actual."
    }
];

export default function ReformesCuinesPage() {
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
                        "@type": "Service",
                        "serviceType": "Reformes de cuines de luxe",
                        "provider": {
                            "@type": "HomeAndConstructionBusiness",
                            "name": "Voltura Projects",
                            "image": "https://volturaprojects.es/_next/image?url=%2Foro-imagotipo.png&w=1920&q=75",
                            "logo": "https://volturaprojects.es/_next/image?url=%2Foro-imagotipo.png&w=1920&q=75",
                            "url": "https://volturaprojects.es/ca/reformes-cuines"
                        },
                        "description": "Disseny i execució de cuines de luxe a mida. A Voltura Projects combinem funcionalitat avançada amb estètica d'alt nivell per crear la cuina dels seus somnis.",
                        "areaServed": {
                            "@type": "AdministrativeArea",
                            "name": "Barcelonès, Barcelona i voltants"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Serveis de Cuines",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Pressupost gratuït per a reforma de cuina"
                                    },
                                    "priceCurrency": "EUR",
                                    "price": "0",
                                    "description": "Assessorament tècnic i econòmic per a cuines de disseny superior."
                                }
                            ]
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "19",
                            "bestRating": "5",
                            "worstRating": "1"
                        }
                    })}
            </Script>

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/imagenes/reforma-de-cocina-en-barcelona.webp"
                        alt="Reforma de cuines a Barcelona"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block border-b-2 border-voltura-gold pb-2 mb-4">
                        <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Alta Cuina a la Teva Llar</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Reformes de Cuines a Barcelona
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-5xl mx-auto">
                        Disseny Gourmet, Funcionalitat i Estil
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
                        El cor de la teva llar: <span className="text-voltura-gold italic">Disseny i Convivència</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        La cuina ha deixat de ser un espai de treball per convertir-se en el centre social de la vivenda. A <strong>Voltura Projects</strong> dissenyem cuines que conviden a quedar-se.
                        Especialistes en <strong>cuines obertes al saló</strong> a Barcelona, creem espais fluids on cuinar i conviure s'uneixen en perfecta harmonia.
                    </p>
                    <p className="text-gray-400">
                        Fusionem ergonomia, capacitat d'emmagatzematge i materials nobles per crear cuines que resisteixen el pas del temps i les tendències.
                    </p>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Layout className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Disseny 3D</h3>
                            <p className="text-gray-400 text-sm">Visualitza la teva nova cuina abans de començar. Distribucions optimitzades per al teu espai.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Clock className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Coordinació Total</h3>
                            <p className="text-gray-400 text-sm">Gestió integral de paletes, marmolistes i muntadors per complir els terminis.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Qualitat Garantida</h3>
                            <p className="text-gray-400 text-sm">Ferratges de primeres marques amb tancament esmorteït i taulells resistents a la calor.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <CheckCircle2 className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Pressupost Tancat</h3>
                            <p className="text-gray-400 text-sm">Preu final garantit per contracte, sense desviacions ni sorpreses d'última hora.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-voltura-blue relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 md:w-1/2">
                        <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Metodologia</h3>
                        <h2 className="text-4xl font-serif text-white mb-6">Creem la teva Cuina Ideal</h2>
                        <p className="text-gray-300">
                            Des del primer esbós fins a l'últim ajust del calaix, cuidem cada fase del projecte.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                            <h3 className="text-2xl font-serif text-white">Planificació</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Estudi de necessitats i triangle de treball. Selecció de materials en showroom especialitzat.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">02</div>
                            <h3 className="text-2xl font-serif text-white">Obra i Instal·lacions</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Renovació d'instal·lacions i preparació de paraments. Tot a punt per al muntatge.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">03</div>
                            <h3 className="text-2xl font-serif text-white">Muntatge i Equipament</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Instal·lació precisa del mobiliari, taulell de cuina i electrodomèstics. Posada en marxa i neteja.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Ingredients d'una Cuina Voltura</h2>
                        <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Utensils className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Illes i Penínsules</h3>
                                    <p className="text-gray-400">Dissenyem illes centrals amb zona de cocció o rentat, barres d'esmorzar i emmagatzematge extra.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <ShieldCheck className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Taulells Indestructibles</h3>
                                    <p className="text-gray-400">Instal·lació de Dekton, Neolith o Silestone. Superfícies antibacterianes, resistents al ratllat i a la calor extrema.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Zap className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Il·luminació LED Integrada</h3>
                                    <p className="text-gray-400">Tires LED sota mobles alts per il·luminar la zona de treball i vitrines il·luminades per a un toc elegant.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <ChefHat className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Electrodomèstics Integrats</h3>
                                    <p className="text-gray-400">Totalment ocults rere els fronts dels mobles per a una estètica minimalista i uniforme.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Reforma de cocina" title="Projectes de Cuines" isCatalan={true} />

            {/* CTA Final */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">Pressupost de Reforma de Cuines a Barcelona</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Dissenyem la cuina on neixen els grans moments. Sol·licita el teu estudi gratuït avui mateix.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Sol·licitar Visita Tècnica
                    </ContactButton>
                </div>
            </section>

            {/* FAQ Section with JSON-LD and correct headers */}
            <section className="py-20 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">Preguntes sobre reformes de cuines a Barcelona</h2>
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
