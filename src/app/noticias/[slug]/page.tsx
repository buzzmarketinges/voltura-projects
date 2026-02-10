import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { articles, getArticleBySlug } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Share2, CheckCircle, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { ShareButton } from "@/components/share-button";
import { ArticleCTAButton } from "@/components/article-cta-button";
import fs from "fs/promises";
import path from "path";

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

async function getArticleContent(slug: string, articleContent: string) {
    const filePath = path.join(process.cwd(), "src", "content", "articles", `${slug}.html`);
    try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        return { type: "html", content: fileContent };
    } catch (error) {
        return { type: "markdown", content: articleContent };
    }
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const { type, content } = await getArticleContent(slug, article.content);

    return (
        <main className="bg-voltura-blue text-slate-300 font-sans selection:bg-voltura-gold selection:text-white">
            <Navbar />

            {/* Immersive Hero Header (85vh) */}
            <header className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        priority
                        className="object-cover"
                        quality={90}
                    />
                    {/* Hero Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-voltura-blue/40 via-voltura-blue/80 to-voltura-blue pointer-events-none"></div>
                </div>

                {/* Back Button (Absolute Top) */}
                <div className="absolute top-24 left-0 right-0 z-20 px-6 hidden md:block">
                    <div className="max-w-5xl mx-auto">
                        <Link
                            href="/noticias"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-voltura-gold transition-colors text-sm uppercase tracking-widest backdrop-blur-md bg-black/20 px-4 py-2 rounded-full"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Volver al Blog
                        </Link>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
                    {/* Meta Tags */}
                    <div className="flex flex-wrap items-center gap-6 mb-8">
                        <span className="bg-voltura-gold text-voltura-blue px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] rounded-sm">
                            {article.category}
                        </span>
                        <div className="flex items-center text-slate-300 text-sm gap-6 font-medium">
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-voltura-gold" />
                                {new Date(article.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-voltura-gold" />
                                {article.readTime}
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight max-w-4xl drop-shadow-lg">
                        {article.title}
                    </h1>

                    {/* Intro / Excerpt in Hero */}
                    <p className="text-xl md:text-2xl text-slate-200 max-w-3xl font-light leading-relaxed mb-10 drop-shadow-md">
                        {article.excerpt}
                    </p>

                    {/* Author & Share Bar */}
                    <div className="flex flex-wrap items-center justify-between border-t border-white/10 pt-8 gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-voltura-gold/10 flex items-center justify-center text-voltura-gold font-serif font-bold overflow-hidden border border-voltura-gold/30">
                                VG
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Escrito por</p>
                                <p className="text-sm font-bold text-white">Equipo Voltura Projects</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <ShareButton title={article.title} excerpt={article.excerpt} />
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-20">
                {/* Featured Quote / Highlight */}
                <div className="relative border-l-4 border-voltura-gold pl-8 py-6 mb-20 bg-white/5 rounded-r-lg backdrop-blur-sm">
                    <p className="text-2xl font-serif italic text-slate-200 leading-relaxed">
                        "{article.excerpt}"
                    </p>
                </div>

                {/* Article Body */}
                <article className="prose prose-lg prose-invert max-w-none
                    prose-headings:font-serif prose-headings:text-white
                    prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:font-normal
                    prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-voltura-gold
                    prose-p:text-slate-300 prose-p:leading-loose prose-p:mb-8 prose-p:text-lg
                    prose-strong:text-white prose-strong:font-bold
                    prose-ul:my-10 prose-ul:space-y-4
                    prose-li:text-slate-300 prose-li:my-2
                    prose-blockquote:border-l-4 prose-blockquote:border-voltura-gold prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:text-slate-200 prose-blockquote:bg-transparent
                    prose-a:text-voltura-gold prose-a:no-underline hover:prose-a:underline
                    prose-hr:border-white/10 prose-hr:my-16
                    prose-img:rounded-lg prose-img:shadow-2xl prose-img:my-12
                    prose-table:w-full prose-table:my-12 prose-table:border-collapse
                    prose-th:text-voltura-gold prose-th:text-left prose-th:py-4 prose-th:border-b prose-th:border-white/20 prose-th:font-serif prose-th:text-xl
                    prose-td:py-4 prose-td:border-b prose-td:border-white/10 prose-td:text-slate-400
                ">
                    {type === "html" ? (
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    ) : (
                        <ReactMarkdown
                            components={{
                                // Custom List Items with Check Icon
                                li: ({ children }) => {
                                    const text = String(children);
                                    // Remove specific markers if they exist in markdown
                                    const cleanText = text.replace(/^✅\s*/, '').replace(/^❌\s*/, '');

                                    const isCheck = text.includes('✅') || !text.includes('❌');

                                    if (text.includes('✅')) {
                                        return (
                                            <li className="flex items-start gap-4 list-none pl-0">
                                                <CheckCircle className="w-6 h-6 text-voltura-gold flex-shrink-0 mt-1" />
                                                <span>{cleanText}</span>
                                            </li>
                                        );
                                    }
                                    return <li className="text-slate-400">{children}</li>;
                                },
                                // Custom Box for emphasis (using Blockquote standard or specific hack)
                                blockquote: ({ children }) => (
                                    <div className="my-12 p-8 bg-white/5 border border-white/5 rounded-xl">
                                        <blockquote className="border-none p-0 bg-transparent not-italic">
                                            {children}
                                        </blockquote>
                                    </div>
                                ),
                                // H3 styled as highlighted headers
                                h3: ({ children }) => (
                                    <h3 className="text-2xl text-voltura-gold font-serif mt-12 mb-4 block">
                                        {children}
                                    </h3>
                                )
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    )}
                </article>

                {/* Newsletter / CTA Box */}
                <section className="mt-24 p-12 bg-voltura-gold/5 border border-voltura-gold/20 rounded-2xl flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1 space-y-4 text-center md:text-left">
                        <h3 className="text-3xl font-serif font-bold text-white">
                            ¿Planeas un proyecto pronto?
                        </h3>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Nuestro equipo de especialistas está listo para asesorarte con las mejores soluciones de rehabilitación y eficiencia.
                        </p>
                    </div>
                    <ArticleCTAButton />
                </section>
            </main>

            <Footer />
        </main>
    );
}
