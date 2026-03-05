'use client'

import { useState, useEffect } from 'react'
import { X, Upload, Image as ImageIcon } from 'lucide-react'

export function MediaSelectorModal({
    isOpen,
    onClose,
    onSelect
}: {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (url: string) => void;
}) {
    const [activeTab, setActiveTab] = useState<'library' | 'upload'>('library')
    const [mediaItems, setMediaItems] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(false)

    // Upload state
    const [file, setFile] = useState<File | null>(null)
    const [isUploading, setIsUploading] = useState(false)

    useEffect(() => {
        if (isOpen && activeTab === 'library') {
            loadMedia()
        }
    }, [isOpen, activeTab])

    const loadMedia = async () => {
        setIsLoading(true)
        try {
            const res = await fetch('/api/admin/media')
            if (res.ok) {
                const data = await res.json()
                setMediaItems(data)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleUpload = async (e?: React.FormEvent | React.MouseEvent) => {
        if (e) e.preventDefault()
        if (!file) return

        setIsUploading(true)
        const formData = new FormData()
        formData.append('file', file)

        // Defaults to its own name
        formData.append('name', file.name.split('.')[0])
        formData.append('altText', file.name.split('.')[0])

        try {
            const res = await fetch('/api/admin/upload', {
                method: 'POST',
                body: formData,
            })

            if (res.ok) {
                const data = await res.json()
                onSelect(data.url)
                setFile(null)
                onClose()
            } else {
                alert('Error al subir archivo')
            }
        } catch (error) {
            console.error(error)
            alert('Error en conexión')
        } finally {
            setIsUploading(false)
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
            <div className="w-full max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] h-[85vh]">
                <div className="flex items-center justify-between border-b p-4">
                    <h2 className="text-xl font-semibold text-neutral-900">Seleccionar Imagen</h2>
                    <button type="button" onClick={onClose} className="text-neutral-500 hover:text-neutral-700">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex border-b bg-neutral-50">
                    <button
                        type="button"
                        onClick={() => setActiveTab('library')}
                        className={`px-6 py-3 text-sm font-medium ${activeTab === 'library' ? 'border-b-2 border-blue-600 text-blue-600 bg-white' : 'text-neutral-600'}`}
                    >
                        Biblioteca Multimedia
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab('upload')}
                        className={`px-6 py-3 text-sm font-medium ${activeTab === 'upload' ? 'border-b-2 border-blue-600 text-blue-600 bg-white' : 'text-neutral-600'}`}
                    >
                        Subir Archivo
                    </button>
                </div>

                <div className="p-6 overflow-y-auto flex-1">
                    {activeTab === 'library' && (
                        <div>
                            {isLoading ? (
                                <p className="text-center text-neutral-500 py-10">Cargando imágenes...</p>
                            ) : mediaItems.length === 0 ? (
                                <p className="text-center text-neutral-500 py-10">No hay imágenes en la biblioteca.</p>
                            ) : (
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {mediaItems.map(item => (
                                        <div
                                            key={item.id}
                                            className="group relative cursor-pointer border rounded-lg overflow-hidden aspect-video bg-neutral-100 hover:border-blue-500 transition-colors"
                                            onClick={() => {
                                                onSelect(item.url)
                                                onClose()
                                            }}
                                        >
                                            {item.type === 'image' || item.type === 'icon' ? (
                                                <img src={item.url} alt={item.altText} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="flex items-center justify-center w-full h-full text-neutral-400">
                                                    <ImageIcon size={48} />
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors flex items-center justify-center">
                                                <span className="opacity-0 group-hover:opacity-100 bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium shadow-sm transition-opacity">
                                                    Seleccionar
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'upload' && (
                        <div className="max-w-md mx-auto py-10 w-full">
                            <div className="space-y-6">
                                <div className="rounded-lg border-2 border-dashed border-neutral-300 p-8 text-center bg-neutral-50">
                                    <input
                                        type="file"
                                        required
                                        accept="image/*"
                                        onChange={e => setFile(e.target.files?.[0] || null)}
                                        className="block w-full text-sm text-neutral-500 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
                                    />
                                    {file && <p className="mt-2 text-sm text-green-600 font-medium">Archivo seleccionado: {file.name}</p>}
                                </div>

                                <button
                                    type="button"
                                    onClick={handleUpload}
                                    disabled={!file || isUploading}
                                    className="w-full flex justify-center items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 disabled:opacity-50"
                                >
                                    {isUploading ? 'Subiendo...' : <><Upload size={18} /> Subir y Seleccionar</>}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
