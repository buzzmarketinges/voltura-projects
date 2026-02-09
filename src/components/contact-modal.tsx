"use client";

import { useState } from "react";
import { X, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        termsAccepted: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.termsAccepted) return;

        setIsSubmitting(true);
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Error al enviar el formulario");
            }

            setIsSubmitting(false);
            onClose();
            router.push("/gracias");
        } catch (error) {
            console.error("Error:", error);
            setIsSubmitting(false);
            setErrorMessage(error instanceof Error ? error.message : "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
            <div
                className="absolute inset-0 bg-voltura-blue/90 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative bg-[#0F172A] border border-white/10 w-full max-w-lg rounded-sm shadow-2xl animate-in fade-in zoom-in duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="p-8">
                    <h2 className="text-2xl font-serif text-white mb-2">Hablemos de tu proyecto</h2>
                    <p className="text-gray-400 text-sm mb-6">Déjanos tus datos y te contactaremos en breve.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs text-gray-400 uppercase tracking-wider">Nombre *</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-white focus:outline-none focus:border-voltura-gold transition-colors"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-gray-400 uppercase tracking-wider">Apellido *</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-white focus:outline-none focus:border-voltura-gold transition-colors"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs text-gray-400 uppercase tracking-wider">Email *</label>
                            <input
                                required
                                type="email"
                                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-white focus:outline-none focus:border-voltura-gold transition-colors"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs text-gray-400 uppercase tracking-wider">Teléfono (Opcional)</label>
                            <input
                                type="tel"
                                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-white focus:outline-none focus:border-voltura-gold transition-colors"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs text-gray-400 uppercase tracking-wider">Mensaje *</label>
                            <textarea
                                required
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-white focus:outline-none focus:border-voltura-gold transition-colors resize-none"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <div className="flex items-start gap-2 pt-2">
                            <input
                                required
                                type="checkbox"
                                id="terms"
                                className="mt-1 accent-voltura-gold w-4 h-4 cursor-pointer"
                                checked={formData.termsAccepted}
                                onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                            />
                            <label htmlFor="terms" className="text-xs text-gray-400 cursor-pointer">
                                He leído y acepto los <Link href="/terminos-condiciones" className="text-voltura-gold hover:underline" target="_blank">términos y condiciones</Link> y la política de privacidad.
                            </label>
                        </div>

                        {errorMessage && (
                            <div className="bg-red-500/10 border border-red-500/20 rounded-sm p-3 mt-4">
                                <p className="text-red-400 text-sm">{errorMessage}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting || !formData.termsAccepted}
                            className="w-full bg-voltura-gold text-voltura-blue font-bold py-3 rounded-sm hover:brightness-110 transition-all uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Enviando...
                                </>
                            ) : (
                                "Enviar Mensaje"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
