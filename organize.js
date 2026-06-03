const fs = require('fs');
const path = require('path');

const dir = __dirname;

// Mapeamento: arquivo → pasta de destino
const moves = {
  // GALERIA — fotos do evento (marquee)
  'DSC01940 (1).webp':                              'images/galeria',
  'DSC01908.webp':                                  'images/galeria',
  'DSC01863.webp':                                  'images/galeria',
  'dsc_8351.webp':                                  'images/galeria',
  '20250720_LUC_MarcoZero__11193.webp':             'images/galeria',
  '20250720_LUC_MarcoZero__04840.webp':             'images/galeria',
  '20250720_LUC_MarcoZero__03541.webp':             'images/galeria',
  '20250720_LUC_MarcoZero__06070.webp':             'images/galeria',
  'ALZIO DIAS - Meia Maratona Marco Zero (8).webp': 'images/galeria',
  'ALZIO DIAS - Meia Maratona Marco Zero (4).webp': 'images/galeria',
  'JEF_00123 (797).webp':                           'images/galeria',
  '23f649e7-b5cb-4277-bea0-7705aff30b97.webp':      'images/galeria',
  '4477a98e-fb01-4c3c-8097-431fe1ca11bf.webp':      'images/galeria',
  'b0d820a8-c9f2-49f3-b5e0-467072099707.webp':      'images/galeria',
  'bec6791b-4c9b-4ff2-8fee-a0dc4c26a166.webp':      'images/galeria',
  '404f86ff-9160-4257-afd0-46fa62a95f93.webp':      'images/galeria',
  '20adbc42-113d-475a-9ef7-8362a9371005.webp':      'images/galeria',
  '2cde0af5-def6-4c03-a58a-d87d8d608012.webp':      'images/galeria',
  '50a6bf43-3959-4a9c-a00c-84a3183bb0cb.webp':      'images/galeria',
  '48786523-762d-4ae3-a5e6-4c4292461977.webp':      'images/galeria',
  '571ca9dc-d74f-44cf-a091-5a0600f469f2.webp':      'images/galeria',
  '88d7ccde-6300-43e2-a0ba-b62735025971.webp':      'images/galeria',
  '88db77fc-577b-445a-92dc-6f1a7b31b670.webp':      'images/galeria',
  'e8d6448f-61fc-4614-85e2-af8a7d463c00.webp':      'images/galeria',
  '45b0b641-e62b-4e5b-b281-3ca945463c8b.webp':      'images/galeria',
  'b25c4319-2270-4322-af13-fbb4dffc9da9.webp':      'images/galeria',
  'd92e5f40-1e65-482c-9e51-17467b3911a3.webp':      'images/galeria',

  // TURISMO
  'CENTRO DE ARTESANATO DE PERNAMBUCO.webp':        'images/turismo',
  'EMBAIXADA DOS BONECOS GIGANTES.webp':            'images/turismo',
  'PARQUE DAS ESCULTURAS FRANCISCO BRENNAND.webp':  'images/turismo',
  'RUA DO BOM JESUS.webp':                          'images/turismo',
  'SINAGOGA KAHAL ZUR ISRAEL.webp':                 'images/turismo',

  // DISTÂNCIAS
  'MMMZ I 700x700 [5km].webp':                      'images/distancias',
  'MMMZ I 700x700 [10km].webp':                     'images/distancias',
  'MMMZ I 700x700 [21km].webp':                     'images/distancias',
  'MMMZ I 700x700 [30km].webp':                     'images/distancias',

  // PÓDIO
  'podio1.webp': 'images/podio',
  'podio2.webp': 'images/podio',
  'podio3.webp': 'images/podio',
  'podio4.webp': 'images/podio',
  'podio5.webp': 'images/podio',

  // LOGOS / MARCA
  'logoheader.webp':    'images',
  'imagemfooter.webp':  'images',
  'sejan1logo.webp':    'images',
  'mz summit.webp':     'images',
  'mz summit foto.webp':'images',
  'mzz.webp':           'images',

  // BANNERS
  'MMMZ-Banner-site-desktop.webp': 'images',
  'novobannermobile.webp':         'images',

  // SOBRE
  'novasobre.webp': 'images',

  // BACKGROUNDS (referenciados no CSS)
  'bgazul.webp':    'images',
  'bgdourado.webp': 'images',

  // VÍDEOS
  'IMG_4660.mp4':                              'videos',
  'videosobre.MP4':                            'videos',
  'WhatsApp Video 2026-03-31 at 01.38.25.mp4': 'videos',

  // DOCUMENTOS
  '373d6d04cb134bffa6038103dd6ab79d639100338090170776.pdf': 'docs',
};

// Cria pastas necessárias
const folders = [...new Set(Object.values(moves))];
for (const folder of folders) {
  fs.mkdirSync(path.join(dir, folder), { recursive: true });
}
console.log('Pastas criadas:', folders.join(', '));

// Move arquivos e constrói mapeamento de caminhos
const pathMap = []; // { oldRef, newRef }

for (const [filename, destFolder] of Object.entries(moves)) {
  const src = path.join(dir, filename);
  if (!fs.existsSync(src)) {
    console.log(`SKIP (não encontrado): ${filename}`);
    continue;
  }
  const dest = path.join(dir, destFolder, filename);
  fs.renameSync(src, dest);

  const oldRef = './' + filename;
  const newRef = './' + destFolder + '/' + filename;
  pathMap.push({ oldRef, newRef });
  console.log(`Movido: ${filename} → ${destFolder}/`);
}

// Atualiza referências em index.html e styles.css
console.log('\n--- Atualizando referências ---');
for (const file of ['index.html', 'styles.css']) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let count = 0;
  for (const { oldRef, newRef } of pathMap) {
    if (content.includes(oldRef)) {
      content = content.split(oldRef).join(newRef);
      count++;
    }
  }
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`${file}: ${count} referências atualizadas`);
}

console.log('\nOrganização concluída!');
