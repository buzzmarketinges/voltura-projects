'use client'

import { useState } from 'react'
import { Upload } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function MediaUploader() {
    const router = useRouter()
    const [isUploading, setIsUploading] = useState(false)

    const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsUploading(true)

        const formData = new FormData(e.currentTarget)

        // Si no se especificó altText, por defecto usar el nombre
        if (!formData.get('altText')) {
            formData.set('altText', formData.get('name') as string || '')
        }

        try {
            const res = await fetch('/api/admin/upload', {
                method: 'POST',
                body: formData,
            })
            if (res.ok) {
                // Reset form e hidratar la galeria
                ; (e.target as HTMLFormElement).reset()
                router.refresh()
            } else {
                alert('Error subiendo archivo')
            }
        } catch (err) {
            console.error(err)
            alert('Error de conexión')
        } finally {
            setIsUploading(false)
        }
    }

    return (
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm mb-8">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Subir Nuevo Archivo</h2>
            <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="col-span-1 border-2 border-dashed border-neutral-300 p-2 rounded relative">
                    <input
                        required
                        type="file"
                        name="file"
                        className="w-full text-sm text-neutral-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Nombre (Opcional)</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ej: logo-empresa"
                        className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Alt Text (SEO)</label>
                    <input
                        type="text"
                        name="altText"
                        placeholder="Se usa el nombre por defecto"
                        className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        disabled={isUploading}
                        className="w-full h-10 flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                    >
                        {isUploading ? 'Subiendo...' : <><Upload size={16} /> Subir</>}
                    </button>
                </div>
            </form>
        </div>
    )
}
