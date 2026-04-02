"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useContactModal } from "@/context/contact-modal-context";

interface NavbarProps {
    switchLanguagePath?: string;
}

export function Navbar({ switchLanguagePath }: NavbarProps = {}) {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const { openModal } = useContactModal();
    const pathname = usePathname() || "";

    const isCatalan = pathname.startsWith("/ca");

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleMobileContact = () => {
        setIsOpen(false);
        openModal();
    };

    const navLinksES = [
        { name: "Inicio", href: "/" },
        {
            name: "Servicios",
            href: "#",
            dropdown: true,
            items: [
                { name: "Reformas Integrales", href: "/reformas-integrales" },
                {
                    name: "Reformas Parciales",
                    group: true,
                    subItems: [
                        { name: "Baños de Lujo", href: "/reformas-banos" },
                        { name: "Cocinas Premium", href: "/reformas-cocinas" },
                    ]
                },
                {
                    name: "Instalaciones Técnicas",
                    group: true,
                    subItems: [
                        { name: "Electricidad", href: "/instalaciones-electricas" },
                        { name: "Fontanería", href: "/instalaciones-fontaneria" },
                        { name: "Climatización", href: "/instalaciones-climatizacion" },
                        { name: "Aerotermia", href: "/instalaciones-aerotermia" },
                    ]
                },
                { name: "Energía Fotovoltaica", href: "/energia-fotovoltaica" },
                { name: "Trabajos Verticales", href: "/trabajos-verticales" },
            ]
        },
        { name: "Inversores", href: "/rehabilitacion-activos-inmobiliarios" },
        { name: "Proyectos", href: "/proyectos" },
        { name: "Noticias", href: "/noticias" },
    ];

    const navLinksCA = [
        { name: "Inici", href: "/ca" },
        {
            name: "Serveis",
            href: "#",
            dropdown: true,
            items: [
                { name: "Reformes Integrals", href: "/ca/reformes-integrals" },
                {
                    name: "Reformes Parciales",
                    group: true,
                    subItems: [
                        { name: "Banys de Luxe", href: "/ca/reformes-banys" },
                        { name: "Cuines Premium", href: "/ca/reformes-cuines" },
                    ]
                },
                {
                    name: "Instal·lacions Tècniques",
                    group: true,
                    subItems: [
                        { name: "Electricitat", href: "/ca/installacions-electriques" },
                        { name: "Fontaneria", href: "/ca/installacions-fontaneria" },
                        { name: "Climatització", href: "/ca/installacions-climatitzacio" },
                        { name: "Aerotèrmia", href: "/ca/installacions-aerotermia" },
                    ]
                },
                { name: "Energia Fotovoltaica", href: "/ca/energia-fotovoltaica" },
                { name: "Treballs Verticals", href: "/ca/treballs-verticals" },
            ]
        },
        { name: "Inversors", href: "/ca/rehabilitacio-actius-immobiliaris" },
        { name: "Projectes", href: "/ca/projectes" },
        { name: "Notícies", href: "/ca/noticies" },
    ];

    const navLinks = isCatalan ? navLinksCA : navLinksES;
    console.log("NAV LINKS", navLinks.map(l => l.name));

    const getSwitchLanguagePath = () => {
        if (switchLanguagePath) return switchLanguagePath;
        const ES_TO_CA: Record<string, string> = {
            "/":                          "/ca",
            "/rehabilitacion-activos-inmobiliarios": "/ca/rehabilitacio-actius-immobiliaris",
            "/reformas-integrales":        "/ca/reformes-integrals",
            "/reformas-banos":             "/ca/reformes-banys",
            "/reformas-cocinas":           "/ca/reformes-cuines",
            "/instalaciones-electricas":   "/ca/installacions-electriques",
            "/instalaciones-fontaneria":   "/ca/installacions-fontaneria",
            "/instalaciones-climatizacion":"/ca/installacions-climatitzacio",
            "/instalaciones-aerotermia":   "/ca/installacions-aerotermia",
            "/energia-fotovoltaica":       "/ca/energia-fotovoltaica",
            "/trabajos-verticales":        "/ca/treballs-verticals",
            "/proyectos":                  "/ca/projectes",
            "/noticias":                   "/ca/noticies",
            "/politica-privacidad":        "/ca/politica-privacidad",
            "/politica-cookies":           "/ca/politica-cookies",
            "/terminos-condiciones":       "/ca/terminos-condiciones",
        };

        const clean = (p: string) => (p !== "/" && p.endsWith("/") ? p.slice(0, -1) : p);
        const p = clean(pathname);

        if (isCatalan) {
            const CA_TO_ES: Record<string, string> = Object.fromEntries(
                Object.entries(ES_TO_CA).map(([es, ca]) => [ca, es])
            );
            if (CA_TO_ES[p]) return CA_TO_ES[p];
            if (p.startsWith("/ca/noticies/")) return p.replace("/ca/noticies/", "/noticias/");
            if (p.startsWith("/ca/projectes/")) return p.replace("/ca/projectes/", "/proyectos/");
            const stripped = p.replace(/^\/ca(\/|$)/, "/");
            return stripped || "/";
        } else {
            if (ES_TO_CA[p]) return ES_TO_CA[p];
            if (p.startsWith("/noticias/")) return p.replace("/noticias/", "/ca/noticies/");
            if (p.startsWith("/proyectos/")) return p.replace("/proyectos/", "/ca/projectes/");
            return "/ca";
        }
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-voltura-blue text-voltura-stone border-b border-white/10 shadow-lg selection:bg-voltura-blue selection:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <Link href={isCatalan ? "/ca" : "/"} className="flex items-center space-x-3 group">
                        <div className="relative w-10 h-10">
                            <Image
                                src="/oro-imagotipo.png"
                                alt="Voltura Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="text-2xl tracking-[2px] cursor-pointer flex flex-col justify-center">
                            <div className="leading-none whitespace-nowrap">
                                <span className="font-extrabold text-white">VOLTURA</span>{" "}
                                <span className="font-light text-voltura-gold">PROJECTS</span>
                            </div>
                        </div>
                    </Link>

                    {/* Navigation - Desktop */}
                    <div className="hidden md:flex items-center space-x-8 h-full">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group flex items-center h-full">
                                <Link
                                    href={link.href}
                                    className="hover:text-voltura-gold transition-colors duration-200 font-medium flex items-center gap-1 py-4"
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
                                </Link>

                                {link.dropdown && (
                                    <div className="absolute left-0 top-full w-64 bg-voltura-blue border border-white/10 rounded-sm shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform origin-top-left z-[60]">
                                        <div className="py-2">
                                            {link.items?.map((item, idx) => (
                                                <div key={idx} className="relative group/sub">
                                                    {item.group ? (
                                                        <>
                                                            <button 
                                                                className="w-full text-left flex items-center justify-between px-4 py-3 text-sm text-white bg-transparent hover:bg-transparent hover:text-voltura-gold transition-colors"
                                                            >
                                                                {item.name}
                                                                <ChevronDown className="-rotate-90 w-4 h-4 text-white group-hover/sub:text-voltura-gold" />
                                                            </button>
                                                            <div className="absolute left-full top-0 w-60 bg-voltura-blue border border-white/10 rounded-sm shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 ml-0.5">
                                                                <div className="py-2">
                                                                    {item.subItems?.map((sub, sIdx) => (
                                                                        <Link
                                                                            key={sIdx}
                                                                            href={sub.href}
                                                                            className="block px-4 py-2 text-sm text-white hover:text-voltura-gold hover:translate-x-1 transition-all"
                                                                        >
                                                                            {sub.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <Link
                                                            href={item.href || "#"}
                                                            className="block px-4 py-3 text-sm text-white hover:text-voltura-gold hover:translate-x-1 transition-transform border-b border-white/5 last:border-0"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Actions - Desktop */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link 
                            href={getSwitchLanguagePath()} 
                            className="flex items-center gap-1 text-sm font-medium hover:text-voltura-gold transition-colors text-white"
                        >
                            <Globe className="w-4 h-4" />
                            {isCatalan ? "Castellano" : "Català"}
                        </Link>
                        
                        <button 
                            onClick={openModal} 
                            className="bg-voltura-gold text-voltura-blue font-bold px-6 py-2 rounded-sm hover:brightness-110 transition-all uppercase tracking-wide text-sm whitespace-nowrap"
                        >
                            {isCatalan ? "Contacte" : "Contacto"}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-voltura-stone hover:text-white transition-colors p-2">
                            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden bg-voltura-blue border-t border-white/10 pb-12 absolute top-full left-0 w-full z-40 shadow-2xl h-[calc(100vh_-_80px)] overflow-y-auto">
                    <div className="px-6 pt-10 space-y-8">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.dropdown ? (
                                    <div className="space-y-6">
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                            className="flex justify-between w-full text-left text-2xl font-bold text-white"
                                        >
                                            {link.name}
                                            <ChevronDown className={cn("w-7 h-7 transition-transform", activeDropdown === link.name ? "rotate-180" : "")} />
                                        </button>

                                        {activeDropdown === link.name && (
                                            <div className="pl-4 space-y-6 border-l-2 border-voltura-gold/30 mt-6">
                                                {link.items?.map((item, idx) => (
                                                    <div key={idx}>
                                                        {item.group ? (
                                                            <div className="space-y-4 mt-6">
                                                                <p className="text-[11px] text-voltura-gold uppercase tracking-[3px] font-black">{item.name}</p>
                                                                {item.subItems?.map((sub, sIdx) => (
                                                                    <Link key={sIdx} href={sub.href} className="block text-lg text-white/70 font-medium" onClick={toggleMenu}>
                                                                        {sub.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <Link href={item.href || "#"} className="block text-xl text-white/90 font-semibold" onClick={toggleMenu}>
                                                                {item.name}
                                                            </Link>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link href={link.href} className="block text-2xl font-bold text-white" onClick={toggleMenu}>
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="pt-10 border-t border-white/10 space-y-8 pb-20">
                            <Link 
                                href={getSwitchLanguagePath()} 
                                className="flex items-center gap-4 text-xl font-bold text-white"
                                onClick={toggleMenu}
                            >
                                <Globe className="w-7 h-7" />
                                {isCatalan ? "Castellano" : "Català"}
                            </Link>

                            <button onClick={handleMobileContact} className="block w-full text-center bg-voltura-gold text-voltura-blue font-extrabold px-6 py-5 rounded-sm uppercase tracking-widest text-sm shadow-2xl">
                                {isCatalan ? "Contacte" : "Contacto"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
