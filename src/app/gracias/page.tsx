import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Gracias por contactar | Voltura Projects",
    description: "Gracias por tu interés en Voltura Projects.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function ThankYouPage() {
    return (
        <main className="min-h-screen bg-voltura-blue text-voltura-stone font-sans selection:bg-voltura-gold selection:text-white flex flex-col">
            <Navbar />

            <section className="flex-grow flex items-center justify-center py-20">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-voltura-gold/10 mb-8 animate-in zoom-in duration-500">
                        <CheckCircle2 className="w-10 h-10 text-voltura-gold" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
                        ¡Mensaje Enviado Correctamente!
                    </h1>

                    <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                        Gracias por contactar con <strong>Voltura Projects</strong>. Hemos recibido tu solicitud y nuestro equipo técnico la revisará en breve. Nos pondremos en contacto contigo en un plazo máximo de 24 horas laborables.
                    </p>

                    <Link
                        href="/"
                        className="bg-voltura-gold text-voltura-blue font-bold px-8 py-3 rounded-sm hover:brightness-110 transition-all uppercase tracking-wide inline-block"
                    >
                        Volver al Inicio
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
