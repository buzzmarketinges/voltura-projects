import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-voltura-blue text-voltura-stone border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

                {/* Company Info */}
                <div>
                    <div className="text-xl mb-4 tracking-[2px]">
                        <span className="font-extrabold text-white">VOLTURA</span> <span className="font-light text-voltura-gold">PROJECTS</span>
                    </div>
                    <p className="opacity-80 leading-relaxed">
                        Excelencia en construcción y reformas integrales.
                        Creamos espacios que inspiran seguridad y prestigio.
                    </p>
                </div>

                {/* Datos de Interés */}
                <div className="md:border-l border-white/10 md:pl-8">
                    <h5 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Datos de interés</h5>
                    <ul className="space-y-2 opacity-80">
                        <li>Voltura Projects S.L.</li>
                        <li>
                            <Link href="/politica-privacidad" className="hover:text-voltura-gold transition-colors text-sm">
                                Política de Privacidad
                            </Link>
                        </li>
                        <li>
                            <Link href="/politica-cookies" className="hover:text-voltura-gold transition-colors text-sm">
                                Política de Cookies
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="md:border-l border-white/10 md:pl-8">
                    <h5 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Contacto</h5>
                    <ul className="space-y-2 opacity-80">
                        <li><a href="mailto:info@volturaprojects.es" className="hover:text-voltura-gold transition-colors">info@volturaprojects.es</a></li>
                        <li><a href="tel:640801491" className="hover:text-voltura-gold transition-colors">640 801 491</a></li>
                        <li className="pt-4 text-xs text-white/70">
                            © {new Date().getFullYear()} VOLTURA PROJECTS. Todos los derechos reservados.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Sub-footer Agency Credit */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/5 text-center">
                <p className="text-xs text-white/60 tracking-wide">
                    Página web desarrollada por la <a href="https://buzzmarketing.es/agencia-de-marketing-digital-en-barcelona/" target="_blank" rel="noopener noreferrer" className="text-inherit hover:text-white/50 transition-colors">agencia de marketing digital de Barcelona</a> BuzzMarketing.
                </p>
            </div>
        </footer>
    );
}
