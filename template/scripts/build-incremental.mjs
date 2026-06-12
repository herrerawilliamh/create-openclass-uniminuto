import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { decks } from './decks.mjs';

const isWindows = process.platform === 'win32';

function run(args) {
  const result = spawnSync('npx', ['slidev', 'build', ...args], {
    stdio: 'inherit',
    shell: isWindows,
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

let built = 0;
for (const deck of decks) {
  const marker = path.join(deck.out, 'index.html');
  if (fs.existsSync(marker)) {
    console.log(`⏭  Omitiendo: ${deck.name} (ya existe en ${deck.out})`);
    continue;
  }
  console.log(`\n🔨 Construyendo: ${deck.name}`);
  run([deck.entry, '--out', deck.out, '--base', deck.base, '--without-notes']);
  built++;
}

if (built === 0) {
  console.log('\n✅ Todo está al día. No se construyó ninguna presentación nueva.');
  console.log('   Para forzar una reconstrucción, elimina la carpeta dist/ y ejecuta build:all.\n');
} else {
  console.log(`\n✅ Listo. Se construyeron ${built} presentación(es) nueva(s).\n`);
}
