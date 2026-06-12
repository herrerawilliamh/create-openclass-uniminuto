/**
 * Genera un ZIP limpio del proyecto actual.
 *
 * Uso:
 *   npm run zip:template
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const OUT = "openclass-template.zip";
const ROOT = process.cwd();
const TEMP = path.join(ROOT, "__zip_openclass_template__");

const exclude = new Set([
  ".git",
  ".slidev",
  "node_modules",
  "dist",
  "__zip_openclass_template__",
]);

const excludeFiles = new Set([OUT]);

function copyFiltered(src, dest) {
  const name = path.basename(src);
  if (exclude.has(name) || excludeFiles.has(name)) return;

  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const child of fs.readdirSync(src)) {
      copyFiltered(path.join(src, child), path.join(dest, child));
    }
    return;
  }

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

fs.rmSync(TEMP, { recursive: true, force: true });
fs.rmSync(OUT, { force: true });
fs.mkdirSync(TEMP, { recursive: true });

const folderName = path.basename(ROOT);
const packageRoot = path.join(TEMP, folderName);
fs.mkdirSync(packageRoot, { recursive: true });

for (const item of fs.readdirSync(ROOT)) {
  copyFiltered(path.join(ROOT, item), path.join(packageRoot, item));
}

let result;
if (process.platform === "win32") {
  const ps = `Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::CreateFromDirectory('${TEMP.replaceAll("'", "''")}', '${path.resolve(OUT).replaceAll("'", "''")}')`;
  result = spawnSync("powershell", ["-NoProfile", "-Command", ps], { stdio: "inherit" });
} else {
  result = spawnSync("zip", ["-r", path.resolve(OUT), "."], { cwd: TEMP, stdio: "inherit" });
}

fs.rmSync(TEMP, { recursive: true, force: true });

if (result.status !== 0) {
  console.error("\n❌ No se pudo generar el ZIP. En Linux/macOS verifica que el comando zip esté instalado.\n");
  process.exit(result.status ?? 1);
}

const sizeKb = Math.round(fs.statSync(OUT).size / 1024);
console.log(`\n✅ ${OUT} generado (${sizeKb} KB).\n`);
