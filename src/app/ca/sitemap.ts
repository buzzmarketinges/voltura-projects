import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { prisma } from '@/lib/prisma';

export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://volturaprojects.es';

    // Static Catalan Pages (translated routes)
    const staticPages = [
        {
            url: `${baseUrl}/ca`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/ca/projectes`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/ca/noticies`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/ca/reformes-integrals`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/ca/reformes-banys`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/ca/reformes-cuines`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/ca/installacions-electriques`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/ca/installacions-fontaneria`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/ca/installacions-climatitzacio`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/ca/installacions-aerotermia`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/ca/energia-fotovoltaica`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/ca/treballs-verticals`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/ca/politica-privacidad`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/ca/politica-cookies`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
    ];

    // 1. Dynamic projects from /data/projects
    const projectPagesStatic = projects.map((project) => ({
        url: `${baseUrl}/ca/projectes/${project.slug}`, // Uses the standard slug if static items haven't slug_ca setup
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // 2. Dynamic projects from Database Project Table
    let dbProjects: any[] = [];
    try {
        dbProjects = await prisma.project.findMany({
            select: { slug: true, slug_ca: true, updatedAt: true, createdAt: true }
        });
    } catch (e) {
        console.error("Error fetching projects for sitemap ca:", e);
    }

    const projectPagesDb = dbProjects.map((project) => ({
        url: `${baseUrl}/ca/projectes/${project.slug_ca || project.slug}`,
        lastModified: project.updatedAt || project.createdAt,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // 3. Dynamic articles from Database Post Table
    let dbArticles: any[] = [];
    try {
        dbArticles = await prisma.post.findMany({
            where: {
                isPublished: true,
                createdAt: { lte: new Date() }
            },
            select: { slug: true, slug_ca: true, updatedAt: true, createdAt: true }
        });
    } catch (e) {
        console.error("Error fetching articles for sitemap ca:", e);
    }

    const articlePages = dbArticles.map((article) => ({
        url: `${baseUrl}/ca/noticies/${article.slug_ca || article.slug}`,
        lastModified: article.updatedAt || article.createdAt,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Combine everything
    return [...staticPages, ...projectPagesStatic, ...projectPagesDb, ...articlePages];
}
