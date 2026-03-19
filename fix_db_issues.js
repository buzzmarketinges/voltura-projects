const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function fixPostLinks() {
    console.log("--- Fixing Post Links ---");
    const posts = await prisma.post.findMany();
    let updatedCount = 0;

    for (const post of posts) {
        let updatedHtml = post.contentHtml;
        let updatedHtmlCa = post.contentHtml_ca;

        // Malformed href pattern: href="[URL](URL)"
        // Regex to match: href="\[([^\]]+)\]\([^\)]+\)"
        const hrefRegex = /href="\[([^\]]+)\]\([^\)]+\)"/g;

        if (updatedHtml && hrefRegex.test(updatedHtml)) {
            updatedHtml = updatedHtml.replace(hrefRegex, 'href="$1"');
        }

        if (updatedHtmlCa && hrefRegex.test(updatedHtmlCa)) {
            updatedHtmlCa = updatedHtmlCa.replace(hrefRegex, 'href="$1"');
        }

        if (updatedHtml !== post.contentHtml || updatedHtmlCa !== post.contentHtml_ca) {
            await prisma.post.update({
                where: { id: post.id },
                data: {
                    contentHtml: updatedHtml,
                    contentHtml_ca: updatedHtmlCa
                }
            });
            console.log(`Updated post: ${post.slug}`);
            updatedCount++;
        }
    }
    console.log(`Total posts updated: ${updatedCount}`);
}

async function inspectProjectImages() {
    console.log("\n--- Inspecting Project Images ---");
    const projects = await prisma.project.findMany();
    let fixCount = 0;

    for (const project of projects) {
        let changed = false;
        let updatedMain = project.mainImage;
        let updatedImages = project.images;

        // Check if mainImage has broken un-encoded plus or similar
        // Example: photo-1497215728101-856+4ea42174
        if (updatedMain && updatedMain.includes('856+4ea42174')) {
            updatedMain = updatedMain.replace('856+4ea42174', '8564ea42174');
            changed = true;
        }

        if (updatedMain && updatedMain.includes('584622750111-9f67bfa8c6c8')) {
            // Check in list: 584622750111-9f67bfa8c6c8?
            // Nothing explicitly broken in that view besides normal ID string.
        }

        // If there's a + inside Unsplash URL path segment (not query parameter), it's probably wrong
        if (updatedMain && updatedMain.includes('unsplash.com')) {
            const urlParts = updatedMain.split('?');
            if (urlParts[0].includes('+')) {
                console.log(`Found invalid + in main image for ${project.slug}: ${urlParts[0]}`);
                updatedMain = updatedMain.replace('+', ''); // Replace the erroneous +
                changed = true;
            }
        }

        if (changed) {
            await prisma.project.update({
                where: { id: project.id },
                data: { mainImage: updatedMain }
            });
            console.log(`Updated project image for: ${project.slug}`);
            fixCount++;
        }
    }
    console.log(`Total projects fixed: ${fixCount}`);
}

async function main() {
    await fixPostLinks();
    await inspectProjectImages();
}

main().catch(console.error).finally(() => prisma.$disconnect());
