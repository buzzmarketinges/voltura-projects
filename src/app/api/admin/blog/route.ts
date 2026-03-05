import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { faqs, ...postData } = body

        const newPost = await prisma.post.create({
            data: {
                title: postData.title,
                slug: postData.slug,
                metaTitle: postData.metaTitle,
                metaDescription: postData.metaDescription,
                categories: postData.categories,
                mainImage: postData.mainImage,
                contentHtml: postData.contentHtml,
                contentText: postData.contentText,
                isPublished: postData.isPublished,
                faqs: {
                    create: faqs.map((f: any, i: number) => ({
                        question: f.question,
                        answer: f.answer,
                        order: i
                    }))
                }
            }
        })

        return NextResponse.json(newPost)
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json()
        const { faqs, id, ...postData } = body

        if (!id) {
            return NextResponse.json({ error: 'Falta ID' }, { status: 400 })
        }

        // Delete existing FAQs and recreate to keep it simple
        await prisma.faq.deleteMany({ where: { postId: id } })

        const updatedPost = await prisma.post.update({
            where: { id },
            data: {
                ...postData,
                categories: postData.categories,
                faqs: {
                    create: faqs.map((f: any, i: number) => ({
                        question: f.question,
                        answer: f.answer,
                        order: i
                    }))
                }
            }
        })

        return NextResponse.json(updatedPost)
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}

export async function DELETE(req: Request) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    if (!id) {
        return NextResponse.json({ error: 'Falta ID' }, { status: 400 })
    }

    try {
        // En base de datos SQLite con provider prisma, a veces cascade delete da problemas si no está explícito en schema.
        // Lo borramos manualmente por si acaso
        await prisma.faq.deleteMany({ where: { postId: id } })
        await prisma.post.delete({ where: { id } })

        return NextResponse.json({ success: true })
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}
