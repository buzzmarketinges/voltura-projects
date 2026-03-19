import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { NewsList } from "@/components/news-list";
import { prisma } from '@/lib/prisma';

export const metadata: Metadata = {
    alternates: {
        canonical: "https://volturaprojects.es/ca/noticies",
    },
    title: "Notícies i Blog | Voltura Projects - Reformes i Construcció",
    description: "Articles, guies i consells sobre reformes integrals, instal·lacions i construcció. Mantén-te informat amb les darreres tendències del sector.",
};

export const dynamic = 'force-dynamic';

export default async function NoticiesPage() {
    let dbArticles: any[] = [];

    try {
        const dbPosts = await prisma.post.findMany({
            where: {
                isPublished: true,
                createdAt: { lte: new Date() },
                slug_ca: { not: null }
            },
            orderBy: { createdAt: 'desc' },
        }).catch(err => {
            console.error("Prisma query failed:", err);
            return [];
        });

        if (dbPosts && Array.isArray(dbPosts)) {
            dbArticles = dbPosts.map((post: any) => {
                let cats = ["Reformes"];
                const categoriesSource = post.categories_ca || post.categories;
                
                try {
                    if (categoriesSource && typeof categoriesSource === 'string' && categoriesSource !== "[]") {
                        if (categoriesSource.startsWith('[')) {
                            const parsed = JSON.parse(categoriesSource);
                            cats = Array.isArray(parsed) ? parsed : [parsed];
                        } else {
                            cats = [categoriesSource];
                        }
                    }
                } catch (e) {
                    console.error("Error parsing categories:", e);
                }

                const title = post.title_ca || post.title;
                const slug = post.slug_ca; // Since we filtered, it is guaranteed
                const excerpt = post.metaDescription_ca || post.metaDescription || "Notícia destacada sobre les nostres obres i instal·lacions.";

                return {
                    slug: String(slug),
                    title: String(title),
                    excerpt: String(excerpt),
                    image: String(post.mainImage || "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"),
                    date: post.createdAt instanceof Date ? post.createdAt.toISOString() : new Date().toISOString(),
                    readTime: "5 min lectura",
                    category: String(cats[0] || "Reformes"),
                    allCategories: cats.map(c => String(c)),
                    author: "Equip Voltura",
                    tags: ["Actualitat"]
                };
            });
        }
    } catch (globalError) {
        console.error("Global error in NoticiesPage data fetch:", globalError);
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
                            Notícies i Articles
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Consells, guies i tendències sobre reformes integrals, instal·lacions i construcció
                        </p>
                    </div>
                </div>
            </section>

            <NewsList initialArticles={combinedArticles} basePath="ca/noticies" />
            <Footer />
        </main>
    );
}
