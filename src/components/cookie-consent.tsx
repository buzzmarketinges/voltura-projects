"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";

export function CookieConsent() {
    const [show, setShow] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const pathname = usePathname() || "";
    const isCatalan = pathname.startsWith("/ca");

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            setShow(true);
        } else if (consent === "accepted") {
            setAccepted(true);
        }
    }, []);

    const accept = () => {
        localStorage.setItem("cookie_consent", "accepted");
        setAccepted(true);
        setShow(false);
    };

    const decline = () => {
        localStorage.setItem("cookie_consent", "declined");
        setShow(false);
    };

    if (!show && !accepted) return null;

    return (
        <>
            {/* Google Analytics - Only loaded if accepted */}
            {accepted && (
                <>
                    <Script
                        src="https://www.googletagmanager.com/gtag/js?id=G-BJK839HK51"
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BJK839HK51');
            `}
                    </Script>
                </>
            )}

            {/* Banner */}
            {show && (
                <div className="fixed bottom-4 right-4 z-[9999] max-w-sm bg-white p-6 rounded-md shadow-2xl border-l-4 border-voltura-gold animate-in slide-in-from-bottom-10 fade-in duration-500">
                    <h3 className="text-voltura-blue font-bold text-lg mb-2">
                        {isCatalan ? "Cookies i Privacitat" : "Cookies & Privacidad"}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {isCatalan 
                            ? "Utilitzem cookies pròpies i de tercers per millorar la teva experiència i analitzar el trànsit." 
                            : "Utilizamos cookies propias y de terceros para mejorar tu experiencia y analizar el tráfico."}
                        {" "}
                        {isCatalan 
                            ? "Pots consultar la nostra " 
                            : "Puedes consultar nuestra "}
                        <Link href={isCatalan ? "/ca/politica-cookies" : "/politica-cookies"} className="text-voltura-blue underline hover:text-voltura-gold">
                            {isCatalan ? "Política de Cookies" : "Política de Cookies"}
                        </Link>.
                    </p>
                    <div className="flex gap-3">
                        <button
                            onClick={accept}
                            className="flex-1 bg-voltura-blue text-white py-2 px-4 rounded-sm text-sm font-medium hover:bg-voltura-blue/90 transition-colors"
                        >
                            {isCatalan ? "Acceptar" : "Aceptar"}
                        </button>
                        <button
                            onClick={decline}
                            className="flex-1 bg-gray-100 text-gray-600 py-2 px-4 rounded-sm text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                            {isCatalan ? "Rebutjar" : "Rechazar"}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
