import sharp from "sharp";
import { glob } from "glob";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const TARGET_KB = 100;
const MIN_QUALITY = 30;
const INITIAL_QUALITY = 82;

const PUBLIC_PATTERNS = ["public/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}"];
const SRC_PATTERNS = ["src/assets/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}"];

async function compressInPlace(filePath, ext) {
  const originalSize = fs.statSync(filePath).size;
  let buffer;
  let quality = INITIAL_QUALITY;

  for (quality = INITIAL_QUALITY; quality >= MIN_QUALITY; quality -= 8) {
    if (ext === "png") {
      buffer = await sharp(filePath)
        .png({ quality, compressionLevel: 9, effort: 10 })
        .toBuffer();
    } else {
      buffer = await sharp(filePath)
        .jpeg({ quality, mozjpeg: true })
        .toBuffer();
    }
    if (buffer.length <= TARGET_KB * 1024) break;
  }

  await fs.promises.writeFile(filePath, buffer);

  const newSize = buffer.length;
  const saved = ((originalSize - newSize) / 1024).toFixed(0);
  const newKB = (newSize / 1024).toFixed(0);
  const flag = newSize > TARGET_KB * 1024 ? " ⚠ (>100KB)" : "";

  console.log(
    `  ${path.relative(ROOT, filePath).padEnd(55)} ${(originalSize / 1024).toFixed(0).padStart(6)}KB → ${newKB.padStart(5)}KB  q${quality}${flag}`
  );
  return originalSize - newSize;
}

async function compressToWebP(filePath) {
  const originalSize = fs.statSync(filePath).size;
  const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  let buffer;
  let quality = INITIAL_QUALITY;

  for (quality = INITIAL_QUALITY; quality >= MIN_QUALITY; quality -= 8) {
    buffer = await sharp(filePath).webp({ quality, effort: 6 }).toBuffer();
    if (buffer.length <= TARGET_KB * 1024) break;
  }

  await fs.promises.writeFile(webpPath, buffer);

  const newKB = (buffer.length / 1024).toFixed(0);
  const flag = buffer.length > TARGET_KB * 1024 ? " ⚠ (>100KB)" : "";

  console.log(
    `  ${path.relative(ROOT, webpPath).padEnd(55)} ${(originalSize / 1024).toFixed(0).padStart(6)}KB → ${newKB.padStart(5)}KB  q${quality} [webp]${flag}`
  );
  return originalSize - buffer.length;
}

async function run() {
  console.log("\n=== Optimizando imágenes en public/ (in-place) ===\n");
  const publicFiles = await glob(PUBLIC_PATTERNS, { cwd: ROOT });
  let totalSaved = 0;
  for (const f of publicFiles) {
    const ext = path.extname(f).replace(".", "").toLowerCase();
    totalSaved += await compressInPlace(path.join(ROOT, f), ext);
  }

  console.log("\n=== Generando .webp en src/assets/ ===\n");
  const srcFiles = await glob(SRC_PATTERNS, { cwd: ROOT });
  for (const f of srcFiles) {
    totalSaved += await compressToWebP(path.join(ROOT, f));
  }

  console.log(`\n✓ Total ahorrado: ${(totalSaved / 1024 / 1024).toFixed(1)} MB`);
  console.log(
    "✓ Los archivos en src/assets/ mantienen su original + versión .webp"
  );
  console.log(
    "✓ Los archivos en public/ fueron comprimidos in-place (mismo nombre)"
  );
}

run().catch(console.error);
