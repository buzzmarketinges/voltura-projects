import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
    title: "Términos y Condiciones | Voltura Projects",
    description: "Términos y condiciones de uso del sitio web de Voltura Projects.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-voltura-blue text-voltura-stone font-sans selection:bg-voltura-gold selection:text-white">
            <Navbar />

            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-serif text-white mb-8">Términos y Condiciones</h1>

                    <div className="prose prose-invert max-w-none text-gray-300">
                        <p className="mb-6">
                            Bienvenido al sitio web de Voltura Projects. Al acceder y utilizar este sitio web, usted acepta cumplir con los siguientes términos y condiciones de uso.
                        </p>

                        <h2 className="text-2xl font-serif text-white mt-8 mb-4">1. Identidad del Titular</h2>
                        <p>
                            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), se informa que el titular de este sitio web es <strong>Voltura Projects S.L.</strong>
                        </p>

                        <h2 className="text-2xl font-serif text-white mt-8 mb-4">2. Propiedad Intelectual</h2>
                        <p>
                            Todos los contenidos de este sitio web, incluyendo textos, imágenes, logotipos y diseños, son propiedad de Voltura Projects o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o modificación sin autorización previa.
                        </p>

                        <h2 className="text-2xl font-serif text-white mt-8 mb-4">3. Protección de Datos</h2>
                        <p>
                            De conformidad con el Reglamento General de Protección de Datos (RGPD), los datos personales que nos facilite a través de los formularios de contacto serán tratados con la única finalidad de gestionar su solicitud. Puede ejercer sus derechos de acceso, rectificación, cancelación y oposición contactando con nosotros.
                        </p>

                        <h2 className="text-2xl font-serif text-white mt-8 mb-4">4. Responsabilidad</h2>
                        <p>
                            Voltura Projects no se hace responsable de los posibles errores de seguridad que se puedan producir ni de los posibles daños que puedan causarse al sistema informático del usuario como consecuencia de la presencia de virus en el ordenador del usuario utilizado para la conexión a los servicios y contenidos de la web.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
