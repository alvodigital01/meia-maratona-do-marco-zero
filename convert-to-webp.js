const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = __dirname;
const sourceDir = path.join(root, 'assets', 'originais', 'images');
const outputDir = path.join(root, 'assets', 'originais', 'webp');
const supportedExtensions = new Set(['.jpg', '.jpeg', '.jfif', '.png']);

function slugify(filename) {
  const parsed = path.parse(filename);
  return parsed.name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function convertFile(file) {
  const sourcePath = path.join(sourceDir, file);
  const outputName = `${slugify(file)}.webp`;
  const outputPath = path.join(outputDir, outputName);

  await sharp(sourcePath)
    .webp({ quality: 85, effort: 4 })
    .toFile(outputPath);

  const sourceSize = fs.statSync(sourcePath).size;
  const outputSize = fs.statSync(outputPath).size;
  const saved = sourceSize > 0 ? ((1 - outputSize / sourceSize) * 100).toFixed(1) : '0.0';

  console.log(`OK ${file} -> ${path.join('assets/originais/webp', outputName)} (-${saved}%)`);
}

async function convert() {
  if (!fs.existsSync(sourceDir)) {
    console.log(`Pasta nao encontrada: ${path.relative(root, sourceDir)}`);
    return;
  }

  fs.mkdirSync(outputDir, { recursive: true });

  const files = fs
    .readdirSync(sourceDir)
    .filter((file) => supportedExtensions.has(path.extname(file).toLowerCase()));

  if (files.length === 0) {
    console.log('Nenhuma imagem original encontrada para converter.');
    return;
  }

  for (const file of files) {
    await convertFile(file);
  }
}

convert().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
