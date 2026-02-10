"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useContactModal } from "@/context/contact-modal-context";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const { openModal } = useContactModal();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleMobileContact = () => {
        setIsOpen(false);
        openModal();
    };

    const navLinks = [
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
        { name: "Proyectos", href: "/proyectos" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-voltura-blue text-voltura-stone border-b border-white/10 shadow-lg selection:bg-voltura-blue selection:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="relative w-10 h-10">
                            <Image
                                src="/oro-imagotipo.png"
                                alt="Voltura Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="text-2xl tracking-[2px] cursor-pointer flex flex-col justify-center">
                            <div className="leading-none">
                                <span className="font-extrabold text-white">VOLTURA</span> <span className="font-light text-voltura-gold">PROJECTS</span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className="hover:text-voltura-gold transition-colors duration-200 font-medium flex items-center gap-1"
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown className="w-4 h-4" />}
                                </Link>

                                {/* Dropdown Desktop */}
                                {link.dropdown && (
                                    <div className="absolute left-0 mt-2 w-64 bg-voltura-blue border border-white/10 rounded-sm shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform origin-top-left">
                                        <div className="py-2">
                                            {link.items?.map((item, idx) => (
                                                <div key={idx} className="relative group/sub">
                                                    {item.group ? (
                                                        <>
                                                            <button aria-label={`Abrir menú de ${item.name}`} className="w-full text-left flex items-center justify-between px-4 py-3 text-sm text-white bg-transparent hover:bg-transparent hover:text-voltura-gold transition-colors">
                                                                {item.name}
                                                                <ChevronDown className="-rotate-90 w-4 h-4 text-white group-hover/sub:text-voltura-gold" />
                                                            </button>

                                                            {/* Nested Submenu */}
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
                                                            className="block px-4 py-3 text-sm text-white hover:text-voltura-gold hover:translate-x-1 transition-transform"
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

                    {/* CTA Button */}
                    <div className="hidden md:flex">
                        <button onClick={openModal} className="bg-voltura-gold text-voltura-blue font-bold px-6 py-2 rounded-sm hover:brightness-110 transition-all uppercase tracking-wide text-sm">
                            Contacto
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} aria-label={isOpen ? "Cerrar menú" : "Abrir menú"} className="text-voltura-stone hover:text-white">
                            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-voltura-blue border-t border-white/10">
                    <div className="px-4 pt-4 pb-8 space-y-4">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.dropdown ? (
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                            aria-label={`${activeDropdown === link.name ? 'Cerrar' : 'Abrir'} menú de ${link.name}`}
                                            className="flex justify-between w-full text-left text-lg font-medium text-white"
                                        >
                                            {link.name}
                                            <ChevronDown className={cn("w-5 h-5 transition-transform", activeDropdown === link.name ? "rotate-180" : "")} />
                                        </button>

                                        {activeDropdown === link.name && (
                                            <div className="pl-4 space-y-3 border-l-2 border-voltura-gold/30 mt-2">
                                                {link.items?.map((item, idx) => (
                                                    <div key={idx}>
                                                        {item.group ? (
                                                            <div className="space-y-2 mt-2">
                                                                <p className="text-xs text-voltura-gold uppercase tracking-wider">{item.name}</p>
                                                                {item.subItems?.map((sub, sIdx) => (
                                                                    <Link key={sIdx} href={sub.href} className="block text-sm text-gray-300 hover:text-white" onClick={toggleMenu}>
                                                                        {sub.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <Link href={item.href || "#"} className="block text-base text-gray-200" onClick={toggleMenu}>
                                                                {item.name}
                                                            </Link>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link href={link.href} className="block text-lg font-medium text-white hover:text-voltura-gold" onClick={toggleMenu}>
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <button onClick={handleMobileContact} className="block w-full text-center bg-voltura-gold text-voltura-blue font-bold px-6 py-3 rounded-sm uppercase tracking-wide mt-4">
                            Contacto
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
