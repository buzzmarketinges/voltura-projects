import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { CheckCircle2, Clock, ShieldCheck, Ruler, ArrowRight, Home, Paintbrush, Hammer } from "lucide-react";
import Script from "next/script";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    alternates: {
        canonical: "https://volturaprojects.es/ca/reformes-integrals",
    },
    title: "Reformes Integrals a Barcelona | Voltura Projects",
    description: "Especialistes en reformes integrals d'habitatges i locals a Barcelona. Projectes clau en mà, arquitectura tècnica i disseny d'interiors d'alta gamma.",
};

const faqs = [
    {
        question: "Quant costa una reforma integral a Barcelona?",
        answer: "El preu varia segons les qualitats i l'estat inicial de l'immoble. A Voltura Projects realitzem un estudi previ gratuït per oferir-te un pressupost detallat i ajustat a les teves necessitats, sense costos ocults."
    },
    {
        question: "Tramiteu els permisos d'obra?",
        answer: "Sí. Ens encarreguem de tota la gestió burocràtica amb l'Ajuntament de Barcelona, ja sigui un 'Assabentat' (obra menor) o una llicència d'obra major, assegurant que el teu projecte compleix tota la normativa vigent."
    },
    {
        question: "Quant de temps triga una reforma completa?",
        answer: "El termini mitjà per a una reforma integral d'un pis estàndard (80-100m2) sol oscil·lar entre 3 i 4 mesos. Establim un cronograma rigorós abans de començar per garantir la data de lliurament."
    },
    {
        question: "Quina garantia oferiu a les reformes?",
        answer: "Ofereims total tranquil·litat amb garanties legals sobre l'execució i els materials. A més, el nostre servei post-venda assegura una resposta ràpida davant qualsevol incidència que pugui sorgir."
    },
    {
        question: "Puc seguir vivint a casa durant la reforma?",
        answer: "Per a una reforma integral, recomanem que l'habitatge estigui buit per agilitzar els treballs i garantir la seguretat. Si és una reforma parcial, podem planificar fases per minimitzar les molèsties."
    },
    {
        question: "Us encarregueu del disseny d'interiors?",
        answer: "Absolutament. Comptem amb un equip de disseny i interiorisme que t'assessorarà en la distribució, selecció de materials, il·luminació i mobiliari per a crear un espai coherent, funcional i estèticament impecable."
    },
    {
        question: "Realitzeu reformes en locals comercials o oficines?",
        answer: "Sí, som especialistes en reformar espais comercials i oficines a Barcelona. Entenem la importància dels terminis en aquests projectes per a minimitzar el temps d'inactivitat del teu negoci."
    },
    {
        question: "Com controleu els costos imprevistos?",
        answer: "La clau és una fase de planificació tècnica exhaustiva. Al realitzar un estudi detallat previ, minimitzem l'aparició d'imprevistos. En cas de sorgir vicis ocults, ho comuniquem immediatament amb solucions clares."
    }
];

export default function ReformesIntegralesPage() {
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
                    "name": "Reformes Integrals a Barcelona",
                    "provider": {
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Voltura Projects"
                    },
                    "areaServed": "Barcelona",
                    "description": "Servei de reformes integrals clau en mà per a habitatges i locals a Barcelona. Inclou disseny, gestió de llicències i execució d'obra."
                })}
            </Script>

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block border-b-2 border-voltura-gold pb-2 mb-4">
                        <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Servei Premium</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Reformes Integrals a Barcelona
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-3xl mx-auto">
                        Disseny, Arquitectura i Execució Clau en Mà
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
                        Transformem espais amb <span className="text-voltura-gold italic">excel·lència tècnica</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        A <strong>Voltura Projects</strong>, entenem que una reforma integral no és només una obra, és la materialització d'un nou estil de vida. Combinem visió arquitectònica amb execució impecable per a oferir-te els millors serveis de <strong>reformes a Barcelona</strong>.
                    </p>
                    <p className="text-gray-400">
                        Gestionem tot el procés: des del disseny inicial i la tramitació de llicències a l'Ajuntament de Barcelona, fins al lliurament de claus. El nostre compromís és la tranquil·litat absoluta del client.
                    </p>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Ruler className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Projecte a Mida</h3>
                            <p className="text-gray-400 text-sm">Disseny personalitzat adaptat a les teves necessitats i a les característiques estructurals de la teva vivenda.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Clock className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Terminis Garantits</h3>
                            <p className="text-gray-400 text-sm">Cronograma d'obra detallat i compromís de lliurament en la data acordada per contracte.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Garantia Total</h3>
                            <p className="text-gray-400 text-sm">Seguiment post-obra i garanties legals en tots els nostres treballs i instal·lacions.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <CheckCircle2 className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Pressupost Tancat</h3>
                            <p className="text-gray-400 text-sm">Sense sorpreses. Transparència total en costos des de l'inici fins a la finalització.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-voltura-blue relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 md:w-1/2">
                        <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Metodologia</h3>
                        <h2 className="text-4xl font-serif text-white mb-6">El nostre Procés de Reforma</h2>
                        <p className="text-gray-300">
                            Simplifiquem el complex. Un sistema pas a pas dissenyat per a eliminar la incertesa i garantir resultats d'alta gamma.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                            <h3 className="text-2xl font-serif text-white">Estudi i Disseny</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Visitem el teu immoble per a entendre l'espai. Realitzem mesuraments, propostes de distribució i moodboards de materials.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">02</div>
                            <h3 className="text-2xl font-serif text-white">Gestió Tècnica</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Tramitació de llicències d'obres majors o menores, cèdules d'habitabilitat i projectes executius visats.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">03</div>
                            <h3 className="text-2xl font-serif text-white">Execució Experta</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Coordinació de gremis propis (paletes, llauners, electricistes) sota la supervisió d'un cap d'obra dedicat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Abast de les nostres Reformes Integrals</h2>
                        <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Home className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Redistribució d'Espais</h3>
                                    <p className="text-gray-400">Demolició de tabiqueria, obertura de cuines al saló (concepte obert), creació de suites amb bany i vestidor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Paintbrush className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Acabats Premium</h3>
                                    <p className="text-gray-400">Instal·lació de terres de fusta natural, porcellànics de gran format, allisat de parets i pintura decorativa.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Hammer className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Fusteria a Mida</h3>
                                    <p className="text-gray-400">Portes de pas de terra a sostre, armaris encastats, cuines de disseny i mobiliari de bany personalitzat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Instal·lacions Certificades</h3>
                                    <p className="text-gray-400">Renovació completa d'electricitat (Butlletí Blau/Blanc), fontaneria, gas i sistemes d'Aerotèrmia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Reformas Integrales" title="Projectes de Reformes Integrals" isCatalan={true} />

            {/* CTA Final */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">Pressupost de Reforma Integral a Barcelona</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Converteix la teva vivenda en la llar que mereixes. Sense compromís, els nostres tècnics valoraran la teva reforma.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Sol·licitar Visita Tècnica
                    </ContactButton>
                </div>
            </section>

            {/* FAQ Section with JSON-LD and correct headers */}
            <section className="py-20 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">Preguntes sobre reformes integrals a Barcelona</h2>
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
