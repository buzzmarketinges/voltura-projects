import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
    try {
        const media = await prisma.media.findMany({
            orderBy: { createdAt: 'desc' }
        })
        return NextResponse.json(media)
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
