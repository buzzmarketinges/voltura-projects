'use client'

import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function DeletePostButton({ id }: { id: string }) {
    const [isDeleting, setIsDeleting] = useState(false)
    const router = useRouter()

    const handleDelete = async () => {
        if (!confirm('¿Estás seguro de que deseas eliminar este artículo? Esta acción no se puede deshacer.')) {
            return
        }

        setIsDeleting(true)
        try {
            const res = await fetch(`/api/admin/blog?id=${id}`, {
                method: 'DELETE',
            })

            if (res.ok) {
                router.refresh()
            } else {
                alert('Hubo un error al eliminar el artículo.')
            }
        } catch (error) {
            console.error(error)
            alert('Error de red al intentar eliminar.')
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className={`text-red-600 hover:text-red-900 transition-opacity ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}`}
            title="Eliminar"
        >
            <Trash2 size={18} />
        </button>
    )
}
