import fs from "node:fs";
import { spawnSync } from "node:child_process";
import { decks } from "./decks.mjs";

const isWindows = process.platform === "win32";

fs.rmSync("dist", { recursive: true, force: true });

function run(args) {
  const result = spawnSync("npx", ["slidev", "build", ...args], {
    stdio: "inherit",
    shell: isWindows,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

for (const deck of decks) {
  console.log(`\nConstruyendo: ${deck.name}`);

  run([
    deck.entry,
    "--out",
    deck.out,
    "--base",
    deck.base,
    "--without-notes",
  ]);
}
fs.writeFileSync("dist/.nojekyll", "", "utf-8");
console.log("\n✓ dist/.nojekyll creado para GitHub Pages.\n");
