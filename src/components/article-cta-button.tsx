"use client";

import { useContactModal } from "@/context/contact-modal-context";

export function ArticleCTAButton() {
    const { openModal } = useContactModal();

    return (
        <button
            onClick={openModal}
            className="bg-voltura-gold text-voltura-blue font-bold px-8 py-3 rounded-sm hover:brightness-110 transition-all uppercase tracking-wide whitespace-nowrap"
        >
            Solicitar Presupuesto
        </button>
    );
}
