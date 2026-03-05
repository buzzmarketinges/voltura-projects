import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { articles } from "@/data/articles";
import { Metadata } from "next";
import { NewsList } from "@/components/news-list";
import { prisma } from '@/lib/prisma';

export const metadata: Metadata = {
    alternates: {
        canonical: "https://volturaprojects.es/noticias",
    },
    title: "Noticias y Blog | Voltura Projects - Reformas y Construcción",
    description: "Artículos, guías y consejos sobre reformas integrales, instalaciones y construcción. Mantente informado con las últimas tendencias del sector.",
};

export const dynamic = 'force-dynamic';

export default async function NoticiasPage() {
    try {
        const dbPosts = await prisma.post.findMany({
            where: { isPublished: true },
            orderBy: { createdAt: 'desc' },
        });

        const parsedDbPosts = dbPosts.map((post: any) => {
            let cats = ["Reformas"];
            try {
                if (post.categories && post.categories !== "[]" && typeof post.categories === 'string' && post.categories.startsWith('[')) {
                    const parsed = JSON.parse(post.categories);
                    cats = Array.isArray(parsed) ? parsed : [parsed];
                } else if (post.categories && post.categories !== "[]" && typeof post.categories === 'string') {
                    cats = [post.categories];
                }
            } catch (e) {
                cats = ["Reformas"];
            }

            return {
                id: post.id,
                slug: post.slug,
                title: post.title,
                excerpt: post.metaDescription || "Noticia destacada sobre nuestras obras e instalaciones.",
                image: post.mainImage || "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
                date: post.createdAt ? post.createdAt.toISOString() : new Date().toISOString(),
                readTime: "5 min lectura",
                category: cats[0] || "Reformas",
                allCategories: cats,
                author: "Equipo Voltura",
                tags: ["Actualidad"],
                content: post.contentHtml || ""
            };
        });

        const combinedArticles = [...parsedDbPosts, ...articles] as any[];

        return (
            <main className="min-h-screen bg-voltura-blue text-voltura-stone font-sans selection:bg-voltura-gold selection:text-white">
                <Navbar />

                <section className="relative py-20 bg-gradient-to-b from-voltura-slate to-voltura-blue">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center space-y-6">
                            <div className="inline-block border-b-2 border-voltura-gold pb-2">
                                <span className="text-voltura-gold font-bold tracking-[0.2em] uppercase text-sm">Blog</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                                Noticias y Artículos
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Consejos, guías y tendencias sobre reformas integrales, instalaciones y construcción
                            </p>
                        </div>
                    </div>
                </section>

                <NewsList initialArticles={combinedArticles} />

                <Footer />
            </main>
        );
    } catch (error) {
        console.error("Error in NoticiasPage:", error);
        return (
            <main className="min-h-screen bg-voltura-blue text-voltura-stone font-sans selection:bg-voltura-gold selection:text-white">
                <Navbar />
                <section className="relative py-20 bg-gradient-to-b from-voltura-slate to-voltura-blue">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <h1 className="text-3xl">Noticias y Blog</h1>
                    </div>
                </section>
                <NewsList initialArticles={articles as any} />
                <Footer />
            </main>
        );
    }
}
