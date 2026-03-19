const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');

async function main() {
    const projects = await prisma.project.findMany();
    const broken = [];

    for (const project of projects) {
        if (project.mainImage) {
            try {
                const res = await fetch(project.mainImage, { method: 'HEAD' });
                if (res.status !== 200) {
                    broken.push({ id: project.id, slug: project.slug, mainImage: project.mainImage, type: 'project', status: res.status });
                }
            } catch (e) {
                broken.push({ id: project.id, slug: project.slug, mainImage: project.mainImage, type: 'project', error: e.message });
            }
        }
    }

    const posts = await prisma.post.findMany();
    for (const post of posts) {
        if (post.mainImage) {
            try {
                const res = await fetch(post.mainImage, { method: 'HEAD' });
                if (res.status !== 200) {
                    broken.push({ id: post.id, slug: post.slug, mainImage: post.mainImage, type: 'post', status: res.status });
                }
            } catch (e) {
                broken.push({ id: post.id, slug: post.slug, mainImage: post.mainImage, type: 'post', error: e.message });
            }
        }
    }

    fs.writeFileSync('broken_images.json', JSON.stringify(broken, null, 2), 'utf8');
}

main().catch(console.error).finally(() => prisma.$disconnect());
