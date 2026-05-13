const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, 'src'), { recursive: true });

for (const file of ['index.html', 'src/main.js', 'src/styles.css']) {
  const source = path.join(root, file);
  const destination = path.join(dist, file);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

console.log('Built static site to dist/');
