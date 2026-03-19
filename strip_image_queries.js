const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const projects = await prisma.project.findMany();
    let updatedCount = 0;

    for (const project of projects) {
        let changed = false;
        let updatedMain = project.mainImage;
        let updatedGallery = project.gallery;

        // Clean mainImage
        if (updatedMain && updatedMain.includes('unsplash.com') && updatedMain.includes('?')) {
            updatedMain = updatedMain.split('?')[0];
            changed = true;
        }

        // Clean Gallery List
        if (updatedGallery) {
            try {
                const arr = JSON.parse(updatedGallery);
                let galleryChanged = false;
                const cleanedArr = arr.map(img => {
                    if (img && img.includes('unsplash.com') && img.includes('?')) {
                        galleryChanged = true;
                        return img.split('?')[0];
                    }
                    return img;
                });
                
                if (galleryChanged) {
                    updatedGallery = JSON.stringify(cleanedArr);
                    changed = true;
                }
            } catch (e) {
                console.error(`Error parsing gallery for ${project.slug}`);
            }
        }

        if (changed) {
            await prisma.project.update({
                where: { id: project.id },
                data: {
                    mainImage: updatedMain,
                    gallery: updatedGallery
                }
            });
            console.log(`Cleaned image queries for project: ${project.slug}`);
            updatedCount++;
        }
    }

    // Also clean Posts just in case
    const posts = await prisma.post.findMany();
    let postsCount = 0;
    for (const post of posts) {
        if (post.mainImage && post.mainImage.includes('unsplash.com') && post.mainImage.includes('?')) {
            const cleanedMain = post.mainImage.split('?')[0];
            await prisma.post.update({
                where: { id: post.id },
                data: { mainImage: cleanedMain }
            });
            postsCount++;
        }
    }

    console.log(`Finished. Cleaned queries for ${updatedCount} projects and ${postsCount} posts.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
