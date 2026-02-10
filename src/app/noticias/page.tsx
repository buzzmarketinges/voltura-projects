import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { articles } from "@/data/articles";
import { Metadata } from "next";
import { NewsList } from "@/components/news-list";

export const metadata: Metadata = {
    title: "Noticias y Blog | Voltura Projects - Reformas y Construcción",
    description: "Artículos, guías y consejos sobre reformas integrales, instalaciones y construcción. Mantente informado con las últimas tendencias del sector.",
};

export default function NoticiasPage() {
    return (
        <main className="min-h-screen bg-voltura-blue text-voltura-stone font-sans selection:bg-voltura-gold selection:text-white">
            <Navbar />

            {/* Hero Section */}
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

            {/* News List & Filters Client Component */}
            <NewsList initialArticles={articles} />

            <Footer />
        </main>
    );
}
