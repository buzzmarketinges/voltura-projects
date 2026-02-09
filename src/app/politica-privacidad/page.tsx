import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
    title: "Política de Privacidad | Voltura Projects",
    description: "Política de privacidad y protección de datos de Voltura Projects.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-voltura-blue text-voltura-stone min-h-screen font-sans">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-24">
                <h1 className="text-3xl md:text-4xl font-serif text-white mb-8">Política de Privacidad</h1>

                <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
                    <p>
                        En <strong>Voltura Projects</strong>, nos comprometemos a proteger y respetar tu privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos tu información personal.
                    </p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Responsable del Tratamiento</h2>
                    <p>
                        El responsable del tratamiento de tus datos es Voltura Projects S.L., con domicilio social en Barcelona, España. Puedes contactarnos en <a href="mailto:info@volturaprojects.es" className="text-voltura-gold hover:underline">info@volturaprojects.es</a>.
                    </p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Información que Recopilamos</h2>
                    <p>
                        Podemos recopilar y procesar los siguientes datos sobre ti:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Información que proporcionas al rellenar formularios en nuestro sitio web (como el formulario de contacto).</li>
                        <li>Si nos contactas, podemos guardar un registro de esa correspondencia.</li>
                        <li>Detalles de tus visitas a nuestro sitio web y los recursos a los que accedes.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Finalidad del Tratamiento</h2>
                    <p>
                        Utilizamos tu información para:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Proporcionarte la información y servicios que nos solicites.</li>
                        <li>Mejorar nuestro sitio web y asegurar que el contenido se presente de la manera más efectiva.</li>
                        <li>Cumplir con nuestras obligaciones legales.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Seguridad de los Datos</h2>
                    <p>
                        Tomamos las medidas técnicas y organizativas adecuadas para proteger tus datos personales contra la pérdida, uso indebido, acceso no autorizado, divulgación, alteración o destrucción.
                    </p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Tus Derechos</h2>
                    <p>
                        Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales. Para ejercer estos derechos, por favor contáctanos a través de nuestro correo electrónico.
                    </p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">6. Cambios en la Política de Privacidad</h2>
                    <p>
                        Cualquier cambio que realicemos en nuestra política de privacidad en el futuro se publicará en esta página.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
