import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { prisma } from '@/lib/prisma';

export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Use environment variable or default to production URL without www
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://volturaprojects.es';

    // Static pages
    const staticPages = [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/proyectos`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/reformas-integrales`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/reformas-banos`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/reformas-cocinas`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/instalaciones-electricas`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/instalaciones-fontaneria`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/instalaciones-climatizacion`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/instalaciones-aerotermia`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/energia-fotovoltaica`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/trabajos-verticales`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/politica-privacidad`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/politica-cookies`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terminos-condiciones`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
    ];

    // Dynamic project pages
    const projectPages = projects.map((project) => ({
        url: `${baseUrl}/proyectos/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // Noticias landing page
    const newsLandingPage = {
        url: `${baseUrl}/noticias`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    };

    // Dynamic article pages from Database
    let dbArticles: any[] = [];
    try {
        dbArticles = await prisma.post.findMany({
            where: {
                isPublished: true,
                createdAt: { lte: new Date() }
            },
            select: { slug: true, updatedAt: true, createdAt: true }
        });
    } catch (e) {
        console.error("Error fetching articles for sitemap:", e);
    }

    const articlePages = dbArticles.map((article) => ({
        url: `${baseUrl}/noticias/${article.slug}`,
        lastModified: article.updatedAt || article.createdAt,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...projectPages, newsLandingPage, ...articlePages];
}
