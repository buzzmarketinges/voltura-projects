import { prisma } from '@/lib/prisma'
import MediaUploader from '@/components/admin/MediaUploader'
import MediaCard from '@/components/admin/MediaCard'

export default async function MediaGalleryPage() {
    const mediaFiles = await prisma.media.findMany({
        orderBy: { createdAt: 'desc' },
    })

    return (
        <div>
            <div className="mb-8 flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Biblioteca Multimedia</h1>
            </div>

            <MediaUploader />

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {mediaFiles.length === 0 ? (
                    <div className="col-span-full py-12 text-center text-neutral-500">
                        No hay archivos todavía. Sube uno usando el formulario.
                    </div>
                ) : (
                    mediaFiles.map((file) => (
                        <MediaCard key={file.id} file={file} />
                    ))
                )}
            </div>
        </div>
    )
}
