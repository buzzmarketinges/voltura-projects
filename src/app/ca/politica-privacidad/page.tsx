import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
    alternates: {
        canonical: "https://volturaprojects.es/ca/politica-privacidad",
        languages: {
            "es": "https://volturaprojects.es/politica-privacidad",
            "ca": "https://volturaprojects.es/ca/politica-privacidad",
            "x-default": "https://volturaprojects.es/politica-privacidad",
        },
    },
    title: "Política de Privacitat | Voltura Projects",
    description: "Política de privacitat i protecció de dades de Voltura Projects.",
};

export default function PrivacyPolicyPageCat() {
    return (
        <main className="bg-voltura-blue text-voltura-stone min-h-screen font-sans">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-24">
                <h1 className="text-3xl md:text-4xl font-serif text-white mb-8">Política de Privacitat</h1>

                <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
                    <p>
                        A <strong>Voltura Projects</strong>, ens comprometem a protegir i respectar la teva privacitat. Aquesta Política de Privacitat explica com recopilem, utilitzem i protegim la teva informació personal.
                    </p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Responsable del Tractament</h2>
                    <p>
                        El responsable del tractament de les teves dades és Voltura Projects S.L., amb domicili social a Barcelona, Espanya. Pots contactar-nos a <a href="mailto:info@volturaprojects.es" className="text-voltura-gold hover:underline">info@volturaprojects.es</a>.
                    </p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Informació que Recopilem</h2>
                    <p>
                        Podem recopilar i processar les següents dades sobre tu:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Informació que proporciones en omplir formularis al nostre lloc web (com el formulari de contacte).</li>
                        <li>Si ens contactes, podem guardar un registre d'aquesta correspondència.</li>
                        <li>Detalls de les teves visites al nostre lloc web i els recursos als quals accedeixes.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Finalitat del Tractament</h2>
                    <p>
                        Utilitzem la teva informació per a:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Proporcionar-te la informació i serveis que ens sol·licitis.</li>
                        <li>Millorar el nostre lloc web i assegurar que el contingut es presenti de la manera més efectiva.</li>
                        <li>Complir amb les nostres obligacions legals.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Seguretat de les Dades</h2>
                    <p>
                        Prenem les mesures tècniques i organitzatives adequades per protegir les teves dades personals contra la pèrdua, ús indegut, accés no autoritzat, divulgació, alteració o destrucció.
                    </p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Els teus Drets</h2>
                    <p>
                        Tens dret a accedir, rectificar, cancel·lar o oposar-te al tractament de les teves dades personals. Per exercir aquests drets, si us plau contacta'ns a través del nostre correu electrònic.
                    </p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">6. Canvis en la Política de Privacitat</h2>
                    <p>
                        Qualsevol canvi que realitzem en la nostra política de privacitat en el futur es publicarà en aquesta pàgina.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
