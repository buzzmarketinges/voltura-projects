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
                    {/* Intro destacado */}
                    <div className="mb-12 p-8 bg-gradient-to-r from-voltura-gold/10 to-transparent border-l-4 border-voltura-gold rounded-r-sm">
                        <p className="text-xl text-gray-200 leading-relaxed italic">
                            {article.excerpt}
                        </p>
                    </div>

                    {/* Contenido principal con estilos mejorados */}
                    <div className="prose prose-invert prose-lg max-w-none
                        prose-headings:font-serif prose-headings:text-white
                        prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-b-2 prose-h2:border-voltura-gold/30 prose-h2:pb-4
                        prose-h2:before:content-[''] prose-h2:before:block prose-h2:before:w-12 prose-h2:before:h-1 prose-h2:before:bg-voltura-gold prose-h2:before:mb-4
                        prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-5 prose-h3:text-voltura-gold prose-h3:font-semibold
                        prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4 prose-h4:text-white/90
                        prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                        prose-a:text-voltura-gold prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
                        prose-strong:text-white prose-strong:font-bold prose-strong:bg-white/5 prose-strong:px-1 prose-strong:rounded
                        prose-ul:text-gray-300 prose-ul:my-8 prose-ul:space-y-3
                        prose-ol:text-gray-300 prose-ol:my-8 prose-ol:space-y-3
                        prose-li:my-3 prose-li:marker:text-voltura-gold prose-li:marker:font-bold prose-li:pl-2
                        prose-code:text-voltura-gold prose-code:bg-white/10 prose-code:px-3 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-base
                        prose-blockquote:border-l-4 prose-blockquote:border-voltura-gold prose-blockquote:pl-8 prose-blockquote:py-4 prose-blockquote:my-8
                        prose-blockquote:italic prose-blockquote:text-gray-300 prose-blockquote:bg-white/5 prose-blockquote:rounded-r-sm
                        prose-hr:border-white/10 prose-hr:my-12
                        prose-table:border-collapse prose-table:w-full prose-table:my-8
                        prose-th:bg-voltura-gold/20 prose-th:text-white prose-th:font-bold prose-th:p-4 prose-th:border prose-th:border-white/20
                        prose-td:p-4 prose-td:border prose-td:border-white/20 prose-td:text-gray-300
                    ">
                        <ReactMarkdown
                            components={{
                                // Personalizar h2 con iconos decorativos
                                h2: ({ children }) => (
                                    <h2 className="group relative">
                                        <span className="relative z-10">{children}</span>
                                        <div className="absolute -left-4 top-0 w-1 h-full bg-voltura-gold/20 group-hover:bg-voltura-gold/40 transition-colors"></div>
                                    </h2>
                                ),
                                // Personalizar h3 con estilo especial
                                h3: ({ children }) => (
                                    <h3 className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-voltura-gold rounded-full"></span>
                                        {children}
                                    </h3>
                                ),
                                // Personalizar listas con mejor espaciado
                                ul: ({ children }) => (
                                    <ul className="space-y-4 my-8">
                                        {children}
                                    </ul>
                                ),
                                // Personalizar items de lista con checkmarks
                                li: ({ children }) => {
                                    const text = String(children);
                                    // Si empieza con ✅, usar estilo de check
                                    if (text.startsWith('✅')) {
                                        return (
                                            <li className="flex items-start gap-3 bg-green-500/10 p-4 rounded-sm border-l-2 border-green-500/50">
                                                <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                                                <span className="text-gray-200">{text.replace('✅', '').trim()}</span>
                                            </li>
                                        );
                                    }
                                    // Si empieza con ❌, usar estilo de error
                                    if (text.startsWith('❌')) {
                                        return (
                                            <li className="flex items-start gap-3 bg-red-500/10 p-4 rounded-sm border-l-2 border-red-500/50">
                                                <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                                                <span className="text-gray-200">{text.replace('❌', '').trim()}</span>
                                            </li>
                                        );
                                    }
                                    return <li className="pl-2">{children}</li>;
                                },
                                // Personalizar párrafos con mejor tipografía
                                p: ({ children }) => {
                                    const text = String(children);
                                    // Si es un párrafo que empieza con "En **", darle estilo de conclusión
                                    if (text.includes('En **Voltura Projects**') || text.includes('En **voltura projects**')) {
                                        return (
                                            <p className="text-xl font-semibold text-white bg-voltura-gold/10 p-6 rounded-sm border-l-4 border-voltura-gold my-8">
                                                {children}
                                            </p>
                                        );
                                    }
                                    return <p>{children}</p>;
                                },
                                // Personalizar blockquotes
                                blockquote: ({ children }) => (
                                    <blockquote className="relative">
                                        <div className="absolute -top-4 -left-4 text-6xl text-voltura-gold/20 font-serif">"</div>
                                        {children}
                                    </blockquote>
                                ),
                            }}
                        >
                            {article.content}
                        </ReactMarkdown>
                    </div>

                    {/* CTA intermedio - Después del contenido */}
                    <div className="my-16 p-8 bg-gradient-to-br from-voltura-gold/20 via-voltura-gold/10 to-transparent rounded-sm border border-voltura-gold/30">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="flex-1">
                                <h3 className="text-2xl font-serif text-white mb-3">
                                    ¿Te ha resultado útil este artículo?
                                </h3>
                                <p className="text-gray-300">
                                    Nuestro equipo de expertos puede ayudarte a hacer realidad tu proyecto
                                </p>
                            </div>
                            <Link
                                href="/#contacto"
                                className="bg-voltura-gold text-voltura-blue font-bold px-8 py-3 rounded-sm hover:brightness-110 transition-all uppercase tracking-wide whitespace-nowrap"
                            >
                                Solicitar Presupuesto
                            </Link>
                        </div>
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
                                        className="px-4 py-2 bg-white/5 text-gray-300 text-sm rounded-sm hover:bg-voltura-gold/20 hover:text-white transition-all cursor-pointer border border-white/10 hover:border-voltura-gold/50"
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
