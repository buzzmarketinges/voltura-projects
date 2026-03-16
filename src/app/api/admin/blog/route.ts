import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { faqs, ...postData } = body

        if (postData.createdAt) {
            postData.createdAt = new Date(postData.createdAt)
        }

        const newPost = await prisma.post.create({
            data: {
                title: postData.title,
                title_ca: postData.title_ca || '',
                slug: postData.slug,
                slug_ca: postData.slug_ca || '',
                metaTitle: postData.metaTitle,
                metaTitle_ca: postData.metaTitle_ca || '',
                metaDescription: postData.metaDescription,
                metaDescription_ca: postData.metaDescription_ca || '',
                categories: postData.categories,
                mainImage: postData.mainImage,
                contentHtml: postData.contentHtml,
                contentHtml_ca: postData.contentHtml_ca || '',
                contentText: postData.contentText,
                contentText_ca: postData.contentText_ca || '',
                isPublished: postData.isPublished,
                createdAt: postData.createdAt || undefined,
                faqs: {
                    create: faqs.map((f: any, i: number) => ({
                        question: f.question,
                        question_ca: f.question_ca || '',
                        answer: f.answer,
                        answer_ca: f.answer_ca || '',
                        order: i
                    }))
                }
            }
        })
        return NextResponse.json(newPost)
    } catch (err: any) {

        if (err.code === 'P2002') {
            return NextResponse.json({ error: 'Ya existe un artículo con esta misma URL (Slug). Por favor, cambia el título o usa el botón de editar.' }, { status: 400 })
        }
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json()
        const { faqs, id, ...postData } = body

        if (postData.createdAt) {
            postData.createdAt = new Date(postData.createdAt)
        }

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
                        question_ca: f.question_ca || '',
                        answer: f.answer,
                        answer_ca: f.answer_ca || '',
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
