const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const prisma = new PrismaClient();

async function main() {
    const post = await prisma.post.findFirst({
        where: {
            slug: 'ayudas-y-subvenciones-para-instalaciones-aerotermia-en-cataluna'
        }
    });
    fs.writeFileSync('inspect.json', JSON.stringify(post, null, 2), 'utf8');
}

main().catch(console.error).finally(() => prisma.$disconnect());
