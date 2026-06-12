import fs from "node:fs";
import { spawnSync } from "node:child_process";
import { decks } from "./decks.mjs";

const isWindows = process.platform === "win32";

fs.mkdirSync("public/descargas", { recursive: true });

const commonExportOptions = [
  "--timeout",
  "120000",
  "--wait",
  "3000",
  "--wait-until",
  "none",
];

function run(args) {
  const result = spawnSync("npx", ["slidev", "export", ...args], {
    stdio: "inherit",
    shell: isWindows,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

for (const deck of decks.filter((deck) => deck.exportable)) {
  console.log(`\nExportando PDF: ${deck.name}`);

  run([
    deck.entry,
    "--format",
    "pdf",
    ...commonExportOptions,
    "--output",
    `public/descargas/${deck.name}.pdf`,
  ]);

  console.log(`\nExportando PPTX: ${deck.name}`);

  run([
    deck.entry,
    "--format",
    "pptx",
    "--with-clicks",
    "false",
    ...commonExportOptions,
    "--output",
    `public/descargas/${deck.name}.pptx`,
  ]);
}