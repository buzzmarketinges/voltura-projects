const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const prisma = new PrismaClient();

async function main() {
    const projects = await prisma.project.findMany();
    const urls = projects.map(p => ({
        id: p.id,
        slug: p.slug,
        slug_ca: p.slug_ca,
        mainImage: p.mainImage
    }));
    fs.writeFileSync('inspect_projects_images.json', JSON.stringify(urls, null, 2), 'utf8');
}

main().catch(console.error).finally(() => prisma.$disconnect());
