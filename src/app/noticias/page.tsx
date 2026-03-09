import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
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
    let dbArticles: any[] = [];

    try {
        // Attempt to fetch from DB with a timeout or just catch the failed connection
        const dbPosts = await prisma.post.findMany({
            where: {
                isPublished: true,
                createdAt: { lte: new Date() }
            },
            orderBy: { createdAt: 'desc' },
        }).catch(err => {
            console.error("Prisma query failed:", err);
            return [];
        });

        if (dbPosts && Array.isArray(dbPosts)) {
            dbArticles = dbPosts.map((post: any) => {
                let cats = ["Reformas"];
                try {
                    if (post.categories && typeof post.categories === 'string' && post.categories !== "[]") {
                        if (post.categories.startsWith('[')) {
                            const parsed = JSON.parse(post.categories);
                            cats = Array.isArray(parsed) ? parsed : [parsed];
                        } else {
                            cats = [post.categories];
                        }
                    }
                } catch (e) {
                    console.error("Error parsing categories:", e);
                }

                return {
                    slug: String(post.slug),
                    title: String(post.title),
                    excerpt: String(post.metaDescription || "Noticia destacada sobre nuestras obras e instalaciones."),
                    image: String(post.mainImage || "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"),
                    date: post.createdAt instanceof Date ? post.createdAt.toISOString() : new Date().toISOString(),
                    readTime: "5 min lectura",
                    category: String(cats[0] || "Reformas"),
                    allCategories: cats.map(c => String(c)),
                    author: "Equipo Voltura",
                    tags: ["Actualidad"]
                };
            });
        }
    } catch (globalError) {
        console.error("Global error in NoticiasPage data fetch:", globalError);
    }

    const combinedArticles = dbArticles;

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
}
