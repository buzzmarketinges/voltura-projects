"use client";

import { useEffect, useRef, useState } from "react";

export function LazyMap() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "300px" } // Load 300px before approaching it
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="w-full flex justify-center md:justify-end min-h-[160px]">
            {isVisible ? (
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.9048506796394!2d2.2086853764410384!3d41.41958409399697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3f23fb9c833%3A0x80511f3b38176a64!2sVoltura%20Projects%20%7C%20Reformas%20integrales%20en%20Barcelona!5e0!3m2!1ses!2ses!4v1773657549863!5m2!1ses!2ses" 
                    width="100%" 
                    height="160" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Voltura Projects"
                    className="rounded-lg shadow-xl shadow-black/20 max-w-[320px] filter grayscale-[10%] hover:grayscale-0 transition-all duration-300"
                />
            ) : (
                <div className="w-full max-w-[320px] h-[160px] bg-white/5 rounded-lg flex items-center justify-center text-xs text-slate-500 border border-white/5">
                    Cargando Mapa...
                </div>
            )}
        </div>
    );
}
