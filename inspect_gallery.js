const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');

async function main() {
    const projects = await prisma.project.findMany();
    const urls = [];

    for (const project of projects) {
        if (project.gallery) {
            try {
                const arr = JSON.parse(project.gallery);
                for (const img of arr) {
                    urls.push({
                        slug: project.slug,
                        galleryUrl: img
                    });
                }
            } catch (e) {
                console.error(`Error parsing gallery for ${project.slug}`);
            }
        }
    }

    fs.writeFileSync('inspect_gallery_urls.json', JSON.stringify(urls, null, 2), 'utf8');
    console.log(`Inspected ${urls.length} gallery images total.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
