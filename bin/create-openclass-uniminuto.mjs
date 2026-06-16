#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, "..");
const templateRoot = path.join(packageRoot, "template");

const args = process.argv.slice(2);
const flags = new Set(args.filter((arg) => arg.startsWith("--")));
const positional = args.filter((arg) => !arg.startsWith("--"));
const targetArg = positional[0] || "openclass-uniminuto";
const targetDir = path.resolve(process.cwd(), targetArg);
const isCurrentDirectoryTarget = targetArg === "." || targetArg === "./";
const forceOverwrite = flags.has("--force");
const updateTheme = flags.has("--update-theme") || flags.has("--sync-theme");

function log(message = "") {
  console.log(message);
}

function fail(message) {
  console.error(`\n❌ ${message}\n`);
  process.exit(1);
}

function cleanPackageName(value) {
  return String(value || "openclass-uniminuto")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9.-]+/g, "-")
    .replace(/^-+|-+$/g, "") || "openclass-uniminuto";
}

function copyTemplate(src, dest) {
  const base = path.basename(src);
  if (["node_modules", "dist", ".slidev", ".git"].includes(base)) return;

  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const child of fs.readdirSync(src)) {
      copyTemplate(path.join(src, child), path.join(dest, child));
    }
    return;
  }

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (fs.existsSync(dest) && !forceOverwrite) {
    log(`↷ Conservado archivo existente: ${path.relative(targetDir, dest)}`);
    return;
  }

  fs.copyFileSync(src, dest);
}

function copyPathAlways(src, dest) {
  const base = path.basename(src);
  if (["node_modules", "dist", ".slidev", ".git"].includes(base)) return;

  if (!fs.existsSync(src)) return;

  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const child of fs.readdirSync(src)) {
      copyPathAlways(path.join(src, child), path.join(dest, child));
    }
    return;
  }

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  log(`✓ Actualizado: ${path.relative(targetDir, dest)}`);
}

function ensureFileFromTemplate(relativePath, options = {}) {
  const src = path.join(templateRoot, relativePath);
  const dest = path.join(targetDir, relativePath);
  if (!fs.existsSync(src)) return;
  if (fs.existsSync(dest) && options.onlyIfMissing) return;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  log(`✓ Actualizado: ${relativePath}`);
}

function updateThemeOnly() {
  if (!fs.existsSync(targetDir)) {
    fail(`No existe la carpeta destino: ${targetDir}`);
  }

  log("\n┌──────────────────────────────────────────────┐");
  log("│ Actualizar tema Open Class UNIMINUTO         │");
  log("└──────────────────────────────────────────────┘\n");
  log(`Destino: ${targetDir}`);
  log("Modo: solo theme/components/styles/layouts y recursos base seguros\n");

  const pathsToUpdate = [
    "theme/uniminuto/components",
    "theme/uniminuto/layouts",
    "theme/uniminuto/styles",
    "theme/uniminuto/package.json",
    "theme/uniminuto/README-AutoFit.md",
    "setup",
    "snippets"
  ];

  for (const relativePath of pathsToUpdate) {
    copyPathAlways(path.join(templateRoot, relativePath), path.join(targetDir, relativePath));
  }

  ensureFileFromTemplate("public/favicon.png", { onlyIfMissing: true });
  ensureFileFromTemplate("public/imagenes/favicon.png", { onlyIfMissing: true });
  ensureFileFromTemplate("public/imagenes/avion.png", { onlyIfMissing: false });

  log("\n✅ Tema actualizado sin tocar semanas, slides.md ni openclass.config.json.");
  log("   Recomendado ahora:");
  log("     npm run dev");
  log("     npm run export:downloads");
  log("");
}

function isEffectivelyEmptyProject(dir) {
  if (!fs.existsSync(dir)) return true;
  const entries = fs.readdirSync(dir).filter((entry) => ![".git", ".gitkeep"].includes(entry));
  return entries.length === 0;
}

function patchJson(filePath, patcher) {
  if (!fs.existsSync(filePath)) return;
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  patcher(data);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf-8");
}

if (!fs.existsSync(templateRoot)) {
  fail("No se encontró la carpeta template dentro del paquete npm.");
}

if (updateTheme) {
  updateThemeOnly();
  process.exit(0);
}

if (fs.existsSync(targetDir) && !isEffectivelyEmptyProject(targetDir) && !forceOverwrite) {
  fail(`La carpeta destino ya contiene archivos: ${targetDir}

Para trabajar dentro de un repositorio ya creado en GitHub, usa una carpeta vacía o ejecuta con --force si deseas sobrescribir archivos existentes.
Ejemplo:
  npm create openclass-uniminuto@latest . -- --iot --force

Para actualizar únicamente layouts/tema de un proyecto existente, usa:
  npm create openclass-uniminuto@latest . -- --update-theme`);
}

log("\n┌──────────────────────────────────────────────┐");
log("│ Crear proyecto Open Class UNIMINUTO · Slidev │");
log("└──────────────────────────────────────────────┘\n");
log(`Destino: ${targetDir}`);
if (isCurrentDirectoryTarget) log("Modo: aplicar plantilla en el directorio actual");
if (forceOverwrite) log("Modo: --force activo; se podrán sobrescribir archivos existentes");

copyTemplate(templateRoot, targetDir);

const innerName = cleanPackageName(path.basename(targetDir));
patchJson(path.join(targetDir, "package.json"), (pkg) => {
  pkg.name = innerName;
});
patchJson(path.join(targetDir, "package-lock.json"), (lock) => {
  lock.name = innerName;
  if (lock.packages && lock.packages[""]) lock.packages[""].name = innerName;
});

if (flags.has("--iot")) {
  const sourceConfig = path.join(targetDir, "config", "openclass.config.iot-desde-openclass-iot.json");
  const destConfig = path.join(targetDir, "openclass.config.json");
  if (!fs.existsSync(sourceConfig)) {
    fail("No se encontró la configuración IoT incluida en la plantilla.");
  }
  fs.copyFileSync(sourceConfig, destConfig);
  log("✓ Configuración IoT aplicada en openclass.config.json");

  const result = spawnSync(process.execPath, ["scripts/generar-desde-config.mjs", "--force"], {
    cwd: targetDir,
    stdio: "inherit",
    shell: false,
  });
  if (result.status !== 0) {
    fail("El generador de configuración no pudo completar el proyecto IoT.");
  }
}

if (flags.has("--install")) {
  log("\nInstalando dependencias con npm install...\n");
  const result = spawnSync("npm", ["install"], {
    cwd: targetDir,
    stdio: "inherit",
    shell: process.platform === "win32",
  });
  if (result.status !== 0) {
    fail("npm install terminó con error. Revisa la salida de consola.");
  }
}

log("\n✅ Proyecto creado correctamente.\n");
log(`Siguientes pasos:`);
log(`  cd ${path.relative(process.cwd(), targetDir) || "."}`);
if (!flags.has("--install")) log("  npm install");
if (!flags.has("--iot")) log("  npm run nuevo");
log("  npm run semana -- 1");
log("  npm run dev");
log("\nPara activar una semana adicional:");
log("  npm run semana -- 2 --title \"Título de la semana 2\"");
log("\nPara actualizar layouts/tema en un proyecto existente:");
log("  npm create openclass-uniminuto@latest . -- --update-theme");
log("\nPara revisar la publicación en GitHub Pages:");
log("  npm run pages:check");
log("");
