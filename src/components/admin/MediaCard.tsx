'use client'

import { FileDown, Image as ImageIcon, Video, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function MediaCard({ file }: { file: any }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(file.url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="group relative rounded-lg border border-neutral-200 bg-white shadow-sm overflow-hidden flex flex-col pt-4">
            <div className="aspect-square w-full bg-neutral-50 flex items-center justify-center p-2">
                {file.type === 'image' ? (
                    <img src={file.url} alt={file.altText || file.filename} className="h-full w-full object-contain rounded" />
                ) : file.type === 'video' ? (
                    <Video size={48} className="text-neutral-300" />
                ) : (
                    <FileDown size={48} className="text-neutral-300" />
                )}
            </div>
            <div className="p-3 bg-white z-10">
                <p className="truncate text-sm text-neutral-900 font-medium" title={file.filename}>
                    {file.filename}
                </p>
                <p className="truncate text-xs text-neutral-500" title={file.altText || ''}>
                    Alt: {file.altText}
                </p>
            </div>

            {/* Copy overlay */}
            <div className="absolute inset-0 bg-white/90 p-4 translate-y-full transition-transform group-hover:translate-y-0 flex items-center justify-center z-20 backdrop-blur-sm">
                <button
                    onClick={handleCopy}
                    className="flex flex-col items-center justify-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                    {copied ? <Check size={32} className="text-emerald-500" /> : <Copy size={32} />}
                    {copied ? '¡Copiado!' : 'Copiar URL'}
                </button>
            </div>
        </div>
    )
}
