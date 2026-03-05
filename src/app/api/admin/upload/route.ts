import { NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { prisma } from '@/lib/prisma'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { existsSync } from 'fs'

export async function POST(req: Request) {
    try {
        const formData = await req.formData()
        const file = formData.get('file') as File
        const customName = formData.get('name') as string
        const altText = formData.get('altText') as string

        if (!file) {
            return NextResponse.json({ error: 'Falta archivo' }, { status: 400 })
        }

        // Determine name
        const finalName = customName || file.name
        const type = file.type.startsWith('image/') ? 'image'
            : file.type.startsWith('video/') ? 'video'
                : 'icon'

        let url = ''

        // Si tiene token de Vercel Blob configurado
        if (process.env.BLOB_READ_WRITE_TOKEN) {
            const blob = await put(finalName, file, { access: 'public' })
            url = blob.url
        } else {
            // Local development mock (guardar en filesystem)
            const bytes = await file.arrayBuffer()
            const buffer = Buffer.from(bytes)

            // Guardar en public/uploads
            const uploadDir = path.join(process.cwd(), 'public', 'uploads')
            if (!existsSync(uploadDir)) {
                await mkdir(uploadDir, { recursive: true })
            }
            const safeName = finalName.replace(/[^a-zA-Z0-9.-]/g, '_')
            const filePath = path.join(uploadDir, safeName)
            await writeFile(filePath, buffer)
            url = `/uploads/${safeName}`
        }

        // Guardar metadata en BD
        const media = await prisma.media.create({
            data: {
                filename: finalName,
                url: url,
                altText: altText || finalName, // defaults to filename
                type: type,
            }
        })

        return NextResponse.json(media)
    } catch (error: any) {
        console.error('Error al subir:', error)
        return NextResponse.json({ error: 'Error al procesar archivo.' }, { status: 500 })
    }
}
