"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Article } from "@/data/articles";
import { ArticleCTAButton } from "@/components/article-cta-button";

interface NewsListProps {
    initialArticles: Article[];
}

const CATEGORIES = [
    "Todos",
    "Reformas",
    "Instalaciones",
    "Energía Fotovoltaica",
    "Trabajos Verticales",
    "Guías"
];

export function NewsList({ initialArticles }: NewsListProps) {
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    // Filter articles
    const filteredArticles = initialArticles.filter((article) => {
        if (selectedCategory === "Todos") return true;
        // Normalize for comparison (handle accents if needed in data vs UI)
        // In data: "Reformas", "Instalaciones", "Trabajos Verticales", "Guías", "Energía Fotovoltaica"

        // Handle mapping if data doesn't match exactly UI text (e.g. "Guias" vs "Guías")
        const categoryMap: Record<string, string> = {
            "Energía Fotovoltaica": "Energía Fotovoltaica",
            "Guías": "Guías",
        };

        // Try exact match first, then mapped
        return article.category === selectedCategory || article.category === categoryMap[selectedCategory];
    });

    // Determine featured article and list
    // If "Todos" -> Use the first one as featured (or logic for specific featured flag if it existed)
    // If Filtered -> Use the first of the filtered list as featured
    const featuredArticle = filteredArticles[0];
    const recentArticles = filteredArticles.slice(1);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-20">
            {/* Categories Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {CATEGORIES.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`
                            px-6 py-3 rounded-sm font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg
                            ${selectedCategory === category
                                ? "bg-voltura-gold text-voltura-blue ring-2 ring-offset-2 ring-voltura-gold ring-offset-voltura-blue"
                                : "bg-voltura-slate/80 text-gray-300 hover:bg-voltura-slate hover:text-white backdrop-blur-sm border border-white/10"
                            }
                        `}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {filteredArticles.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-xl text-gray-400">No hay artículos en esta categoría aún.</p>
                </div>
            ) : (
                <>
                    {/* Featured Article */}
                    {featuredArticle && (
                        <div className="mb-20">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-[1px] bg-voltura-gold w-12"></div>
                                <h2 className="text-sm font-bold text-voltura-gold tracking-[0.2em] uppercase">
                                    {selectedCategory === "Todos" ? "Artículo Destacado" : `Destacado en ${selectedCategory}`}
                                </h2>
                            </div>

                            <Link href={`/noticias/${featuredArticle.slug}`} className="group">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-voltura-slate/50 rounded-sm overflow-hidden border border-white/5 hover:border-voltura-gold/30 transition-all duration-500 shadow-2xl">
                                    <div className="relative h-[400px] overflow-hidden">
                                        <div className="absolute inset-0 bg-voltura-blue/20 group-hover:bg-transparent transition-colors z-10"></div>
                                        <Image
                                            src={featuredArticle.image}
                                            alt={featuredArticle.title}
                                            fill
                                            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            priority
                                        />
                                        <span className="absolute top-6 left-6 z-20 bg-voltura-gold text-voltura-blue text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                            {featuredArticle.category}
                                        </span>
                                    </div>
                                    <div className="p-8 flex flex-col justify-center space-y-6">
                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-voltura-gold" />
                                                {new Date(featuredArticle.date).toLocaleDateString("es-ES", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                })}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-voltura-gold" />
                                                {featuredArticle.readTime}
                                            </div>
                                        </div>
                                        <h3 className="text-3xl font-serif text-white group-hover:text-voltura-gold transition-colors leading-tight">
                                            {featuredArticle.title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed line-clamp-3">
                                            {featuredArticle.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-voltura-gold font-semibold group-hover:translate-x-2 transition-transform">
                                            Leer artículo completo <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}

                    {/* Articles List */}
                    {recentArticles.length > 0 && (
                        <div>
                            <div className="flex items-center gap-4 mb-12">
                                <div className="h-[1px] bg-white/20 w-12"></div>
                                <h2 className="text-2xl font-serif text-white">
                                    {selectedCategory === "Todos" ? "Artículos Recientes" : `Más sobre ${selectedCategory}`}
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {recentArticles.map((article) => (
                                    <Link key={article.slug} href={`/noticias/${article.slug}`} className="group bg-voltura-slate/30 border border-white/5 hover:border-voltura-gold/30 transition-all duration-300 rounded-sm overflow-hidden flex flex-col">
                                        <div className="relative h-[240px] overflow-hidden">
                                            <div className="absolute inset-0 bg-voltura-blue/20 group-hover:bg-transparent transition-colors z-10"></div>
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                fill
                                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                loading="lazy"
                                            />
                                            <span className="absolute top-4 left-4 z-20 bg-voltura-blue/90 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider backdrop-blur-sm border border-white/10">
                                                {article.category}
                                            </span>
                                        </div>
                                        <div className="p-6 space-y-4 flex-1 flex flex-col">
                                            <div className="flex items-center justify-between text-xs text-gray-400">
                                                <span>{new Date(article.date).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" })}</span>
                                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                                            </div>
                                            <h3 className="text-xl font-serif text-white group-hover:text-voltura-gold transition-colors leading-tight line-clamp-2">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                                {article.excerpt}
                                            </p>
                                            <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/10">
                                                <div className="flex items-center gap-2 text-voltura-gold text-sm font-semibold group-hover:translate-x-1 transition-transform">
                                                    Leer más <ArrowRight className="w-4 h-4" />
                                                </div>

                                                {article.tags.length > 0 && (
                                                    <div className="flex items-center gap-2 flex-wrap">
                                                        <Tag className="w-3 h-3 text-gray-500" />
                                                        {article.tags.slice(0, 1).map((tag) => (
                                                            <span key={tag} className="text-xs text-gray-500">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* CTA Section */}
            <div className="mt-20 py-20 bg-gradient-to-b from-transparent to-voltura-slate border-t border-white/5 rounded-sm">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        ¿Tienes un proyecto en mente?
                    </h2>
                    <p className="text-xl text-gray-300">
                        Nuestro equipo de expertos está listo para ayudarte a hacer realidad tu reforma
                    </p>
                    <ArticleCTAButton />
                </div>
            </div>
        </div>
    );
}
