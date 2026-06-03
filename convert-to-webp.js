const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = __dirname;

// Imagens a converter (referenciadas no HTML/CSS)
const images = [
  '20250720_LUC_MarcoZero__03541.jpg.jpeg',
  '20250720_LUC_MarcoZero__04840.jpg.jpeg',
  '20250720_LUC_MarcoZero__06070.jpg.jpeg',
  '20250720_LUC_MarcoZero__11193.jpg.jpeg',
  'ALZIO DIAS - Meia Maratona Marco Zero (4).jpg.jpeg',
  'ALZIO DIAS - Meia Maratona Marco Zero (8).jpg.jpeg',
  'DSC01863.jpg.jpeg',
  'DSC01908.jpg.jpeg',
  'DSC01940 (1).jpg.jpeg',
  'JEF_00123 (797).jpg.jpeg',
  'dsc_8351.jpg.jpeg',
  'novasobre.jpg',
  '20adbc42-113d-475a-9ef7-8362a9371005.jfif',
  '23f649e7-b5cb-4277-bea0-7705aff30b97.jfif',
  '2cde0af5-def6-4c03-a58a-d87d8d608012.jfif',
  '404f86ff-9160-4257-afd0-46fa62a95f93.jfif',
  '4477a98e-fb01-4c3c-8097-431fe1ca11bf.jfif',
  '45b0b641-e62b-4e5b-b281-3ca945463c8b.jfif',
  '48786523-762d-4ae3-a5e6-4c4292461977.jfif',
  '50a6bf43-3959-4a9c-a00c-84a3183bb0cb.jfif',
  '571ca9dc-d74f-44cf-a091-5a0600f469f2.jfif',
  '88d7ccde-6300-43e2-a0ba-b62735025971.jfif',
  '88db77fc-577b-445a-92dc-6f1a7b31b670.jfif',
  'b0d820a8-c9f2-49f3-b5e0-467072099707.jfif',
  'b25c4319-2270-4322-af13-fbb4dffc9da9.jfif',
  'bec6791b-4c9b-4ff2-8fee-a0dc4c26a166.jfif',
  'd92e5f40-1e65-482c-9e51-17467b3911a3.jfif',
  'e8d6448f-61fc-4614-85e2-af8a7d463c00.jfif',
  'MMMZ I 700x700 [10km].png',
  'MMMZ I 700x700 [21km].png',
  'MMMZ I 700x700 [30km].png',
  'MMMZ I 700x700 [5km].png',
  'MMMZ-Banner-site-desktop.png',
  'bgazul.png',
  'bgdourado.png',
  'imagemfooter.png',
  'logoheader.png',
  'mz summit foto.png',
  'mz summit.png',
  'mzz.png',
  'novobannermobile.png',
  'podio1.png',
  'podio2.png',
  'podio3.png',
  'podio4.png',
  'podio5.png',
  'sejan1logo.png',
];

// Gera nome webp: remove todas extensões compostas e adiciona .webp
function toWebpName(filename) {
  // Remove extensões como .jpg.jpeg, .jfif, .png, .jpg
  const base = filename.replace(/(\.(jpg|jpeg|jfif|png))+$/i, '');
  return base + '.webp';
}

async function convert() {
  let totalBefore = 0;
  let totalAfter = 0;
  const mapping = []; // { old, new, before, after }

  for (const img of images) {
    const srcPath = path.join(dir, img);
    if (!fs.existsSync(srcPath)) {
      console.log(`SKIP (nao encontrado): ${img}`);
      continue;
    }

    const webpName = toWebpName(img);
    const destPath = path.join(dir, webpName);
    const beforeSize = fs.statSync(srcPath).size;

    try {
      await sharp(srcPath)
        .webp({ quality: 85, effort: 4 })
        .toFile(destPath);

      const afterSize = fs.statSync(destPath).size;
      totalBefore += beforeSize;
      totalAfter += afterSize;

      const saved = ((1 - afterSize / beforeSize) * 100).toFixed(1);
      console.log(`OK  ${img.padEnd(55)} ${(beforeSize/1024).toFixed(0).padStart(6)}KB → ${(afterSize/1024).toFixed(0).padStart(6)}KB  (-${saved}%)`);

      mapping.push({ old: img, new: webpName, before: beforeSize, after: afterSize });
    } catch (e) {
      console.log(`ERRO ${img}: ${e.message}`);
    }
  }

  console.log('\n--- ATUALIZANDO REFERENCIAS ---');

  // Atualiza index.html e styles.css
  const files = ['index.html', 'styles.css'];
  for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = 0;
    for (const { old: oldName, new: newName } of mapping) {
      if (content.includes(oldName)) {
        content = content.split(oldName).join(newName);
        changed++;
      }
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`${file}: ${changed} referências atualizadas`);
  }

  console.log('\n--- APAGANDO ORIGINAIS ---');
  for (const { old: oldName } of mapping) {
    const srcPath = path.join(dir, oldName);
    if (fs.existsSync(srcPath)) {
      fs.unlinkSync(srcPath);
      console.log(`  deletado: ${oldName}`);
    }
  }

  const savedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1);
  const savedPct = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
  console.log(`\n========================================`);
  console.log(`ANTES:    ${(totalBefore/1024/1024).toFixed(1)} MB`);
  console.log(`DEPOIS:   ${(totalAfter/1024/1024).toFixed(1)} MB`);
  console.log(`ECONOMIA: ${savedMB} MB  (-${savedPct}%)`);
  console.log(`========================================`);
}

convert().catch(console.error);
