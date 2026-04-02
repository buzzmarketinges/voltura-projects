import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Clock, ArrowRight, Building2, Leaf, Zap, FileCheck, Euro } from "lucide-react";
import Script from "next/script";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    alternates: {
        canonical: "/rehabilitacion-activos-inmobiliarios",
    },
    title: "Rehabilitación de Edificios y Activos Inmobiliarios en Barcelona",
    description: "Socio estratégico en rehabilitación integral de edificios para grupos de inversión y family offices. Proyectos llave en mano con enfoque en ROI y eficiencia térmica.",
};

export default function RehabilitacionInmobiliariaPage() {
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "Service",
        "name": "Rehabilitación Integral de Edificios y Activos Inmobiliarios",
        "description": "Gestión de proyectos llave en mano para grupos de inversión y family offices. Especialistas en maximizar la rentabilidad de activos inmobiliarios.",
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
        "areaServed": "Barcelona y alrededores",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios para Inversores",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Instalaciones de Geotermia y Eficiencia"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Reformas de Lujo para Inversión"
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
                        Rehabilitación Integral de Edificios y Activos Inmobiliarios
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-3xl mx-auto">
                        Maximizamos la Rentabilidad de su Inversión.
                    </h2>
                    <div className="pt-8">
                        <ContactButton className="px-8 py-3 inline-flex items-center gap-2">
                            Hablar con un consultor técnico <ArrowRight className="w-5 h-5" />
                        </ContactButton>
                    </div>
                </div>
            </section>

            {/* Strategic Partner Section */}
            <section className="py-20 bg-voltura-blue">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        Su socio <span className="text-voltura-gold italic">estratégico</span>, no solo su empresa de obras
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed font-light">
                        Transformamos activos obsoletos en productos inmobiliarios de alta demanda. Nos especializamos en la gestión de proyectos <strong>llave en mano</strong> para grupos de inversión y family offices.
                    </p>
                    <p className="text-gray-400">
                        Entendemos el mercado inmobiliario de Barcelona y los puntos de dolor de los grandes tenedores: tiempo, control de costes y seguridad jurídica. Nuestra metodología está diseñada para optimizar el ROI de cada m2 rehabilitado.
                    </p>
                </div>
            </section>

            {/* Specialized Services Cards */}
            <section className="py-24 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Servicios Especializados</h2>
                        <p className="text-voltura-gold uppercase tracking-widest text-sm font-bold">Valor añadido para activos de inversión</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Geotermia */}
                        <div className="bg-voltura-blue/50 p-10 rounded-sm border border-white/10 hover:border-voltura-gold/50 transition-all group">
                            <Leaf className="w-12 h-12 text-voltura-gold mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-serif text-white mb-4">Geotermia y Eficiencia Energética</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Revalorización inmediata del activo mediante Certificación Energética A. Implementamos sistemas que reducen drásticamente los costes operativos y atraen a inquilinos y compradores de alto perfil.
                            </p>
                        </div>

                        {/* Reformas Integrales */}
                        <div className="bg-voltura-blue/50 p-10 rounded-sm border border-white/10 hover:border-voltura-gold/50 transition-all group">
                            <div className="flex gap-2 mb-6">
                                <Building2 className="w-12 h-12 text-voltura-gold group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-2xl font-serif text-white mb-4">Reformas Integrales de Edificios</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Reacondicionamiento total de la envolvente e interiores. Ejecutamos reformas de alto impacto estructural y estético buscando optimizar el ARPU (Average Revenue Per User) y el valor patrimonial. Acabados premium que maximizan la liquidez del activo.
                            </p>
                        </div>

                        {/* Infraestructura */}
                        <div className="bg-voltura-blue/50 p-10 rounded-sm border border-white/10 hover:border-voltura-gold/50 transition-all group">
                            <Zap className="w-12 h-12 text-voltura-gold mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-serif text-white mb-4">Infraestructura Eléctrica y Clima</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Renovación completa de las arterias del edificio. Garantizamos seguridad integral y cumplimiento estricto de la normativa vigente, eliminando cualquier riesgo técnico o legal para la propiedad.
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
                            Por qué elegirnos como su <span className="text-voltura-gold italic">socio técnico</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Plazos */}
                        <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-voltura-gold/40 transition-all duration-500 group">
                            <div className="w-12 h-12 bg-voltura-gold/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-voltura-gold/20 transition-colors">
                                <Clock className="w-6 h-6 text-voltura-gold" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">Cumplimiento de plazos</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">Cronogramas vinculantes para asegurar que su activo vuelva al mercado en la fecha prevista. El tiempo es rentabilidad.</p>
                        </div>

                        {/* Presupuestos */}
                        <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-voltura-gold/40 transition-all duration-500 group">
                            <div className="w-12 h-12 bg-voltura-gold/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-voltura-gold/20 transition-colors">
                                <Euro className="w-6 h-6 text-voltura-gold" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">Presupuestos cerrados</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">Sin sorpresas ni desviaciones. Rigor financiero y transparencia total desde la propuesta inicial.</p>
                        </div>

                        {/* Licencias */}
                        <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-voltura-gold/40 transition-all duration-500 group">
                            <div className="w-12 h-12 bg-voltura-gold/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-voltura-gold/20 transition-colors">
                                <FileCheck className="w-6 h-6 text-voltura-gold" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">Gestión integral</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">Tramitación de licencias y fondos Next Generation para agilizar el inicio y financiación de la obra.</p>
                        </div>

                        {/* ROI highlight - Distinctive card */}
                        <div className="bg-voltura-blue/40 p-8 rounded-sm border border-voltura-gold/30 shadow-[0_20px_50px_-20px_rgba(212,175,55,0.15)] transition-all duration-500 relative overflow-hidden group hover:border-voltura-gold">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-voltura-gold/5 blur-3xl rounded-full -mr-12 -mt-12"></div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="text-voltura-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Asset Strategy</div>
                                    <h4 className="text-3xl font-serif font-bold text-white mb-4 tracking-tight">
                                        ROI <span className="text-voltura-gold">Optimizado</span>
                                    </h4>
                                </div>
                                <p className="text-gray-300 text-sm italic border-l-2 border-voltura-gold/40 pl-4 mt-4">
                                    Enfoque financiero estratégico en cada m² rehabilitado.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Edificios" title="Proyectos de Rehabilitación" />

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate border-t border-white/5">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">Evolucione su cartera de activos hoy mismo</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                        Agende una reunión técnica corporativa. Analizaremos su activo y propondremos la solución de rehabilitación más rentable.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Contactar con el Equipo de Inversiones
                    </ContactButton>
                </div>
            </section>

            <Footer />
        </main>
    );
}
