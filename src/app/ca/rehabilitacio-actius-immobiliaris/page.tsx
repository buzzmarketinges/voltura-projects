import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Clock, ArrowRight, Building2, Leaf, Zap, FileCheck, Euro } from "lucide-react";
import Script from "next/script";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    alternates: {
        canonical: "https://volturaprojects.es/ca/rehabilitacio-actius-immobiliaris",
        languages: {
            "es": "https://volturaprojects.es/rehabilitacion-activos-inmobiliarios",
            "ca": "https://volturaprojects.es/ca/rehabilitacio-actius-immobiliaris",
            "x-default": "https://volturaprojects.es/rehabilitacion-activos-inmobiliarios",
        },
    },
    title: "Rehabilitació d'Edificis i Actius Immobiliaris a Barcelona",
    description: "Sòci estrategic en rehabilitació integral d'edificis per a grups d'inversió i family offices. Projectes clau en mà amb enfocament en ROI i eficiència tèrmica.",
};

export default function RehabilitacioImmobiliariaCAPage() {
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "Service",
        "name": "Rehabilitació Integral d'Edificis i Actius Immobiliaris",
        "description": "Gestió de projectes clau en mà per a grups d'inversió i family offices. Especialistes en maximitzar la rentabilitat d'actius immobiliaris.",
        "provider": {
            "@type": "HomeAndConstructionBusiness",
            "name": "Voltura Projects",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Carrer de Bernat Metge, 14",
                "addressLocality": "Barcelona",
                "postalCode": "08019",
                "addressCountry": "ES"
            }
        },
        "areaServed": "Barcelona i voltants",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serveis per a Inversors",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Instal·lacions de Geotèrmia i Eficiència"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Reformes de Luxe per a Inversió"
                    }
                }
            ]
        }
    };

    return (
        <main className="min-h-screen bg-voltura-blue text-voltura-stone font-sans selection:bg-voltura-gold selection:text-white">
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block border-b-2 border-voltura-gold pb-2 mb-4">
                        <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Wealth & Asset Management</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Rehabilitació Integral d'Edificis i Actius Immobiliaris
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-3xl mx-auto">
                        Maximitzem la Rendibilitat de la seva Inversió.
                    </h2>
                    <div className="pt-8">
                        <ContactButton className="px-8 py-3 inline-flex items-center gap-2">
                            Parlar amb un consultor tècnic <ArrowRight className="w-5 h-5" />
                        </ContactButton>
                    </div>
                </div>
            </section>

            {/* Strategic Partner Section */}
            <section className="py-20 bg-voltura-blue">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        El seu soci <span className="text-voltura-gold italic">estratègic</span>, no només la seva empresa d'obres
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed font-light">
                        Transformem actius obsolets en productes immobiliaris d'alta demanda. Ens especialitzem en la gestió de projectes <strong>clau en mà</strong> per a grups d'inversió i family offices.
                    </p>
                    <p className="text-gray-400">
                        Entenem el mercat immobiliari de Barcelona i els punts de dolor dels grans tenidors: temps, control de costos i seguretat jurídica. La nostra metodologia està dissenyada per optimitzar el ROI de cada m2 rehabilitat.
                    </p>
                </div>
            </section>

            {/* Specialized Services Cards */}
            <section className="py-24 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Serveis Especialitzats</h2>
                        <p className="text-voltura-gold uppercase tracking-widest text-sm font-bold">Valor afegit per a actius d'inversió</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Geotermia */}
                        <div className="bg-voltura-blue/50 p-10 rounded-sm border border-white/10 hover:border-voltura-gold/50 transition-all group">
                            <Leaf className="w-12 h-12 text-voltura-gold mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-serif text-white mb-4">Geotèrmia i Eficiència Energètica</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Revalorització immediata de l'actiu mitjançant Certificació Energètica A. Implementem sistemes que redueixen dràsticament els costos operatius i atrauen inquilins i compradors d'alt perfil.
                            </p>
                        </div>

                        {/* Reformes Integrales */}
                        <div className="bg-voltura-blue/50 p-10 rounded-sm border border-white/10 hover:border-voltura-gold/50 transition-all group">
                            <div className="flex gap-2 mb-6">
                                <Building2 className="w-12 h-12 text-voltura-gold group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-2xl font-serif text-white mb-4">Reformes Integrals d'Edificis</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Recondicionament total de l'envoltupant i interiors. Executem reformes d'alt impacte estructural i estètic buscant optimitzar l'ARPU (Average Revenue Per User) i el valor patrimonial. Acabats premium que maximitzen la liqüiditat de l'actiu.
                            </p>
                        </div>

                        {/* Infraestructura */}
                        <div className="bg-voltura-blue/50 p-10 rounded-sm border border-white/10 hover:border-voltura-gold/50 transition-all group">
                            <Zap className="w-12 h-12 text-voltura-gold mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-serif text-white mb-4">Infraestructura Elèctrica i Clima</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Renovació completa de les artèries de l'edifici. Garantim seguretat integral i compliment estricte de la normativa vigent, eliminant qualsevol risc tècnic o legal per a la propietat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why choose us - Cards Layout */}
            <section className="py-24 bg-voltura-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-left mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-white max-w-2xl leading-tight">
                            Per què triar-nos com el seu <span className="text-voltura-gold italic">soci tècnic</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Plazos */}
                        <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-voltura-gold/40 transition-all duration-500 group">
                            <div className="w-12 h-12 bg-voltura-gold/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-voltura-gold/20 transition-colors">
                                <Clock className="w-6 h-6 text-voltura-gold" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">Compliment de terminis</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">Cronogrames vinculants per assegurar que el seu actiu torni al mercat en la data prevista. El temps és rendibilitat.</p>
                        </div>

                        {/* Presupuestos */}
                        <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-voltura-gold/40 transition-all duration-500 group">
                            <div className="w-12 h-12 bg-voltura-gold/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-voltura-gold/20 transition-colors">
                                <Euro className="w-6 h-6 text-voltura-gold" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">Pressupostos tancats</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">Sense sorpreses ni desviacions. Rigor financer i transparència total des de la proposta inicial.</p>
                        </div>

                        {/* Licencias */}
                        <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-voltura-gold/40 transition-all duration-500 group">
                            <div className="w-12 h-12 bg-voltura-gold/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-voltura-gold/20 transition-colors">
                                <FileCheck className="w-6 h-6 text-voltura-gold" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">Gestió integral</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">Tramitació de llicències i fons Next Generation per agilitar l'inici i el finançament de l'obra.</p>
                        </div>

                        {/* ROI highlight - Distinctive card */}
                        <div className="bg-voltura-blue/40 p-8 rounded-sm border border-voltura-gold/30 shadow-[0_20px_50px_-20px_rgba(212,175,55,0.15)] transition-all duration-500 relative overflow-hidden group hover:border-voltura-gold">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-voltura-gold/5 blur-3xl rounded-full -mr-12 -mt-12"></div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="text-voltura-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Asset Strategy</div>
                                    <h4 className="text-3xl font-serif font-bold text-white mb-4 tracking-tight">
                                        ROI <span className="text-voltura-gold">Optimitzat</span>
                                    </h4>
                                </div>
                                <p className="text-gray-300 text-sm italic border-l-2 border-voltura-gold/40 pl-4 mt-4">
                                    Enfocament financer estratègic en cada m² rehabilitat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Edificios" title="Projectes de Rehabilitació" />

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate border-t border-white/5">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">Evolucioni la seva cartera d'actius avui mateix</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                        Agendi una reunió tècnica corporativa. Analitzarem el seu actiu i proposarem la solució de rehabilitació més rentable.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Contactar amb l'Equip d'Inversions
                    </ContactButton>
                </div>
            </section>

            <Footer />
        </main>
    );
}
