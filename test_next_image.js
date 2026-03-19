const fs = require('fs');

async function main() {
    const urls = [
        "http://localhost:3000/_next/image?url=https://images.unsplash.com/photo-1584622750111-9f67bfa8c6c8?q=80&w=2674&auto=format&fit=crop&w=3840&q=75",
        "http://localhost:3000/_next/image?url=https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop&w=3840&q=75",
        "http://localhost:3000/_next/image?url=https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2592&auto=format&fit=crop&w=3840&q=75"
    ];

    const results = [];
    for (const url of urls) {
        try {
            const res = await fetch(url, { method: 'GET' });
            results.push({ url, status: res.status });
        } catch (e) {
            results.push({ url, error: e.message });
        }
    }
    fs.writeFileSync('next_image_test.json', JSON.stringify(results, null, 2), 'utf8');
}

main().catch(console.error);
