import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2, Clock, ShieldCheck, Ruler, ArrowRight, Sun, Zap, Battery, LineChart } from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    alternates: {
        canonical: "https://volturaprojects.es/ca/energia-fotovoltaica",
    },
    title: "Placons Solars a Barcelona | Instal·lació i Autoconsum",
    description: "Instal·lació de panells solars a Barcelona. Estalvia fins a un 80% en la teva factura de llum. Gestió integral: permisos, instal·lació i subvencions.",
};

const faqs = [
    {
        question: "És rendible instal·lar plaques solars a Barcelona?",
        answer: "Sí, Barcelona compta amb un alt nombre d'hores de sol a l'any. Una instal·lació ben dimensionada permet amortitzar la inversió en 4-6 anys, generant estalvi directe des del primer dia."
    },
    {
        question: "Necessito bateries per a la meva instal·lació fotovoltaica?",
        answer: "No són obligatòries, però sí molt recomanables per a maximitzar l'estalvi. Les bateries permeten emmagatzemar l'excedent d'energia produïda durant el dia per a utilitzar-la a la nit, assolint quotes d'autoconsum del 80-90%."
    },
    {
        question: "Quins permisos es necessiten per instal·lar panells solars?",
        answer: "Ens encarreguem de tota la burocràcia: llicència d'obra (comunicació prèvia a la majoria de municipis), legalització davant d'Indústria i gestió d'excedents amb la comercialitzadora."
    },
    {
        question: "Hi ha subvencions disponibles?",
        answer: "Sí, existeixen bonificacions en l'IBI (fins al 50% durant diversos anys segons el municipi), deduccions en l'IRPF i ajuts dels fons Next Generation. Nosaltres gestionem la sol·licitud de tots els ajuts als quals tinguis dret."
    },
    {
        question: "Es poden instal·lar plaques en una comunitat de veïns?",
        answer: "Per descomptat. L'autoconsum col·lectiu és una excel·lent opció per a reduir la factura de la llum de la comunitat (ascensor, llum de l'escala) i dels veïns participants."
    },
    {
        question: "Quin manteniment requereixen els panells solars?",
        answer: "El manteniment és mínim. Recomanem una neteja anual dels mòduls per evitar que la brutícia redueixi el seu rendiment i una revisió elèctrica de les proteccions i inversor."
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
                        "@context": "https://schema.org/",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Voltura Projects",
                        "image": "https://volturaprojects.es/_next/image?url=%2Foro-imagotipo.png&w=1920&q=75",
                        "logo": "https://volturaprojects.es/_next/image?url=%2Foro-imagotipo.png&w=1920&q=75",
                        "url": "https://volturaprojects.es/ca/energia-fotovoltaica",
                        "description": "Especialistes en solucions d'energia solar fotovoltaica per a habitatges exclusius i projectes sostenibles. A Voltura Projects integrem panells d'alta eficiència amb un disseny arquitectònic impecable per al màxim estalvi energètic.",
                        "areaServed": {
                            "@type": "AdministrativeArea",
                            "name": "Barcelonès, Barcelona i voltants"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Serveis d'Energia Solar",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Estudi fotovoltaic i pressupost gratuït",
                                        "serviceType": "Instal·lació d'energia fotovoltaica d'alt rendiment"
                                    },
                                    "priceCurrency": "EUR",
                                    "price": "0",
                                    "description": "Anàlisi de viabilitat solar i pressupost detallat per a sistemes d'autoconsumo premium."
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
                        src="/imagenes/intalacion-de-placas-fotovoltaicas-en-barcelona.webp"
                        alt="Instal·lació de plaques solars a Barcelona"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block border-b-2 border-voltura-gold pb-2 mb-4">
                        <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Autoconsum Solar</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Instal·lació Fotovoltaica a Barcelona
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-5xl mx-auto">
                        Genera la teva pròpia energia, estalvia diners i protegeix el planeta
                    </h2>
                    <div className="pt-8">
                        <ContactButton className="px-8 py-3 inline-flex items-center gap-2">
                            Sol·licitar Estudi Solar Gratuït <ArrowRight className="w-5 h-5" />
                        </ContactButton>
                    </div>
                </div>
            </section>

            {/* Intro & Local SEO Block */}
            <section className="py-20 bg-voltura-blue">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        La teva teulada té un valor ocult: <span className="text-voltura-gold italic">Desbloqueja'l</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        A <strong>Voltura Projects</strong> som experts en la instal·lació de <strong>panells solares a Barcelona</strong> i la seva província. Oferim solucions claus en mà per a vivendes unifamiliars, comunitats de veïns i empreses que volen reduir la seva dependència de les elèctriques.
                    </p>
                    <p className="text-gray-400">
                        Utilitzem exclusivament components Tier 1 (panells de màxima eficiència i garantia) i inversors de primeres marques (Huawei, Fronius, SolarEdge) per assegurar el rendiment de la teva instal·lació durant més de 25 anys.
                    </p>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <LineChart className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Estalvi Immediat</h3>
                            <p className="text-gray-400 text-sm">Redueix la teva factura de la llum fins a un 70-80% des del primer mes gràcies a l'autoconsum directe.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Garantia 25 Anys</h3>
                            <p className="text-gray-400 text-sm">Treballem només amb fabricants que garanteixen la producció dels panells a llarg termini.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Clock className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Tràmits Inclosos</h3>
                            <p className="text-gray-400 text-sm">Ens encarreguem de legalitzar la instal·lació, tramitar subvencions i bonificacions de l'IBI.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Sun className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Monitorització</h3>
                            <p className="text-gray-400 text-sm">Controla des del teu mòbil quanta energia produeixes i consumeixes en temps real amb la nostra app.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-voltura-blue relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 md:w-1/2">
                        <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Metodologia</h3>
                        <h2 className="text-4xl font-serif text-white mb-6">El Camí cap al Sol</h2>
                        <p className="text-gray-300">
                            Un procés senzill i transparent perquè comencis a generar la teva pròpia energia al més aviat possible.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                            <h3 className="text-2xl font-serif text-white">Estudi Personalitzat</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Analitzem la teva factura de llum i la superfície de la teva teulada per dissenyar la instal·lació òptima (nombre de panells, ubicació, inversor).
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">02</div>
                            <h3 className="text-2xl font-serif text-white">Instal·lació Certificada</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Muntatge realitzat per instal·ladors propis autoritzats, complint tota la normativa de seguretat i estanquitat de la coberta.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">03</div>
                            <h3 className="text-2xl font-serif text-white">Legalització i Ajuts</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Tramitem el CIE, sol·licitem la compensació d'excedents i gestionem les subvencions disponibles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Tecnologia Solar Avançada</h2>
                        <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Zap className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Panells Monocristal·lins PERC</h3>
                                    <p className="text-gray-400">Instal·lem mòduls d'última generació que capten més energia fins i tot en dies ennuvolats o amb poca radiació.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Battery className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Bateries Intel·ligents</h3>
                                    <p className="text-gray-400">Sistemes d'emmagatzematge (Huawei Luna, Tesla Powerwall) per aprofitar la teva energia solar també a la nit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Inversors Híbrids</h3>
                                    <p className="text-gray-400">Equips preparats per afegir bateries en el futur sense necessitat de canviar l'inversor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <ShieldCheck className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Estructures d'Alumini</h3>
                                    <p className="text-gray-400">Suports lleugers i ultra-resistents a la corrosió, amb fixacions que garanteixen la integritat de la teva teulada.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Energía Fotovoltaica" title="Projectes de Fotovoltaica" isCatalan={true} />

            {/* CTA Final */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">Pressupost d'Energia Fotovoltaica a Barcelona</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Inverteix en la teva llar, estalvia cada mes i revaloritza la teva propietat.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Sol·licitar Pressupost
                    </ContactButton>
                </div>
            </section>

            {/* FAQ Section with JSON-LD and correct headers */}
            <section className="py-20 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">Preguntes sobre plaques solars a Barcelona</h2>
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
