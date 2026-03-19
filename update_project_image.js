const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Valid unsplash ID for office electrics/work: 
    // https://images.unsplash.com/photo-1497366216548-37526070297c (Modern office grid)
    const newImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2670&auto=format&fit=crop";

    // Standard high quality check
    const res = await fetch(newImage, { method: 'HEAD' });
    if (res.status === 200) {
        await prisma.project.update({
            where: { id: "cmmsy9n4o0006v7j86jpihpop" }, // renovacion-electrica-oficinas
            data: { mainImage: newImage }
        });
        console.log("Updated renovacion-electrica-oficinas to use a valid Modern Office image.");
    } else {
        console.error("The fallback unsplash image fails validation with Status:", res.status);
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
