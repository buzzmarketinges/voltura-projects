import PostEditor from '@/components/admin/PostEditor'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params
    const post = await prisma.post.findUnique({
        where: { id: resolvedParams.id },
        include: { faqs: true }
    })

    if (!post) {
        notFound()
    }

    return <PostEditor post={post} />
}
