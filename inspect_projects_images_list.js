const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');

async function main() {
    const projects = await prisma.project.findMany();
    const urls = projects.map(p => ({
        id: p.id,
        slug: p.slug,
        slug_ca: p.slug_ca,
        images: p.images // JSON array of other images
    }));
    fs.writeFileSync('inspect_projects_images_list.json', JSON.stringify(urls, null, 2), 'utf8');
}

main().catch(console.error).finally(() => prisma.$disconnect());
