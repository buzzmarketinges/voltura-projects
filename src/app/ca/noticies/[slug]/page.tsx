import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { articles, getArticleBySlug } from "@/data/articles";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
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
        const dbPost = await prisma.post.findFirst({
            where: { slug_ca: slug }
        }).catch(() => null);

        if (dbPost && dbPost.isPublished) {
            const rawTitle = dbPost.metaTitle_ca || dbPost.title_ca || `${dbPost.title}`;
            const metaTitle = String(rawTitle).includes('Voltura Projects') ? String(rawTitle) : `${rawTitle} | Voltura Projects`;
            const description = dbPost.metaDescription_ca || dbPost.metaDescription || "";
            return {
                title: metaTitle,
                description: String(description),
                alternates: { canonical: `https://volturaprojects.es/ca/noticies/${slug}` },
            };
        }

        const article = getArticleBySlug(slug);
        if (article) {
            return {
                title: `${article.title} | Voltura Projects`,
                description: article.excerpt,
                alternates: { canonical: `https://volturaprojects.es/ca/noticies/${slug}` },
            };
        }
    } catch (e) {
        console.error("Metadata error:", e);
    }
    return { title: "Article | Voltura Projects" };
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    let articleData: any = null;
    let isHtml = true;
    let content = "";
    let faqs: any[] = [];

    let dbPost: any = null;

    try {
        dbPost = await prisma.post.findFirst({
            where: { slug_ca: slug },
            include: { faqs: true }
        }).catch(() => null);

        if (dbPost && dbPost.isPublished) {
            let cats = ["Reformes"];
            const categoriesSource = dbPost.categories_ca || dbPost.categories;
            try {
                if (categoriesSource && typeof categoriesSource === 'string' && categoriesSource !== "[]") {
                    if (categoriesSource.startsWith('[')) {
                        const parsed = JSON.parse(categoriesSource);
                        cats = Array.isArray(parsed) ? parsed : [parsed];
                    } else {
                        cats = [categoriesSource];
                    }
                }
            } catch (e) { }

            const title = dbPost.title_ca || dbPost.title;
            const excerpt = dbPost.metaDescription_ca || dbPost.metaDescription || "Notícia destacada.";

            articleData = {
                title: String(title),
                category: String(cats[0] || "Reformes"),
                date: dbPost.createdAt instanceof Date ? dbPost.createdAt.toISOString() : new Date().toISOString(),
                readTime: "5 min",
                excerpt: String(excerpt),
                image: String(dbPost.mainImage || "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"),
            };
            content = String(dbPost.contentHtml_ca || dbPost.contentHtml || dbPost.contentText_ca || dbPost.contentText || "");
            
            faqs = (dbPost.faqs || []).map((f: any) => ({
                question: String(f.question_ca || f.question),
                answer: String(f.answer_ca || f.answer)
            }));
            isHtml = !!(dbPost.contentHtml_ca || dbPost.contentHtml);
        }
    } catch (e) {
        console.error("Critical Error in ArticlePage:", e);
    }

    if (!articleData) {
        const local = getArticleBySlug(slug);
        if (!local) notFound();
        articleData = local;
        content = local.content;
        isHtml = false;
    }

    const switchPath = dbPost ? `/noticias/${dbPost.slug}` : undefined;

    return (
        <main className="bg-voltura-blue text-slate-300 font-sans selection:bg-voltura-gold selection:text-white min-h-screen">
            <Navbar switchLanguagePath={switchPath} />

            <header className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden pt-32">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={articleData.image}
                        alt={articleData.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-voltura-blue/60 via-voltura-blue/40 to-voltura-blue"></div>
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-12">
                    <Link href="/ca/noticies" className="inline-flex items-center gap-2 text-voltura-gold hover:text-white transition-colors mb-6 text-sm font-bold uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" /> Tornar al Blog
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="bg-voltura-gold text-voltura-blue px-3 py-1 text-xs font-bold uppercase tracking-wider">
                            {articleData.category}
                        </span>
                        <span className="text-sm font-medium flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-voltura-gold" />
                            {new Date(articleData.date).toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl">
                        {articleData.title}
                    </h1>

                    <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-voltura-gold flex items-center justify-center text-voltura-blue font-bold">V</div>
                            <span className="text-sm font-bold text-white">Equip Voltura</span>
                        </div>
                        <ShareButton title={articleData.title} excerpt={articleData.excerpt} />
                    </div>
                </div>
            </header>

            <section className="max-w-4xl mx-auto px-6 py-20">
                <div className="prose prose-lg prose-invert max-w-none">
                    {isHtml ? (
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    ) : (
                        <ReactMarkdown>{content}</ReactMarkdown>
                    )}
                </div>

                {faqs.length > 0 && (
                    <div className="mt-20 pt-10 border-t border-white/10">
                        <h2 className="text-3xl font-serif text-white mb-8">Preguntes Freqüents</h2>
                        <div className="space-y-6">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-white/5 p-6 rounded-lg">
                                    <h3 className="text-voltura-gold font-bold mb-2">{faq.question}</h3>
                                    <p className="text-gray-300">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mt-20 p-10 bg-voltura-slate border border-white/5 rounded-lg text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-2xl font-serif text-white mb-2">¿Necessites pressupost?</h3>
                        <p className="text-gray-400">Consulta'ns sense compromís sobre el teu projecte.</p>
                    </div>
                    <ArticleCTAButton />
                </div>
            </section>

            <Footer />
        </main>
    );
}
