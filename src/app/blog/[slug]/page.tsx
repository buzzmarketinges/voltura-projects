import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params
    const post = await prisma.post.findUnique({
        where: { slug: resolvedParams.slug }
    })

    if (!post) {
        return {
            title: 'Not Found',
            alternates: { canonical: `/blog/${resolvedParams.slug}` }
        }
    }

    return {
        title: post.metaTitle || post.title,
        description: post.metaDescription,
        alternates: { canonical: `/blog/${resolvedParams.slug}` }
        // Add open graph, twitter, etc.
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params
    const post = await prisma.post.findUnique({
        where: { slug: resolvedParams.slug },
        include: { faqs: true }
    })

    if (!post || !post.isPublished) {
        notFound()
    }

    // Generar JSON-LD para las FAQs para SEO
    const faqSchema = post.faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null

    return (
        <article className="max-w-4xl mx-auto px-4 py-12 px-6 lg:px-8">
            {/* Schema Injection */}
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            {post.mainImage && (
                <div className="mb-8 overflow-hidden rounded-2xl shadow-lg relative aspect-video">
                    <img src={post.mainImage} alt={post.title} className="w-full h-full object-cover" />
                </div>
            )}

            <header className="mb-10 lg:text-center">
                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 mb-4 font-sans">
                    {post.title}
                </h1>
                <div className="text-sm text-neutral-500 font-medium">
                    Publicado el {new Date(post.createdAt).toLocaleDateString('es-ES', {
                        year: 'numeric', month: 'long', day: 'numeric'
                    })}
                </div>
            </header>

            {/* Content Render */}
            <div
                className="prose prose-lg prose-blue max-w-none mb-16 text-neutral-800"
                dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
            />

            {/* FAQS Render */}
            {post.faqs.length > 0 && (
                <section className="mt-16 pt-10 border-t border-neutral-200">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-8 font-sans">
                        Preguntas Frecuentes
                    </h2>
                    <div className="space-y-6">
                        {post.faqs.map((faq, idx) => (
                            <div key={idx} className="bg-neutral-50 rounded-xl p-6 shadow-sm border border-neutral-100 transition-colors hover:bg-neutral-100">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2 font-sans">
                                    {faq.question}
                                </h3>
                                <p className="text-neutral-700 leading-relaxed font-sans">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </article>
    )
}
