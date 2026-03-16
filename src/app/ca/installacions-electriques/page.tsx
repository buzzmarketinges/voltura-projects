import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2, Clock, ShieldCheck, Ruler, ArrowRight, Zap, Lightbulb, FileText, Home } from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    alternates: {
        canonical: "https://volturaprojects.es/ca/installacions-electriques",
    },
    title: "Instal·lacions Elèctriques a Barcelona | Butlletins i Reformes",
    description: "Electricistes autoritzats a Barcelona. Realitzem instal·lacions elèctriques completes, canvis de quadre, il·luminació LED i butlletins (blau/blanc).",
};

const faqs = [
    {
        question: "Quan és necessari canviar la instal·lació elèctrica d'un habitatge?",
        answer: "Es recomana renovar la instal·lació si té més de 30 anys, si els cables són de tela o si pateixes talls de llum freqüents. També és obligatori si vols augmentar la potència significativament o reformar la cuina i el bany."
    },
    {
        question: "Tramiteu el Butlletí Elèctric (CIE)?",
        answer: "Sí, som instal·ladors autoritzats. Tramitem tant el Butlletí Blau (per a canvis de nom o alta nova) com el Butlletí Blanc (memòria tècnica per a augments de potència), gestionant-ho tot amb Indústria."
    },
    {
        question: "Quant costa una instal·lació elèctrica nova a Barcelona?",
        answer: "El preu varia segons els punts de llum i la mida de l'immoble. Realitzem un estudi de les necessitats de la teva llar per oferir-te un pressupost tancat que inclogui regates, cablejat, mecanismes i quadre elèctric."
    },
    {
        question: "Instal·leu il·luminació LED i domòtica?",
        answer: "Sí. Dissenyem estudis lumínics per a l'estalvi energètic i integrem sistemes de domòtica per al control de persianes, llums i climatització des del teu mòbil."
    },
    {
        question: "Quant de temps es triga a realitzar la instal·lació?",
        answer: "Per a un pis estàndard de 80m2, el canvi complet de cablejat i mecanismes sol portar entre 5 i 7 dies hàbils, coordinats amb els paletes si és necessari obrir regates."
    },
    {
        question: "Quina garantia té la instal·lació?",
        answer: "Totes les nostres instal·lacions compleixen estrictament el Reglament Electrotècnic de Baixa Tensió (REBT) i oferim garantia total sobre la mà d'obra i els materials instal·lats."
    }
];

export default function InstalacionsElectriquesPage() {
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
                    "name": "Instal·lacions Elèctriques a Barcelona",
                    "provider": {
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Voltura Projects"
                    },
                    "areaServed": "Barcelona",
                    "description": "Instal·lacions elèctriques completes, canvis de quadre, il·luminació LED i butlletins elèctrics."
                })}
            </Script>

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop"
                        alt="Instal·lacions elèctriques a Barcelona"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block border-b-2 border-voltura-gold pb-2 mb-4">
                        <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Electricistes Autoritzats</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Instal·lacions Elèctriques a Barcelona
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-5xl mx-auto">
                        Seguretat Normativa, Eficiència i Certificacions
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
                        Potència i seguretat per a <span className="text-voltura-gold italic">la teva llar</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        A <strong>Voltura Projects</strong> actualitzem la infraestructura elèctrica de la teva vivenda o local per a adaptar-la a les noves necessitats de consum.
                        Especialistes en <strong>instal·lacions elèctriques a Barcelona</strong>, garantim el compliment estricte del REBT, prioritzant la seguretat contra incendis i l'eficiència energètica.
                    </p>
                    <p className="text-gray-400">
                        Des de canvis de quadre elèctric fins a recablejats complets, ens encarreguem de tot el procés tècnic i burocràtic.
                    </p>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <FileText className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Butlletins Oficials</h3>
                            <p className="text-gray-400 text-sm">Tramitació ràpida de Butlletins Blaus i Blancs per a altes de subministrament i legalitzacions.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Quadres Segurs</h3>
                            <p className="text-gray-400 text-sm">Instal·lació de quadres de comandament i protecció amb diferencials moderns i protecció contra sobretensions.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Lightbulb className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Il·luminació LED</h3>
                            <p className="text-gray-400 text-sm">Projectes d'il·luminació tècnica i decorativa per a reduir el consum i millorar el confort visual.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <CheckCircle2 className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Instal·lador Certificat</h3>
                            <p className="text-gray-400 text-sm">Tècnics titulats amb carnet d'instal·lador autoritzat. Sense intrusisme, màxima garantia.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-voltura-blue relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 md:w-1/2">
                        <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Metodologia</h3>
                        <h2 className="text-4xl font-serif text-white mb-6">La teva Nova Instal·lació</h2>
                        <p className="text-gray-300">
                            Un procés tècnic rigorós per garantir que la teva electricitat és segura, legal i eficient.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                            <h3 className="text-2xl font-serif text-white">Diagnòstic</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Revisió de l'estat actual, mesura de terres i càlcul de càrregues per a dimensionar la nova instal·lació.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">02</div>
                            <h3 className="text-2xl font-serif text-white">Execució Tècnica</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Obertura de regates, estès de cablejat lliure d'halògens i muntatge de mecanismes de primeres marques.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">03</div>
                            <h3 className="text-2xl font-serif text-white">Certificació</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Proves de funcionament, emissió del Certificat d'Instal·lació Elèctrica (CIE) i lliurament de documentació.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Serveis Elèctrics Integrals</h2>
                        <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Zap className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Càrrega de Vehicle Elèctric</h3>
                                    <p className="text-gray-400">Instal·lació de punts de recàrrega (Wallbox) en garatges comunitaris i privats segons normativa ITC-BT-52.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Home className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Domòtica i Smart Home</h3>
                                    <p className="text-gray-400">Control intel·ligent de persianes, climatització i accessos per a augmentar el confort i la seguretat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <FileText className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Augments de Potència</h3>
                                    <p className="text-gray-400">Adaptació de la instal·lació i gestió de l'expedient amb la companyia distribuïdora per a pujar la potència contractada.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Mecanismes de Disseny</h3>
                                    <p className="text-gray-400">Instal·lació de sèries de mecanismes moderns (Simon, Jung, Niessen) que aporten el toc final de disseny.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Electricidad" title="Projectes d'Instal·lacions Elèctriques" isCatalan={true} />

            {/* CTA Final */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">Pressupost d'Instal·lació Elèctrica a Barcelona</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Actualitza la teva instal·lació amb total seguretat i garantia. Sol·licita el teu pressupost sense compromís.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Contactar Ara
                    </ContactButton>
                </div>
            </section>

            {/* FAQ Section with JSON-LD and correct headers */}
            <section className="py-20 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">Preguntes sobre instal·lacions elèctriques a Barcelona</h2>
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
