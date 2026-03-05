import Link from 'next/link'
import { LayoutDashboard, FileText, Image as ImageIcon, Settings, LogOut } from 'lucide-react'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {

    // Server action para cerrar sesión
    async function logout() {
        'use server'
        const cookieStore = await cookies()
        cookieStore.delete('admin_token')
        redirect('/admin/login')
    }

    return (
        <div className="flex h-screen bg-neutral-100 font-sans text-neutral-900">
            {/* Sidebar */}
            <aside className="w-64 flex-none border-r border-neutral-200 bg-white shadow-sm flex flex-col justify-between">
                <div>
                    <div className="flex h-16 items-center justify-center border-b border-neutral-200">
                        <span className="text-xl font-bold tracking-tight text-blue-600">Voltura CMS</span>
                    </div>
                    <nav className="mt-6 flex flex-col space-y-1 px-4 text-sm font-medium">
                        <Link
                            href="/admin"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-blue-600 transition-colors"
                        >
                            <LayoutDashboard size={18} />
                            Panel de Control
                        </Link>
                        <Link
                            href="/admin/blog"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-blue-600 transition-colors"
                        >
                            <FileText size={18} />
                            Noticias
                        </Link>
                        <Link
                            href="/admin/media"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-blue-600 transition-colors"
                        >
                            <ImageIcon size={18} />
                            Media
                        </Link>
                    </nav>
                </div>

                {/* Footer Sidebar */}
                <div className="p-4 border-t border-neutral-200">
                    <form action={logout}>
                        <button
                            type="submit"
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium text-neutral-600 hover:bg-red-50 hover:text-red-600 transition-colors"
                        >
                            <LogOut size={18} />
                            Cerrar sesión
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 overflow-auto bg-[#F9FAFB] p-8">
                {children}
            </main>
        </div>
    )
}
