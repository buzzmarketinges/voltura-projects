"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
    const pathname = usePathname() || "";
    const isCatalan = pathname.startsWith("/ca");

    return (
        <footer className="bg-[#09111e] text-slate-400 border-t border-white/5 pt-16 pb-0 mt-20" suppressHydrationWarning={true}>
            
            {/* Centered with 90% width to ensure absolute breathing margins */}
            <div className="w-[88%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm" suppressHydrationWarning={true}>

                {/* Column 1: Volutra Text with high-end feel */}
                <div className="flex flex-col">
                    <div className="text-xl mb-5 tracking-[2px]">
                        <span className="font-extrabold text-white">VOLTURA</span> <span className="font-light text-voltura-gold">PROJECTS</span>
                    </div>
                    <p className="opacity-70 leading-relaxed text-slate-300 mb-6 font-light" suppressHydrationWarning={true}>
                        {isCatalan 
                          ? "Excel·lència en construcció i reformes integrals. Creem espais que inspiren seguretat i prestigi." 
                          : "Excelencia en construcción y reformas integrales. Creamos espacios que inspiran seguridad y prestigio."}
                    </p>
                    <div className="mt-auto text-xs text-slate-500 font-light">
                        © {new Date().getFullYear()} VOLTURA PROJECTS.
                    </div>
                </div>

                {/* Column 2: Datos de Interés */}
                <div>
                    <div className="text-white/80 font-medium mb-5 uppercase tracking-wider text-xs">
                        {isCatalan ? "DADES D'INTERÈS" : "DATOS DE INTERÉS"}
                    </div>
                    <ul className="space-y-3">
                        <li className="text-slate-300 font-light">Voltura Projects S.L.</li>
                        <li>
                            <Link href={isCatalan ? "/ca/politica-privacidad" : "/politica-privacidad"} className="hover:text-voltura-gold transition-colors font-light">
                                {isCatalan ? "Política de Privacitat" : "Política de Privacidad"}
                            </Link>
                        </li>
                        <li>
                            <Link href={isCatalan ? "/ca/politica-cookies" : "/politica-cookies"} className="hover:text-voltura-gold transition-colors font-light">
                                {isCatalan ? "Política de Cookies" : "Política de Cookies"}
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Contacto */}
                <div>
                    <div className="text-white/80 font-medium mb-5 uppercase tracking-wider text-xs">
                        {isCatalan ? "CONTACTE" : "CONTACTO"}
                    </div>
                    <ul className="space-y-3 font-light leading-relaxed">
                        <li>
                            <a href="https://maps.app.goo.gl/dqSVzJHb9zaxD4av5" target="_blank" rel="noopener noreferrer" className="hover:text-voltura-gold transition-colors font-semibold text-white/90 whitespace-nowrap">
                              Voltura Projects | Reformas integrales en Barcelona
                            </a>
                        </li>
                        <li className="text-slate-300">Carrer de Bernat Metge, 14, 08019 Barcelona</li>
                        <li>
                            <a href="tel:640801491" className="hover:text-voltura-gold transition-colors flex items-center">
                                Teléfono: 640 80 14 91
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@volturaprojects.es" className="hover:text-voltura-gold transition-colors flex items-center">
                                info@volturaprojects.es
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Map Iframe */}
                <div className="flex justify-center md:justify-end">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.9048506796394!2d2.2086853764410384!3d41.41958409399697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3f23fb9c833%3A0x80511f3b38176a64!2sVoltura%20Projects%20%7C%20Reformas%20integrales%20en%20Barcelona!5e0!3m2!1ses!2ses!4v1773657549863!5m2!1ses!2ses" 
                        width="100%" 
                        height="160" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg shadow-xl shadow-black/20 max-w-[320px] filter grayscale-[10%] hover:grayscale-0 transition-all duration-300"
                    ></iframe>
                </div>
            </div>

            {/* Centered Sub-footer */}
            <div className="w-[88%] mx-auto mt-12 py-6 border-t border-white/5 text-center">
                <p className="text-xs text-slate-500 font-light tracking-wide">
                    {isCatalan ? "Pàgina web desenvolupada per l'" : "Página web desarrollada por la "}
                    <a href="https://buzzmarketing.es/agencia-de-marketing-digital-en-barcelona/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-voltura-gold transition-all duration-300">
                        {isCatalan ? "agència de màrqueting digital de Barcelona" : "agencia de marketing digital de Barcelona"}
                    </a> BuzzMarketing.
                </p>
            </div>
        </footer>
    );
}
