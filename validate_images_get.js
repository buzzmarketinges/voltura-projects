const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');

async function main() {
    const projects = await prisma.project.findMany();
    const broken = [];

    for (const project of projects) {
        if (project.mainImage) {
            try {
                // Use GET request, not HEAD
                const res = await fetch(project.mainImage, { method: 'GET' });
                if (res.status !== 200) {
                    broken.push({ 
                        slug: project.slug, 
                        mainImage: project.mainImage, 
                        status: res.status 
                    });
                }
            } catch (e) {
                broken.push({ slug: project.slug, mainImage: project.mainImage, error: e.message });
            }
        }
    }

    fs.writeFileSync('broken_images_get.json', JSON.stringify(broken, null, 2), 'utf8');
    console.log(`Scan completed. Found ${broken.length} broken images.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
