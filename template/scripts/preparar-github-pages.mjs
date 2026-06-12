/**
 * Verifica la configuración mínima para publicar en GitHub Pages.
 * No crea el repositorio remoto: deja los comandos listos para ejecutar.
 */
import fs from "node:fs";
import { execSync } from "node:child_process";

function exists(path) {
  return fs.existsSync(path);
}

function tryRead(command) {
  try {
    return execSync(command, { encoding: "utf-8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return "";
  }
}

console.log("\n┌──────────────────────────────────────────┐");
console.log("│ Preparación para GitHub Pages            │");
console.log("└──────────────────────────────────────────┘\n");

const workflow = ".github/workflows/deploy.yml";
const ok = [
  ["Workflow de GitHub Pages", exists(workflow)],
  ["package.json", exists("package.json")],
  ["scripts/decks.mjs", exists("scripts/decks.mjs")],
  ["openclass.config.json", exists("openclass.config.json")],
];

for (const [label, status] of ok) {
  console.log(`${status ? "✓" : "✗"} ${label}`);
}

const remote = tryRead("git remote get-url origin");
const branch = tryRead("git branch --show-current") || "main";
console.log(`\nRama actual    : ${branch}`);
console.log(`Remoto origin : ${remote || "no configurado"}`);

console.log("\nComandos sugeridos:\n");
if (!exists(".git")) {
  console.log("  git init");
  console.log("  git branch -M main");
}
if (!remote) {
  console.log("  git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git");
}
console.log("  git add -A");
console.log('  git commit -m "Publicación inicial Open Class"');
console.log("  git push -u origin main");
console.log("\nLuego, en GitHub: Settings → Pages → Build and deployment → Source: GitHub Actions.\n");
