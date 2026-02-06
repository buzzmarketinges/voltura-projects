"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ContactModal } from "@/components/contact-modal";

interface ContactContextType {
    openModal: () => void;
    closeModal: () => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <ContactContext.Provider value={{ openModal, closeModal }}>
            {children}
            <ContactModal isOpen={isOpen} onClose={closeModal} />
        </ContactContext.Provider>
    );
}

export function useContactModal() {
    const context = useContext(ContactContext);
    if (context === undefined) {
        throw new Error("useContactModal must be used within a ContactProvider");
    }
    return context;
}
