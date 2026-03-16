import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2, Clock, ShieldCheck, Ruler, ArrowRight, Sun, Thermometer, Leaf, Layers } from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactButton } from "@/components/contact-button";
import { RelatedProjects } from "@/components/related-projects";

export const metadata = {
    alternates: {
        canonical: "https://volturaprojects.es/ca/installacions-aerotermia",
    },
    title: "Aerotèrmia a Barcelona | Calefacció i Refrigeració Sostenible",
    description: "Especialistes en instal·lacions d'aerotèrmia a Barcelona. Estalvia fins a un 70% en la teva factura amb terra radiant i bombes de calor d'alta eficiència.",
};

const faqs = [
    {
        question: "Què és l'aerotèrmia i quant s'estalvia?",
        answer: "L'aerotèrmia és un sistema que extreu energia de l'aire exterior per a climatitzar la vivenda i escalfar aigua. És una energia renovable que pot reduir la teva factura energètica fins a un 70% comparat amb el gas o radiadors elèctrics."
    },
    {
        question: "Es pot instal·lar aerotèrmia en un pis?",
        answer: "Sí, sempre que hi hagi espai per a la unitat exterior (similar a un aire condicionat) i la interior (mida nevera o mural). És ideal per a reformes integrals."
    },
    {
        question: "És compatible amb els meus radiadors actuals?",
        answer: "Depèn. L'aerotèrmia funciona millor a baixa temperatura (terra radiant o radiadors de baixa temperatura). Si tens radiadors convencionals, existeixen equips d'aerotèrmia d'alta temperatura, tot i que el rendiment és lleugerament menor."
    },
    {
        question: "Què és millor: terra radiant o fancoils?",
        answer: "El terra radiant ofereix el màxim confort i eficiència per a calefacció, però requereix obra al terra. Els fancoils són ideals si vols també refrigeració potent a l'estiu i no vols aixecar el paviment."
    },
    {
        question: "Gestioneu les subvencions per a aerotèrmia?",
        answer: "Sí, us assessorem sobre les ajudes vigents (Fons Next Generation, etc.) i preparem la memòria tècnica necessària per a sol·licitar-les."
    },
    {
        question: "Quant costa una instal·lació d'aerotèrmia?",
        answer: "La inversió inicial és més alta que una caldera de gas, però s'amortitza en 4-6 anys gràcies a l'estalvi mensual. El preu depèn de la potència de la màquina i si inclou terra radiant."
    }
];

export default function InstalacionsAerotermiaPage() {
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
                    "name": "Instal·lació d'Aerotèrmia a Barcelona",
                    "provider": {
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Voltura Projects"
                    },
                    "areaServed": "Barcelona",
                    "description": "Instal·lació de sistemes d'aerotèrmia per a calefacció, refrigeració i ACS amb terra radiant."
                })}
            </Script>

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/imagenes/instalar-aerotermia-en-barcelona.webp"
                        alt="Instal·lació d'aerotèrmia a Barcelona"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block border-b-2 border-voltura-gold pb-2 mb-4">
                        <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Energia Renovable</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Aerotèrmia a Barcelona
                    </h1>
                    <h2 className="block text-2xl md:text-3xl font-sans font-light text-gray-300 mt-4 normal-case max-w-5xl mx-auto">
                        Climatització Integral, Estalvi Màxim i Sostenibilitat
                    </h2>
                    <div className="pt-8">
                        <ContactButton className="px-8 py-3 inline-flex items-center gap-2">
                            Sol·licitar Estudi Energètic <ArrowRight className="w-5 h-5" />
                        </ContactButton>
                    </div>
                </div>
            </section>

            {/* Intro & Local SEO Block */}
            <section className="py-20 bg-voltura-blue">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        El futur del confort ja és <span className="text-voltura-gold italic">aquí</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        A <strong>Voltura Projects</strong> apostem per la eficiència energètica. Som instal·ladors certificats d'<strong>aerotèrmia a Barcelona</strong>, la tecnologia que utilitza l'aire exterior per aportar calefacció a l'hivern, refrigeració a l'estiu i aigua calenta tot l'any.
                    </p>
                    <p className="text-gray-400">
                        Oblida't del gas i les factures elevades. Transforma la teva llar en un espai sostenible i d'alt confort.
                    </p>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Leaf className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Energia Verda</h3>
                            <p className="text-gray-400 text-sm">Sistema respectuós amb el medi ambient que redueix dràsticament les emissions de CO2 de la teva vivenda.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <Layers className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Tot en Un</h3>
                            <p className="text-gray-400 text-sm">Un únic equip per a calefacció, aire condicionat i aigua calenta sanitària.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Mínim Manteniment</h3>
                            <p className="text-gray-400 text-sm">A diferència de les calderes de gas, l'aerotèrmia és més segura (sense combustió) i requereix revisions senzilles.</p>
                        </div>
                        <div className="p-6 border border-white/5 rounded-sm hover:bg-white/5 transition-colors">
                            <CheckCircle2 className="w-10 h-10 text-voltura-gold mb-4" />
                            <h3 className="text-xl font-serif text-white mb-2">Alta Rendibilitat</h3>
                            <p className="text-gray-400 text-sm">El retorn de la inversió és ràpid gràcies al dràstic estalvi mensual en subministraments.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-voltura-blue relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 md:w-1/2">
                        <h3 className="text-voltura-gold font-bold uppercase tracking-widest text-sm mb-2">Metodologia</h3>
                        <h2 className="text-4xl font-serif text-white mb-6">Instal·lació Aerotèrmica</h2>
                        <p className="text-gray-300">
                            Dissenyem el sistema hidràulic perfecte per a la teva vivenda.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                            <h3 className="text-2xl font-serif text-white">Estudi Energètic</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Analitzem la demanda tèrmica de la teva casa per recomanar-te la potència (kW) i marca més adequada.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">02</div>
                            <h3 className="text-2xl font-serif text-white">Muntatge Hidràulic</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Instal·lació d'unitats i connexió amb terra radiant o fancoils, incloent dipòsit d'inèrcia si és necessari.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl font-serif text-white/10 font-bold">03</div>
                            <h3 className="text-2xl font-serif text-white">Configuració</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Ajust de corbes de calefacció i termòstats per optimitzar el rendiment estacional (SCOP).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Sistemes Compatibles</h2>
                        <div className="w-20 h-1 bg-voltura-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Layers className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Terra Radiant-Refrescant</h3>
                                    <p className="text-gray-400">La combinació perfecta. Calor uniforme a l'hivern i, amb la mateixa instal·lació, terra fresc a l'estiu. Invisible i silenciós.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Thermometer className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Radiadors de Baixa Temperatura</h3>
                                    <p className="text-gray-400">Radiadors especialment dissenyats per a treballar amb aigua a 35-45ºC, aprofitant l'eficiència de la bomba de calor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <Sun className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Panells Solars (Fotovoltaica)</h3>
                                    <p className="text-gray-400">Hibridem aerotèrmia amb plaques solars. Si produeixes la teva pròpia electricitat, la teva calefacció pot sortir-te pràcticament gratis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-voltura-blue/50 p-8 rounded-sm border border-white/5">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-voltura-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">ACS (Aigua Calenta)</h3>
                                    <p className="text-gray-400">Dipòsits d'aigua calenta integrats d'alta eficiència, amb cicles anti-legionel·la programats.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProjects tag="Aerotermia" title="Projectes d'Aerotèrmia" isCatalan={true} />

            {/* CTA Final */}
            <section id="contacto" className="py-24 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">Pressupost d'Instal·lació d'Aerotèrmia a Barcelona</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Passa't a l'aerotèrmia i comença a amortitzar la teva inversió des del primer mes.
                    </p>
                    <ContactButton className="px-10 py-4 text-lg shadow-lg shadow-voltura-gold/20">
                        Sol·licitar Estudi Gratuït
                    </ContactButton>
                </div>
            </section>

            {/* FAQ Section with JSON-LD and correct headers */}
            <section className="py-20 bg-voltura-blue border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">Preguntes sobre aerotèrmia a Barcelona</h2>
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
