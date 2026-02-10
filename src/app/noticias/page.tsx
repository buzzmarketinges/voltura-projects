import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { articles, getAllCategories } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Noticias y Blog | Voltura Projects - Reformas y Construcción",
    description: "Artículos, guías y consejos sobre reformas integrales, instalaciones y construcción. Mantente informado con las últimas tendencias del sector.",
};

export default function NoticiasPage() {
    const categories = getAllCategories();
    const featuredArticle = articles[0];
    const recentArticles = articles.slice(1);

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

            {/* Categories Filter */}
            <section className="py-8 bg-white/5 border-y border-white/10 sticky top-20 z-40 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        <button className="px-4 py-2 bg-voltura-gold text-voltura-blue font-semibold rounded-sm hover:brightness-110 transition-all">
                            Todos
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                className="px-4 py-2 bg-white/10 text-white font-medium rounded-sm hover:bg-white/20 transition-all"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Article */}
            <section className="py-16 bg-voltura-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h2 className="text-3xl font-serif text-white mb-2">Artículo Destacado</h2>
                        <div className="w-20 h-1 bg-voltura-gold"></div>
                    </div>

                    <Link href={`/noticias/${featuredArticle.slug}`} className="group">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/5 rounded-sm overflow-hidden border border-white/10 hover:border-voltura-gold/50 transition-all">
                            <div className="relative h-[400px] overflow-hidden">
                                <Image
                                    src={featuredArticle.image}
                                    alt={featuredArticle.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    priority
                                    quality={85}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-voltura-gold text-voltura-blue font-bold text-sm rounded-sm">
                                        {featuredArticle.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col justify-center space-y-6">
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{new Date(featuredArticle.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>{featuredArticle.readTime}</span>
                                    </div>
                                </div>

                                <h3 className="text-3xl font-serif text-white group-hover:text-voltura-gold transition-colors">
                                    {featuredArticle.title}
                                </h3>

                                <p className="text-gray-300 leading-relaxed">
                                    {featuredArticle.excerpt}
                                </p>

                                <div className="flex items-center gap-2 text-voltura-gold font-semibold group-hover:gap-4 transition-all">
                                    Leer artículo completo
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-20 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-serif text-white mb-2">Artículos Recientes</h2>
                        <div className="w-20 h-1 bg-voltura-gold"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentArticles.map((article) => (
                            <Link
                                key={article.slug}
                                href={`/noticias/${article.slug}`}
                                className="group bg-voltura-blue/50 rounded-sm overflow-hidden border border-white/10 hover:border-voltura-gold/50 transition-all hover:-translate-y-2"
                            >
                                <div className="relative h-[240px] overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        loading="lazy"
                                        quality={75}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-voltura-gold text-voltura-blue font-bold text-xs rounded-sm">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 space-y-4">
                                    <div className="flex items-center gap-3 text-xs text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            <span>{new Date(article.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            <span>{article.readTime}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-serif text-white group-hover:text-voltura-gold transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center gap-2 text-voltura-gold font-semibold text-sm group-hover:gap-3 transition-all">
                                        Leer más
                                        <ArrowRight className="w-4 h-4" />
                                    </div>

                                    {article.tags.length > 0 && (
                                        <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-white/10">
                                            <Tag className="w-3 h-3 text-gray-500" />
                                            {article.tags.slice(0, 3).map((tag) => (
                                                <span key={tag} className="text-xs text-gray-500">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        ¿Tienes un proyecto en mente?
                    </h2>
                    <p className="text-xl text-gray-300">
                        Nuestro equipo de expertos está listo para ayudarte a hacer realidad tu reforma
                    </p>
                    <Link
                        href="/#contacto"
                        className="inline-block bg-voltura-gold text-voltura-blue font-bold px-8 py-3 rounded-sm hover:brightness-110 transition-all uppercase tracking-wide"
                    >
                        Solicitar Presupuesto
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
