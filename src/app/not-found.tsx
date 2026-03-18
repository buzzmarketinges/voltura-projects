"use client";

import { usePathname } from "next/navigation";
import { useContactModal } from "@/context/contact-modal-context";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function NotFound() {
  const pathname = usePathname() || "";
  const { openModal } = useContactModal();

  const isCatalan = pathname.startsWith("/ca");

  const text = isCatalan
    ? {
        title: "Aquesta pàgina no està construïda.",
        subtitle: "Visita qualsevol altra pàgina de Voltura Projects o posa't en contacte amb nosaltres",
        btnExplore: "EXPLORAR SERVEIS",
        btnContact: "CONTACTE",
      }
    : {
        title: "Esta página no está construida.",
        subtitle: "Visita cualquier otra página de Voltura Projects o ponte en contacto con nosotros",
        btnExplore: "EXPLORAR SERVICIOS",
        btnContact: "CONTACTO",
      };

  const exploreHref = isCatalan ? "/ca#servicios" : "/#servicios";

  return (
    <main className="min-h-screen bg-voltura-blue text-voltura-stone font-sans selection:bg-voltura-gold selection:text-white flex flex-col">
      <Navbar />

      <section className="relative flex-grow flex items-center justify-center overflow-hidden py-20">
        {/* Background Image (mimicking standard hero layout) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop"
            alt="Voltura Projects - 404"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover"
          />
          {/* Overlay mask using same backdrop transparency */}
          <div className="absolute inset-0 bg-voltura-blue/80 backdrop-grayscale-[20%]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-transparent to-voltura-blue/40"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in duration-1000">
          <p className="text-voltura-gold font-semibold tracking-[0.2em] uppercase text-sm md:text-base">
            Error 404
          </p>
          <div className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            {text.title}
          </div>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {text.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href={exploreHref}
              className="bg-voltura-gold text-voltura-blue font-bold px-8 py-3 rounded-sm hover:brightness-110 transition-all uppercase tracking-wide text-sm md:text-base text-center"
            >
              {text.btnExplore}
            </Link>
            <button
              onClick={openModal}
              className="border border-white/30 text-white font-medium px-8 py-3 rounded-sm hover:bg-white/10 transition-all uppercase tracking-wide text-sm md:text-base text-center cursor-pointer"
            >
              {text.btnContact}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
