"use client";

import { Share2 } from "lucide-react";

interface ShareButtonProps {
    title: string;
    excerpt: string;
}

export function ShareButton({ title, excerpt }: ShareButtonProps) {
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title,
                text: excerpt,
                url: window.location.href,
            }).catch((error) => console.log('Error sharing:', error));
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Enlace copiado al portapapeles');
        }
    };

    return (
        <button
            className="ml-auto flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-sm transition-colors text-sm"
            onClick={handleShare}
            aria-label="Compartir artículo"
        >
            <Share2 className="w-4 h-4" />
            Compartir
        </button>
    );
}
