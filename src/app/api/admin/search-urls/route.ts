import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { projects } from '@/data/projects';

const staticPages = [
    { title: 'Inicio', url: '/', type: 'Página' },
    { title: 'Proyectos', url: '/proyectos', type: 'Página' },
    { title: 'Noticias', url: '/noticias', type: 'Página' },
    { title: 'Reformas Integrales', url: '/reformas-integrales', type: 'Servicio' },
    { title: 'Reformas de Baños', url: '/reformas-banos', type: 'Servicio' },
    { title: 'Reformas de Cocinas', url: '/reformas-cocinas', type: 'Servicio' },
    { title: 'Instalaciones Eléctricas', url: '/instalaciones-electricas', type: 'Servicio' },
    { title: 'Instalaciones de Fontanería', url: '/instalaciones-fontaneria', type: 'Servicio' },
    { title: 'Instalaciones de Climatización', url: '/instalaciones-climatizacion', type: 'Servicio' },
    { title: 'Instalaciones de Aerotermia', url: '/instalaciones-aerotermia', type: 'Servicio' },
    { title: 'Energía Fotovoltaica', url: '/energia-fotovoltaica', type: 'Servicio' },
    { title: 'Trabajos Verticales', url: '/trabajos-verticales', type: 'Servicio' }
];

export async function GET() {
    try {
        // Fetch posts from database
        const dbPosts = await prisma.post.findMany({
            where: { isPublished: true },
            select: { title: true, slug: true },
            orderBy: { createdAt: 'desc' }
        });

        const articleUrls = dbPosts.map(post => ({
            title: post.title,
            url: `/noticias/${post.slug}`,
            type: 'Noticia'
        }));

        const projectUrls = projects.map(proj => ({
            title: proj.title,
            url: `/proyectos/${proj.slug}`,
            type: 'Proyecto'
        }));

        const allUrls = [...staticPages, ...projectUrls, ...articleUrls];

        return NextResponse.json(allUrls);
    } catch (err) {
        return NextResponse.json({ error: 'Failed to fetch URLs' }, { status: 500 });
    }
}
