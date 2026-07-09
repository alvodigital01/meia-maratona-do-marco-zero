const fs = require('fs');
const path = require('path');

const root = __dirname;

const folders = [
  'assets/originais/images',
  'docs',
  'docs/financeiro',
  'images/about',
  'images/backgrounds',
  'images/banners',
  'images/brand',
  'images/distancias',
  'images/galeria',
  'images/podio',
  'images/turismo',
  'screenshots',
  'videos',
];

for (const folder of folders) {
  fs.mkdirSync(path.join(root, folder), { recursive: true });
}

console.log('Estrutura de pastas verificada:');
for (const folder of folders) {
  console.log(`- ${folder}`);
}
