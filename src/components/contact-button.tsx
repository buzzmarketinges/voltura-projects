"use client";

import { useContactModal } from "@/context/contact-modal-context";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContactButtonProps {
    children: ReactNode;
    className?: string;
}

export function ContactButton({ children, className }: ContactButtonProps) {
    const { openModal } = useContactModal();

    return (
        <button
            onClick={openModal}
            className={cn("bg-voltura-gold text-voltura-blue font-bold rounded-sm hover:brightness-110 transition-all uppercase tracking-wide", className)}
        >
            {children}
        </button>
    );
}
