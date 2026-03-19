import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2, Clock, ShieldCheck, Ruler, ArrowRight, Droplets, Wrench, ThermometerSun, Bath } from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    alternates: {
        canonical: "https://volturaprojects.es/ca/installacions-fontaneria",
    },
    title: "Instal·lacions de Fontaneria a Barcelona | Reformes i Reparacions",
    description: "Fontaners experts a Barcelona. Canvi de canonades (coure, multicapa), baixants, instal·lació de termos i descalcificadors.",
};

const faqs = [
    {
        question: "És necessari canviar les canonades antigues de ferro o plom?",
        answer: "Absolutament. Les canonades de plom són tòxiques i estan prohibides, i les de ferro pateixen corrosió que afecta la qualitat de l'aigua i provoca fugues. Recomanem substituir-les per coure o multicapa."
    },
    {
        question: "Quin tipus de canonada és millor per a una vivenda?",
        answer: "Depèn de l'ús. El coure és durador i bacteriostàtic, ideal per a instal·lacions vistes. El multicapa és excel·lent per a instal·lacions encastades per la seva resistència i facilitat de muntatge. T'assessorem sobre la millor opció."
    },
    {
        question: "Realitzeu butlletins d'aigua?",
        answer: "Sí, emetem el butlletí d'aigua necessari per donar d'alta el subministrament o realitzar canvis de titularitat, certificant que la instal·lació compleix la normativa vigent."
    },
    {
        question: "Instal·leu descalcificadors per a l'aigua de Barcelona?",
        answer: "Sí, l'aigua de Barcelona és molt dura (molta calç). Instal·lar un descalcificador protegeix els teus electrodomèstics, la teva pell i el cabell, a més d'estalviar en productes de neteja."
    },
    {
        question: "Repareu baixants comunitàries?",
        answer: "Sí, realitzem substitució de baixants tant en reformes integrals de pisos com en comunitats de veïns, incloent-hi treballs verticals si és necessari."
    },
    {
        question: "Quin és el preu de canviar la fontaneria de cuina i bany?",
        answer: "El cost varia segons la distància dels punts d'aigua i els materials. Incloem en el pressupost el picat, la nova instal·lació i el tapat de regates."
    }
];

export default function InstalacionsFontaneriaPage() {
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
                        "serviceType": "Instal·lacions de fontaneria especialitzada",
                        "provider": {
                            "@type": "HomeAndConstructionBusiness",
                            "name": "Voltura Projects",
                            "image": "https://volturaprojects.es/_next/image?url=%2Foro-imagotipo.png&w=1920&q=75",
                            "logo": "https://volturaprojects.es/_next/image?url=%2Foro-imagotipo.png&w=1920&q=75",
                            "url": "https://volturaprojects.es/ca/installacions-fontaneria"
                        },
                        "description": "Serveis de fontaneria tècnica per a reformes de luxe. A Voltura Projects realitzem instal·lacions duradores amb materials premium i acabats impecables, assegurant la màxima fiabilitat en sistemes d'aigua i sanejament.",
                        "areaServed": {
                            "@type": "AdministrativeArea",
                            "name": "Barcelonès, Barcelona i voltants"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Serveis de Fontaneria",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Pressupost personalitzat de fontaneria"
                                    },
                                    "priceCurrency": "EUR",
                                    "price": "0",
                                    "description": "Assessorament i valoració econòmica sense cost per a instal·lacions de fontaneria d'alta qualitat."
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
                        src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2670&auto=format&fit=crop"
                        alt="Instal·lacions de fontaneria a Barcelona"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block border-b-2 border-voltura-gold pb-2 mb-4">
                        <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Fontaneria Professional</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Instal·lacions de Fontaneria a Barcelona
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-5xl mx-auto">
                        Qualitat d'Aigua, Eficiència i Materials de Llarga Durada
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
                        El benestar comença per <span className="text-voltura-gold italic">una aigua sana</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        A <strong>Voltura Projects</strong> realitzem renovacions integrals de fontaneria per garantir un subministrament d'aigua neta, amb bona pressió i sense fugues.
                        Com a líders en <strong>instal·lacions de fontaneria a Barcelona</strong>, substituïm canonades obsoletes per sistemes moderns que asseguren la salubritat i eviten problemes d'humitats a llarg termini.
                    </p>
                    <p className="text-gray-400">
                        Treballem en cuines, banys i zones de safareig, adaptant les preses d'aigua i els desguassos a la nova distribució de la teva llar.
                    </p>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Wrench className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Instal·lació Integral</h3>
                            <p className="text-gray-400 text-sm">Renovació completa de circuits d'aigua freda i calenta sanitària (ACS) i desguassos.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Droplets className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Tractament d'Aigua</h3>
                            <p className="text-gray-400 text-sm">Instal·lació d'òsmosi inversa i descalcificadors per millorar la qualitat de l'aigua potable.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <ThermometerSun className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Termos i Escalfadors</h3>
                            <p className="text-gray-400 text-sm">Substitució de termos elèctrics per models d'alta eficiència o escalfadors de gas estancs.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <CheckCircle2 className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Sense Fugues</h3>
                            <p className="text-gray-400 text-sm">Proves de pressió exhaustives abans de tancar parets per garantir l'estanquitat total.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-voltura-blue relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 md:w-1/2">
                        <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Metodologia</h3>
                        <h2 className="text-4xl font-serif text-white mb-6">Renovació Hidràulica</h2>
                        <p className="text-gray-300">
                            Substituïm el vell pel nou amb mínima invasió i màxima neteja.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                            <h3 className="text-2xl font-serif text-white">Replanteig</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Marcatge dels nous punts d'aigua i desguàs segons el plànol de distribució de sanitaris i electrodomèstics.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">02</div>
                            <h3 className="text-2xl font-serif text-white">Instal·lació</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Col·locació de noves canonades amb aïllament tèrmic i fixacions antivibració.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">03</div>
                            <h3 className="text-2xl font-serif text-white">Proves</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Verificació de pressió i cabal. Instal·lació de claus de pas generals i per cada habitació humida.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Solucions de Fontaneria Avançada</h2>
                        <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Bath className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Aixeteria Encastada</h3>
                                    <p className="text-gray-400">Instal·lació de cossos encastats per a dutxes i lavabos, requerint precisió mil·limètrica en la fontaneria.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <ShieldCheck className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Baixants Silenciosos</h3>
                                    <p className="text-gray-400">Utilitzem canonades insonoritzades per a les baixants, eliminant el molest soroll de la descàrrega d'aigua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Wrench className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Claus de Pas Independents</h3>
                                    <p className="text-gray-400">Sectoritzem la instal·lació perquè puguis tallar l'aigua del bany sense afectar la cuina en cas d'avaria.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Sanitaris Suspesos</h3>
                                    <p className="text-gray-400">Instal·lació de bastidors (Geberit) per a vàters suspesos, assegurant un ancoratge ferm i segur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Fontanería" title="Projectes de Fontaneria" isCatalan={true} />

            {/* CTA Final */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">Pressupost de Fontaneria a Barcelona</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Renova la teva instal·lació amb professionals i oblida't de fugues i avaries.
                    </p>
                    <ContactButton className="px-10 p-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Contactar Ara
                    </ContactButton>
                </div>
            </section>

            {/* FAQ Section with JSON-LD and correct headers */}
            <section className="py-20 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">Preguntes sobre instal·lacions de fontaneria a Barcelona</h2>
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
