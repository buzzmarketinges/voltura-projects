import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2, Clock, ShieldCheck, Ruler, ArrowRight, Paintbrush, HardHat, Building } from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    alternates: {
        canonical: "https://volturaprojects.es/ca/treballs-verticals",
    },
    title: "Treballs Verticals a Barcelona | Rehabilitació de Façanes",
    description: "Empresa de treballs verticals a Barcelona. Rehabilitació de façanes, patis de llums i pintura sense bastides. Ràpids, segurs i econòmics.",
};

const faqs = [
    {
        question: "Quins avantatges tenen els treballs verticals enfront del bastides?",
        answer: "El principal avantatge és el cost i la rapidesa. Al no necessitar muntar bastides, estalvies en taxes d'ocupació de via pública i l'incici de l'obra és immediat. A més, és un sistema menys intrusiu per als veïns (menys risc de robatori i més llum)."
    },
    {
        question: "Quin tipus de treballs realitzeu amb tècniques verticals?",
        answer: "Realitzem rehabilitació de façanes, pintura de patis de llums, impermeabilització de cobertes, reparació de gretes, neteja de vidres, instal·lació de baixants i sortides de fums, i sistemes anti-aus."
    },
    {
        question: "És segur aquest sistema?",
        answer: "Totalment. Els nostres tècnics compten amb formació específica en alçada (IRATA/ANETVA) i utilitzem equips de protecció individual (EPIs) de última generació. Complim estrictament la Llei de Prevenció de Riscos Laborals."
    },
    {
        question: "Feu ITE (Inspecció Tècnica d'Edificis)?",
        answer: "Sí, col·laborem amb arquitectes tècnics per a realitzar la ITE del teu edifici i executem les obres necessàries per a esmenar les deficiències detectades en l'informe."
    },
    {
        question: "Treballeu en patis de llums interiors?",
        answer: "Sí, és la nostra especialitat. Accedim mitjançant cordes des de la coberta per a reparar, pintar o canviar baixants en patis de llums, sense necessitat d'entrar a les vivendes ni muntar estructures complexes."
    },
    {
        question: "Oferiu garantia dels treballs de pintura?",
        answer: "Sí, utilitzem pintures i revestiments de alta qualitat (impermeabilitzants, elàstics, autonetejables) i oferim garanties de fins a 10 anys depenent del producte aplicat."
    }
];

export default function TrabajosVerticalesPage() {
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
                        "url": "https://volturaprojects.es/ca/treballs-verticals",
                        "telephone": "+34 640 80 14 91",
                        "priceRange": "€€€",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Carrer de Bernat Metge, 14",
                            "addressLocality": "Barcelona",
                            "postalCode": "08019",
                            "addressCountry": "ES"
                        },
                        "description": "Experts en treballs verticals i manteniment d'edificis d'alt standing. A Voltura Projects realitzem intervencions tècniques en alçada amb màxima seguretat, rapidesa i acabats d'alta qualitat sense necessitat d'andamis complexos.",
                        "areaServed": {
                            "@type": "AdministrativeArea",
                            "name": "Barcelonès, Barcelona i voltants"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Serveis en Alçada",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Pressupost gratuït per a treballs verticals",
                                        "serviceType": "Treballs verticals i rehabilitació de fatxades"
                                    },
                                    "priceCurrency": "EUR",
                                    "price": "0",
                                    "description": "Valoració tècnica sense compromís per a rehabilitacions, neteja i reparacions en alçada."
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
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop"
                        alt="Empresa de treballs verticals a Barcelona"
                        fill
                        priority
                        fetchPriority="high"
                        quality={75}
                        sizes="100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block border-b-2 border-voltura-gold pb-2 mb-4">
                        <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Sense Bastides</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Treballs Verticals a Barcelona
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-5xl mx-auto">
                        Rehabilitació de Façanes, Seguretat i Eficiència
                    </h2>
                    <div className="pt-8">
                        <ContactButton className="px-8 py-3 inline-flex items-center gap-2">
                            Sol·licitar Pressupost Façana <ArrowRight className="w-5 h-5" />
                        </ContactButton>
                    </div>
                </div>
            </section>

            {/* Intro & Local SEO Block */}
            <section className="py-20 bg-voltura-blue">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        Arribem on d'altres <span className="text-voltura-gold italic">no poden</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        A <strong>Voltura Projects</strong> oferim solucions d'accés difícil mitjançant tècniques de posicionament amb cordes. Som especialistes en <strong>treballs verticals a Barcelona</strong>, permetent rehabilitar façanes i patis de llums sense les molèsties ni el cost de les bastides.
                    </p>
                    <p className="text-gray-400">
                        Intervencions ràpides, segures i econòmiques per a comunitats de propietaris i administradors de finques.
                    </p>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Clock className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Rapidesa</h3>
                            <p className="text-gray-400 text-sm">Inici d'obra immediat. Muntatge i desmuntatge dels sistemes d'accés en el mateix dia.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Seguretat</h3>
                            <p className="text-gray-400 text-sm">Tècnics certificats IRATA amb assegurança de responsabilitat civil específica per a treballs en alçada.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <CheckCircle2 className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Economia</h3>
                            <p className="text-gray-400 text-sm">Estalvia fins a un 40% en el pressupost en eliminar el cost de lloguer i muntatge de bastides.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Building className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Versatilitat</h3>
                            <p className="text-gray-400 text-sm">Accedim a qualsevol racó de la façana, patis interiors, cornises o cobertes inclinades.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-voltura-blue relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 md:w-1/2">
                        <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Metodologia</h3>
                        <h2 className="text-4xl font-serif text-white mb-6">Rehabilitació Eficiente</h2>
                        <p className="text-gray-300">
                            Protocols d'actuació provats per garantir resultats perfectes sense riscos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                            <h3 className="text-2xl font-serif text-white">Inspecció</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Visita tècnica per avaluar l'estat dels paraments, gretes o desprendiments i triar el sistema d'ancoratge.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">02</div>
                            <h3 className="text-2xl font-serif text-white">Execució</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Sanejament de suports, aplicació d'imprimacions i capes d'acabat seguint les especificacions del fabricant.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">03</div>
                            <h3 className="text-2xl font-serif text-white">Acabat</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Retirada de runes, neteja de zones afectades i lliurament d'obra amb revisió del client.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Serveis en Alçada</h2>
                        <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Paintbrush className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Pintura de Façanes</h3>
                                    <p className="text-gray-400">Rehabilitació estètica i funcional amb pintures impermeabilitzants i transpirables per protegir l'edifici.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <HardHat className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Reparació de Gretes</h3>
                                    <p className="text-gray-400">Cosidet de gretes estructurals i segellat de juntes de dilatació per evitar filtracions d'aigua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Building className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Patis de Llums</h3>
                                    <p className="text-gray-400">Neteja, sanejat i pintura de patis interiors, millorant la lluminositat i salubritat de les vivendes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Instal·lacions Verticals</h3>
                                    <p className="text-gray-400">Col·locació de baixants, xemeneies d'extracció de fums i conductes d'aire condicionat per façana.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Trabajos Verticales" title="Projectes de Treballs Verticals" isCatalan={true} />

            {/* CTA Final */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">Pressupost de Treballs Verticals a Barcelona</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Demana pressupost sense compromís i descobreix quant pots estalviar amb els nostres sistemes verticals.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Contactar Ara
                    </ContactButton>
                </div>
            </section>

            {/* FAQ Section with JSON-LD and correct headers */}
            <section className="py-20 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">Preguntes sobre treballs verticals a Barcelona</h2>
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
