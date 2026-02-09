import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
    title: "Política de Cookies | Voltura Projects",
    description: "Información sobre el uso de cookies en Voltura Projects.",
};

export default function CookiesPolicyPage() {
    return (
        <main className="bg-voltura-blue text-voltura-stone min-h-screen font-sans">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-24">
                <h1 className="text-3xl md:text-4xl font-serif text-white mb-8">Política de Cookies</h1>

                <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
                    <p>
                        En <strong>Voltura Projects</strong> utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Esta política explica qué son las cookies, cómo las utilizamos y cómo puedes controlarlas.
                    </p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">1. ¿Qué son las Cookies?</h2>
                    <p>
                        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan ampliamente para que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
                    </p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Cookies que Utilizamos</h2>
                    <p>
                        Podemos utilizar los siguientes tipos de cookies:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Cookies estrictamente necesarias:</strong> Son esenciales para que puedas navegar por el sitio web y utilizar sus funciones.</li>
                        <li><strong>Cookies de rendimiento (Analíticas):</strong> Nos permiten contar las visitas y fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio. Utilizamos Google Analytics para este fin. Toda la información que recogen estas cookies es agregada y, por lo tanto, anónima.</li>
                        <li><strong>Cookies de funcionalidad:</strong> Permiten que el sitio web recuerde las elecciones que haces (como tu nombre de usuario, idioma o la región en la que te encuentras) y proporcione características mejoradas y más personales.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Cómo Controlar las Cookies</h2>
                    <p>
                        La mayoría de los navegadores web aceptan cookies automáticamente, pero normalmente puedes modificar la configuración de tu navegador para rechazar cookies si lo prefieres. Sin embargo, esto puede impedir que aproveches al máximo el sitio web.
                    </p>
                    <p>
                        Puedes encontrar más información sobre cómo administrar las cookies en la función de "Ayuda" de tu navegador o visitando <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-voltura-gold hover:underline">www.aboutcookies.org</a>.
                    </p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Cookies de Terceros</h2>
                    <p>
                        Ten en cuenta que los terceros (incluyendo, por ejemplo, redes de publicidad y proveedores de servicios externos como servicios de análisis de tráfico web) también pueden utilizar cookies, sobre las cuales no tenemos control. Es probable que estas cookies sean cookies de análisis/rendimiento o cookies de orientación.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
