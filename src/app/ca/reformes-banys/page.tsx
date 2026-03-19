import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2, Clock, ShieldCheck, Ruler, ArrowRight, Droplets, Bath, Sparkles, Maximize2 } from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    alternates: {
        canonical: "https://volturaprojects.es/ca/reformes-banys",
    },
    title: "Reformes de Banys a Barcelona | Dissenys de Luxe i Moderns",
    description: "Especialistes en reformes de banys a Barcelona. Transformem el teu bany en un spa amb microciment, griferia encastada i sanitaris suspesos.",
};

const faqs = [
    {
        question: "Quant costa reformar un bany complet a Barcelona?",
        answer: "El preu d'una reforma de bany varia segons els m2 i les qualitats triades (enrajolats, aixeteria, etc.). A Voltura Projects oferim pressupostos detallats per partides, adaptant-nos a les teves necessitats, des de banys funcionals fins a spas domèstics d'alta gamma."
    },
    {
        question: "Quant de temps dura l'obra?",
        answer: "Una reforma integral d'un bany estàndard sol durar entre 2 i 3 setmanes. Coordinem paletes, fontaners i electricistes per minimitzar els temps morts i complir estrictament els terminis."
    },
    {
        question: "Puc canviar la meva banyera per un plat de dutxa?",
        answer: "Sí, és una de les nostres intervencions més habituals. Instal·lem plats de dutxa de resina extraplans o d'obra (al mateix nivell del terra) per millorar l'accessibilitat i l'estètica de l'espai."
    },
    {
        question: "Què és el microciment i és recomanable per a banys?",
        answer: "El microciment és un revestiment continu sense juntes, ideal per a banys per la seva resistència a la humitat i fàcil neteja. Aporta un look modern i minimalista, i l'apliquem sobre terres, parets i fins i tot mobles d'obra."
    },
    {
        question: "Us encarregueu dels sanitaris i mobles?",
        answer: "Sí. Treballem amb les millors marques del mercat (Roca, Grohe, Tres, etc.) i també dissenyem mobles de bany a mida per aprofitar cada centímetre."
    },
    {
        question: "Instal·leu sanitaris suspesos?",
        answer: "Som experts en la instal·lació de sistemes de cisterna encastada (tipus Geberit) i sanitaris suspesos, que faciliten la neteja i amplien visualment l'espai."
    },
    {
        question: "Com gestioneu les runes?",
        answer: "Ens encarreguem de tot: protecció de zones comunes, retirada de runes i transport a abocador autoritzat, assegurant la neteja durant i després de l'obra."
    }
];

export default function ReformesBanysPage() {
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
                        "url": "https://volturaprojects.es/ca/reformes-banys",
                        "description": "Especialistes en la creació de banys de disseny i luxe. A Voltura Projects transformem el seu lavabo en un espai de benestar exclusiu amb acabats premium i materials nobles.",
                        "areaServed": {
                            "@type": "AdministrativeArea",
                            "name": "Barcelonès, Barcelona i voltants"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Serveis de Banys",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Pressupost personalitzat per a reforma de bany",
                                        "serviceType": "Reformes de banys de luxe"
                                    },
                                    "priceCurrency": "EUR",
                                    "price": "0",
                                    "description": "Estudi i pressupost sense compromís per a projectes de bany d'alta gamma."
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
                        src="/imagenes/reforma-de-banos-en-barcelona.webp"
                        alt="Reforma de banys a Barcelona"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block border-b-2 border-voltura-gold pb-2 mb-4">
                        <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Espais Wellness</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Reformes de Banys a Barcelona
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-5xl mx-auto">
                        Disseny Exclusiu, Materials Nobles i Confort Absolut
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
                        El bany que et mereixes: <span className="text-voltura-gold italic">Relaxació i Estil</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        A Voltura Projects transformem banys antics en oasis personals. Ja sigui un projecte de <strong>microciment</strong> minimalista o un bany clàssic amb <strong>marbre</strong>, cuidem cada detall: des de la impermeabilització invisible fins a la il·luminació ambiental.
                    </p>
                    <p className="text-gray-400">
                        Optimitzem espais petits típics de Barcelona per guanyar amplitud i funcionalitat, utilitzant les darreres tendències en interiorisme.
                    </p>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Droplets className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Impermeabilització</h3>
                            <p className="text-gray-400 text-sm">Garantia total contra filtracions i humitats mitjançant sistemes d'última generació.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Clock className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Execució Ràpida</h3>
                            <p className="text-gray-400 text-sm">Coordinació mil·limètrica per reduir les molèsties i acabar l'obra en temps rècord.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Qualitat Premium</h3>
                            <p className="text-gray-400 text-sm">Instal·lacions de fontaneria noves i materials d'alta resistència i durabilitat.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <CheckCircle2 className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Neteja Total</h3>
                            <p className="text-gray-400 text-sm">Protecció exhaustiva de la teva vivenda durant l'obra i neteja final professional.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-voltura-blue relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 md:w-1/2">
                        <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Metodologia</h3>
                        <h2 className="text-4xl font-serif text-white mb-6">Procés de Renovació</h2>
                        <p className="text-gray-300">
                            Un enfocament ordenat per minimitzar l'impacte en el teu dia a dia mentre creem el teu nou espai.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                            <h3 className="text-2xl font-serif text-white">Disseny i Materials</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Assessorament en el showroom per triar rajoles, aixeteria i mobles que combinin estètica i funcionalitat.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">02</div>
                            <h3 className="text-2xl font-serif text-white">Renovació Tècnica</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Substitució integral de canonades i desagües antics. Modificació de punts de llum i endolls.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">03</div>
                            <h3 className="text-2xl font-serif text-white">Acabats de Luxe</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Instal·lació de sanitaris, mampares a mida i detalls finals amb la màxima precisió.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Especialistes en Banys d'Autor</h2>
                        <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Maximize2 className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Optimització de l'Espai</h3>
                                    <p className="text-gray-400">Solucions per a banys petits: portes corredisses, mobles suspesos i fornícules d'obra a la dutxa.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Bath className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Dutxes arran de terra</h3>
                                    <p className="text-gray-400">Eliminació de barreres arquitectòniques. Plats de dutxa d'obra continus per a una estètica moderna i segura.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Sparkles className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Il·luminació Ambiental</h3>
                                    <p className="text-gray-400">Disseny d'il·luminació LED indirecta en miralls i sostres per crear atmosferes relaxants tipus spa.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Aixeteria Encastada</h3>
                                    <p className="text-gray-400">Instal·lació de sistemes de dutxa termostàtics encastats a la paret, ruixadors efecte pluja i cascades.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Reformas de baños" title="Projectes de Banys" isCatalan={true} />

            {/* CTA Final */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">Pressupost de Reforma de Banys a Barcelona</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Converteix la teva rutina diària en una experiència de luxe. Sol·licita visita tècnica sense compromís.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Sol·licitar Pressupost
                    </ContactButton>
                </div>
            </section>

            {/* FAQ Section with JSON-LD and correct headers */}
            <section className="py-20 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">Preguntes sobre reformes de banys a Barcelona</h2>
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
