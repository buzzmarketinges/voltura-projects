import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
    alternates: {
        canonical: "/ca/politica-cookies",
    },
    title: "Política de Cookies | Voltura Projects",
    description: "Informació sobre l'ús de cookies a Voltura Projects.",
};

export default function CookiesPolicyPageCat() {
    return (
        <main className="bg-voltura-blue text-voltura-stone min-h-screen font-sans">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-24">
                <h1 className="text-3xl md:text-4xl font-serif text-white mb-8">Política de Cookies</h1>

                <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
                    <p>
                        A <strong>Voltura Projects</strong> utilitzem cookies per millorar la teva experiència al nostre lloc web. Aquesta política explica què són les cookies, com les utilitzem i com pots controlar-les.
                    </p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Què són les Cookies?</h2>
                    <p>
                        Les cookies són petits fitxers de text que s'emmagatzemen al teu dispositiu quan visites un lloc web. S'utilitzen àmpliament perquè els llocs web funcionin, o funcionin de manera més eficient, així com per proporcionar informació als propietaris del lloc.
                    </p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Cookies que Utilitzem</h2>
                    <p>
                        Podem utilitzar els següents tipus de cookies:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Cookies estrictament necessàries:</strong> Són essencials perquè puguis navegar pel lloc web i utilitzar les seves funcions.</li>
                        <li><strong>Cookies de rendiment (Analítiques):</strong> Ens permeten comptar les visites i fonts de trànsit per poder mesurar i millorar el rendiment del nostre lloc. Utilitzem Google Analytics per a aquesta finalitat. Tota la informació que recullen aquestes cookies és agregada i, per tant, anònima.</li>
                        <li><strong>Cookies de funcionalitat:</strong> Permeten que lloc web recordi les eleccions que fas (com el teu nom d'usuari, idioma o la regió en la qual et trobes) i proporcioni característiques millorades i més personals.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Com Controlar les Cookies</h2>
                    <p>
                        La majoria dels navegadors web accepten cookies automàticament, però normalment pots modificar la configuració del teu navegador per rebutjar cookies si ho prefereixes. No obstant això, això pot impedir que aprofitis al màxim el lloc web.
                    </p>
                    <p>
                        Pots trobar més informació sobre com administrar les cookies a la funció d'"Ajuda" del teu navegador o visitant <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-voltura-gold hover:underline">www.aboutcookies.org</a>.
                    </p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Cookies de Tercers</h2>
                    <p>
                        Tingues en compte que els tercers (incloent-hi, per exemple, xarxes de publicitat i proveïdors de serveis externs com serveis d'anàlisi de trànsit web) també poden utilitzar cookies, sobre les quals no tenim control. És probable que aquestes cookies siguin cookies d'anàlisi/rendiment o cookies d'orientació.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
