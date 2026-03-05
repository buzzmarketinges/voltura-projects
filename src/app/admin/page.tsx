import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { FileText, Image as ImageIcon } from 'lucide-react'

export default async function AdminDashboard() {
    const postsCount = await prisma.post.count()
    const mediaCount = await prisma.media.count()

    return (
        <div>
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 mb-8">Panel de Control</h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Posts Stat */}
                <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                        <FileText size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-neutral-500">Artículos del Blog</p>
                        <p className="text-2xl font-bold text-neutral-900">{postsCount}</p>
                    </div>
                </div>

                {/* Media Stat */}
                <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                        <ImageIcon size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-neutral-500">Archivos (Media)</p>
                        <p className="text-2xl font-bold text-neutral-900">{mediaCount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
