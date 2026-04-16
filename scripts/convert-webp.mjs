import sharp from 'sharp';
import { readdirSync, statSync, renameSync } from 'fs';
import { join, extname, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMG_DIR = join(__dirname, '../public/Img');

function walk(dir) {
  const entries = readdirSync(dir);
  let files = [];
  for (const e of entries) {
    const full = join(dir, e);
    if (statSync(full).isDirectory()) files = files.concat(walk(full));
    else files.push(full);
  }
  return files;
}

const images = walk(IMG_DIR).filter(f => /\.(png|jpe?g)$/i.test(f));

for (const src of images) {
  const ext = extname(src);
  const dest = src.replace(/\.(png|jpe?g)$/i, '.webp');
  const before = statSync(src).size;
  await sharp(src).webp({ quality: 82 }).toFile(dest);
  const after = statSync(dest).size;
  const pct = Math.round((1 - after / before) * 100);
  console.log(`${basename(src)} → ${basename(dest)}  ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB  (-${pct}%)`);
}

console.log('\nDone. Verifica los .webp y luego borra los originales manualmente si todo está bien.');
