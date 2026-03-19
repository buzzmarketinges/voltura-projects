const { execSync } = require('child_process');
const fs = require('fs');

try {
    const out = execSync('npx next build', { stdio: 'pipe' });
    fs.writeFileSync('build_log.txt', out.toString(), 'utf8');
} catch (e) {
    fs.writeFileSync('build_log.txt', (e.stdout ? e.stdout.toString() : '') + '\n' + (e.stderr ? e.stderr.toString() : ''), 'utf8');
}
