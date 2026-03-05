import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { articles, getArticleBySlug } from "@/data/articles";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, CheckCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { ShareButton } from "@/components/share-button";
import { ArticleCTAButton } from "@/components/article-cta-button";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    try {
        const { slug } = await params;
        const dbPost = await prisma.post.findUnique({
            where: { slug }
        }).catch(() => null);

        if (dbPost && dbPost.isPublished) {
            return {
                title: String(dbPost.metaTitle || `${dbPost.title} | Voltura Projects`),
                description: String(dbPost.metaDescription || ""),
                alternates: { canonical: `https://volturaprojects.es/noticias/${slug}` },
                openGraph: {
                    title: String(dbPost.title),
                    description: String(dbPost.metaDescription || ""),
                    images: dbPost.mainImage ? [String(dbPost.mainImage)] : [],
                    type: "article",
                    publishedTime: dbPost.createdAt instanceof Date ? dbPost.createdAt.toISOString() : undefined,
                },
            };
        }

        const article = getArticleBySlug(slug);
        if (article) {
            return {
                title: `${article.title} | Voltura Projects`,
                description: article.excerpt,
                alternates: { canonical: `https://volturaprojects.es/noticias/${slug}` },
                openGraph: {
                    title: article.title,
                    description: article.excerpt,
                    images: [article.image],
                    type: "article",
                    publishedTime: article.date,
                    authors: [article.author],
                },
            };
        }
    } catch (e) {
        console.error("Metadata error:", e);
    }

    return {
        title: "Noticias | Voltura Projects",
    };
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    let articleData: any = null;
    let isHtml = true;
    let content = "";
    let faqs: any[] = [];

    try {
        const dbPost = await prisma.post.findUnique({
            where: { slug },
            include: { faqs: true }
        }).catch(() => null);

        if (dbPost && dbPost.isPublished) {
            let cats = ["Reformas"];
            try {
                if (dbPost.categories && typeof dbPost.categories === 'string' && dbPost.categories !== "[]") {
                    if (dbPost.categories.startsWith('[')) {
                        const parsed = JSON.parse(dbPost.categories);
                        cats = Array.isArray(parsed) ? parsed : [parsed];
                    } else {
                        cats = [dbPost.categories];
                    }
                }
            } catch (e) { }

            articleData = {
                title: String(dbPost.title),
                category: String(cats[0] || "Reformas"),
                date: dbPost.createdAt instanceof Date ? dbPost.createdAt.toISOString() : new Date().toISOString(),
                readTime: "5 min lectura",
                excerpt: String(dbPost.metaDescription || "Noticia destacada sobre nuestras obras e instalaciones."),
                image: String(dbPost.mainImage || "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"),
            };
            content = String(dbPost.contentHtml || dbPost.contentText || "");
            faqs = (dbPost.faqs || []).map(f => ({
                question: String(f.question),
                answer: String(f.answer)
            }));
            isHtml = !!dbPost.contentHtml;
        }
    } catch (e) {
        console.error("DB Fetch Error:", e);
    }

    // Fallback to local
    if (!articleData) {
        const local = getArticleBySlug(slug);
        if (!local) notFound();

        articleData = local;
        content = local.content;
        isHtml = false; // articles in static data are usually markdown or handled as such
    }

    const faqSchema = faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    return (
        <main className="bg-voltura-blue text-slate-300 font-sans selection:bg-voltura-gold selection:text-white">
            <Navbar />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            <header className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={articleData.image}
                        alt={articleData.title}
                        fill
                        priority
                        className="object-cover"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-voltura-blue/60 via-voltura-blue/40 to-voltura-blue pointer-events-none"></div>
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-24 pb-10 flex flex-col items-start">
                    <div className="mb-8">
                        <Link
                            href="/noticias"
                            className="inline-flex items-center gap-2 text-white/90 hover:text-voltura-gold transition-colors text-xs font-bold uppercase tracking-widest bg-black/40 backdrop-blur-md px-5 py-3 rounded-full border border-white/10 hover:border-voltura-gold/50"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Volver al Blog
                        </Link>
                    </div>

                    <div className="w-full">
                        <div className="flex flex-wrap items-center gap-6 mb-6">
                            <span className="bg-voltura-gold text-voltura-blue px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] rounded-sm shadow-lg shadow-black/20">
                                {articleData.category}
                            </span>
                            <div className="flex items-center text-slate-200 text-sm gap-6 font-medium bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/5">
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-voltura-gold" />
                                    {new Date(articleData.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-voltura-gold" />
                                    {articleData.readTime || "5 min"}
                                </span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl drop-shadow-xl">
                            {articleData.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-between border-t border-white/10 pt-6 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-voltura-gold/10 flex items-center justify-center text-voltura-gold font-serif font-bold overflow-hidden border border-voltura-gold/30">
                                    VG
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Escrito por</p>
                                    <p className="text-sm font-bold text-white">Equipo Voltura Projects</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <ShareButton title={articleData.title} excerpt={articleData.excerpt} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-20">
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
                    {isHtml ? (
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    ) : (
                        <ReactMarkdown
                            components={{
                                li: ({ children }) => {
                                    const text = String(children);
                                    const cleanText = text.replace(/^✅\s*/, '').replace(/^❌\s*/, '');
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
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    )}
                </article>

                {faqs.length > 0 && (
                    <section className="mt-16 pt-10 border-t border-white/10">
                        <h2 className="text-3xl font-serif text-white mb-8">
                            Preguntas Frecuentes
                        </h2>
                        <div className="space-y-6">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/5 rounded-xl p-6 transition-colors hover:bg-white/10">
                                    <h3 className="text-xl font-bold text-voltura-gold mb-3 font-sans">
                                        {faq.question}
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed font-sans">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

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
