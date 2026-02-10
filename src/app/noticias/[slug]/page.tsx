import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { articles, getArticleBySlug } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { ShareButton } from "@/components/share-button";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        return {
            title: "Artículo no encontrado | Voltura Projects",
        };
    }

    return {
        title: `${article.title} | Voltura Projects`,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            images: [article.image],
            type: "article",
            publishedTime: article.date,
            authors: [article.author],
            tags: article.tags,
        },
    };
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    // Get related articles (same category, excluding current)
    const relatedArticles = articles
        .filter((a) => a.category === article.category && a.slug !== article.slug)
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-voltura-blue text-voltura-stone font-sans selection:bg-voltura-gold selection:text-white">
            <Navbar />

            {/* Hero Image */}
            <section className="relative h-[60vh] overflow-hidden">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority
                    fetchPriority="high"
                    quality={90}
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-voltura-blue via-voltura-blue/60 to-transparent"></div>

                {/* Breadcrumb */}
                <div className="absolute top-8 left-0 right-0 z-10">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link
                            href="/noticias"
                            className="inline-flex items-center gap-2 text-white hover:text-voltura-gold transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Volver a Noticias
                        </Link>
                    </div>
                </div>

                {/* Article Header */}
                <div className="absolute bottom-0 left-0 right-0 pb-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 bg-voltura-gold text-voltura-blue font-bold text-sm rounded-sm">
                                {article.category}
                            </span>
                            <div className="flex items-center gap-4 text-sm text-gray-300">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>
                                        {new Date(article.date).toLocaleDateString('es-ES', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{article.readTime}</span>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                            {article.title}
                        </h1>

                        <p className="text-xl text-gray-300 leading-relaxed">
                            {article.excerpt}
                        </p>

                        <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                            <span className="text-sm text-gray-400">Por {article.author}</span>
                            <ShareButton title={article.title} excerpt={article.excerpt} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-16 bg-voltura-blue">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-invert prose-lg max-w-none
                        prose-headings:font-serif prose-headings:text-white
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-voltura-gold/30 prose-h2:pb-3
                        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-voltura-gold
                        prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                        prose-a:text-voltura-gold prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-white prose-strong:font-semibold
                        prose-ul:text-gray-300 prose-ul:my-6
                        prose-li:my-2 prose-li:marker:text-voltura-gold
                        prose-code:text-voltura-gold prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded
                        prose-blockquote:border-l-4 prose-blockquote:border-voltura-gold prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-400
                    ">
                        <ReactMarkdown>{article.content}</ReactMarkdown>
                    </div>

                    {/* Tags */}
                    {article.tags.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <div className="flex items-center gap-3 flex-wrap">
                                <Tag className="w-5 h-5 text-voltura-gold" />
                                <span className="text-sm text-gray-400 font-semibold">Etiquetas:</span>
                                {article.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-sm hover:bg-white/10 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </article>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className="py-20 bg-white/5 border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif text-white mb-2">Artículos Relacionados</h2>
                            <div className="w-20 h-1 bg-voltura-gold"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedArticles.map((relatedArticle) => (
                                <Link
                                    key={relatedArticle.slug}
                                    href={`/noticias/${relatedArticle.slug}`}
                                    className="group bg-voltura-blue/50 rounded-sm overflow-hidden border border-white/10 hover:border-voltura-gold/50 transition-all hover:-translate-y-2"
                                >
                                    <div className="relative h-[200px] overflow-hidden">
                                        <Image
                                            src={relatedArticle.image}
                                            alt={relatedArticle.title}
                                            fill
                                            loading="lazy"
                                            quality={75}
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    <div className="p-6 space-y-3">
                                        <span className="text-xs text-voltura-gold font-semibold">
                                            {relatedArticle.category}
                                        </span>

                                        <h3 className="text-lg font-serif text-white group-hover:text-voltura-gold transition-colors line-clamp-2">
                                            {relatedArticle.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm line-clamp-2">
                                            {relatedArticle.excerpt}
                                        </p>

                                        <div className="flex items-center gap-2 text-voltura-gold font-semibold text-sm">
                                            Leer más →
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-b from-voltura-blue to-voltura-slate">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        ¿Listo para tu próxima reforma?
                    </h2>
                    <p className="text-xl text-gray-300">
                        Contacta con nosotros y descubre cómo podemos transformar tu hogar
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
