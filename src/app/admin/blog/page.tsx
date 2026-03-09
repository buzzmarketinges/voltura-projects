import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Plus, Edit } from 'lucide-react'
import { DeletePostButton } from '@/components/admin/DeletePostButton'

export const dynamic = 'force-dynamic';

export default async function BlogAdminPage() {
    const posts = await prisma.post.findMany({
        orderBy: { createdAt: 'desc' }
    })

    return (
        <div>
            <div className="mb-8 flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Artículos del Blog</h1>
                <Link
                    href="/admin/blog/new"
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
                >
                    <Plus size={18} />
                    Crear Nuevo
                </Link>
            </div>

            <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-neutral-600">
                    <thead className="bg-neutral-50 text-xs uppercase text-neutral-700">
                        <tr>
                            <th scope="col" className="px-6 py-4">Título</th>
                            <th scope="col" className="px-6 py-4">Slug</th>
                            <th scope="col" className="px-6 py-4">Estado</th>
                            <th scope="col" className="px-6 py-4 text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                        {posts.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-neutral-500">
                                    No hay artículos todavía. Empieza creando uno.
                                </td>
                            </tr>
                        ) : (
                            posts.map((post: any) => (
                                <tr key={post.id} className="hover:bg-neutral-50">
                                    <td className="px-6 py-4 font-medium text-neutral-900">{post.title}</td>
                                    <td className="px-6 py-4">{post.slug}</td>
                                    <td className="px-6 py-4">
                                        {post.isPublished ? (
                                            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                                                Publicado
                                            </span>
                                        ) : (
                                            <span className="rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-700">
                                                Borrador
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-3">
                                            <Link
                                                href={`/admin/blog/${post.id}`}
                                                className="text-blue-600 hover:text-blue-900"
                                                title="Editar"
                                            >
                                                <Edit size={18} />
                                            </Link>
                                            {/* TODO: Add delete functionality here later */}
                                            <DeletePostButton id={post.id} />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
