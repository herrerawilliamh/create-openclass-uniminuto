import fs from 'node:fs';
import { spawnSync } from 'node:child_process';
import { decks } from './decks.mjs';

const isWindows = process.platform === 'win32';

fs.mkdirSync('public/descargas', { recursive: true });

const commonOptions = ['--timeout', '120000', '--wait', '3000', '--wait-until', 'none'];

function run(args) {
  const result = spawnSync('npx', ['slidev', 'export', ...args], {
    stdio: 'inherit',
    shell: isWindows,
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

let exported = 0;
for (const deck of decks.filter(d => d.exportable)) {
  const pdf  = `public/descargas/${deck.name}.pdf`;
  const pptx = `public/descargas/${deck.name}.pptx`;
  const pdfOk  = fs.existsSync(pdf);
  const pptxOk = fs.existsSync(pptx);

  if (pdfOk && pptxOk) {
    console.log(`⏭  Omitiendo: ${deck.name} (PDF y PPTX ya existen)`);
    continue;
  }

  if (!pdfOk) {
    console.log(`\nExportando PDF: ${deck.name}`);
    run([deck.entry, '--format', 'pdf', ...commonOptions, '--output', pdf]);
    exported++;
  }

  if (!pptxOk) {
    console.log(`\nExportando PPTX: ${deck.name}`);
    run([deck.entry, '--format', 'pptx', '--with-clicks', 'false', ...commonOptions, '--output', pptx]);
    exported++;
  }
}

if (exported === 0) {
  console.log('\n✅ Todo está al día. No se exportó ningún archivo nuevo.');
  console.log('   Para forzar una re-exportación, elimina los archivos en public/descargas/.\n');
} else {
  console.log(`\n✅ Listo. Se exportaron ${exported} archivo(s) nuevo(s).\n`);
}
