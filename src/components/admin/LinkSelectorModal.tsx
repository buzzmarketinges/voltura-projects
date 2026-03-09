'use client'

import { useState, useEffect } from 'react'
import { X, Search, Link as LinkIcon, ExternalLink } from 'lucide-react'

type LinkItem = {
    title: string;
    url: string;
    type: string;
}

export function LinkSelectorModal({
    isOpen,
    onClose,
    onSelect
}: {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (url: string) => void;
}) {
    const [searchTerm, setSearchTerm] = useState('')
    const [urls, setUrls] = useState<LinkItem[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [customUrl, setCustomUrl] = useState('')

    useEffect(() => {
        if (isOpen && urls.length === 0) {
            setIsLoading(true)
            fetch('/api/admin/search-urls')
                .then(res => res.json())
                .then(data => {
                    setUrls(data)
                    setIsLoading(false)
                })
                .catch(() => setIsLoading(false))
        }
    }, [isOpen, urls.length])

    if (!isOpen) return null;

    const filteredUrls = urls.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.url.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="w-full max-w-2xl rounded-xl bg-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
                    <h2 className="text-xl font-semibold text-neutral-900 flex items-center gap-2">
                        <LinkIcon size={20} className="text-blue-600" /> Insertar Enlace
                    </h2>
                    <button onClick={onClose} className="rounded-full p-2 text-neutral-500 hover:bg-neutral-100 transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6 overflow-y-auto flex-1 bg-neutral-50">
                    <div className="mb-6">
                        <label className="mb-1 block text-sm font-medium text-neutral-700">Enlace Externo Personalizado</label>
                        <div className="flex gap-2">
                            <input
                                type="url"
                                placeholder="https://..."
                                value={customUrl}
                                onChange={(e) => setCustomUrl(e.target.value)}
                                className="block w-full rounded-md border border-neutral-300 px-4 py-2 text-neutral-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                            <button
                                onClick={() => onSelect(customUrl)}
                                disabled={!customUrl}
                                className="px-4 py-2 bg-neutral-800 text-white rounded-md disabled:opacity-50 text-sm font-medium"
                            >
                                Insertar
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-3 h-5 w-5 text-neutral-400" />
                            <input
                                type="text"
                                placeholder="Buscar en la web (Proyectos, Servicios, Noticias)..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="block w-full rounded-md border border-neutral-300 pl-10 pr-4 py-2.5 text-neutral-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm">
                            {isLoading ? (
                                <div className="p-8 text-center text-neutral-500">Cargando enlaces...</div>
                            ) : filteredUrls.length > 0 ? (
                                <ul className="divide-y divide-neutral-100 max-h-[300px] overflow-y-auto">
                                    {filteredUrls.map((item, idx) => (
                                        <li key={idx}>
                                            <button
                                                onClick={() => onSelect(item.url)}
                                                className="w-full text-left px-4 py-3 hover:bg-blue-50 flex items-center justify-between transition-colors group"
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="font-medium text-neutral-900 truncate group-hover:text-blue-700">{item.title}</div>
                                                    <div className="text-xs text-neutral-500 truncate mt-0.5">{item.url}</div>
                                                </div>
                                                <span className="shrink-0 ml-4 inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600 border border-neutral-200">
                                                    {item.type}
                                                </span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="p-8 text-center text-neutral-500">No se encontraron resultados para "{searchTerm}"</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
