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

const IGNORED_DIRS = new Set(["node_modules", "dist", ".slidev", ".git"]);
const IGNORED_FILES = new Set(["audit-report.json"]);
const IGNORED_EXTENSIONS = new Set([".tgz"]);

function envFlag(name) {
  const value = process.env[name];

  if (value === undefined) return false;

  return ["1", "true", "yes", "on"].includes(String(value).toLowerCase());
}

const forceOverwrite =
  flags.has("--force") ||
  envFlag("npm_config_force");

const updateTheme =
  flags.has("--update-theme") ||
  flags.has("--sync-theme") ||
  envFlag("npm_config_update_theme") ||
  envFlag("npm_config_sync_theme");

function log(message = "") {
  console.log(message);
}

function fail(message) {
  console.error(`\n❌ ${message}\n`);
  process.exit(1);
}

function shouldIgnore(src) {
  const base = path.basename(src);
  const ext = path.extname(src).toLowerCase();

  return IGNORED_DIRS.has(base) || IGNORED_FILES.has(base) || IGNORED_EXTENSIONS.has(ext);
}

function cleanPackageName(value) {
  return (
    String(value || "openclass-uniminuto")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9.-]+/g, "-")
      .replace(/^-+|-+$/g, "") || "openclass-uniminuto"
  );
}

function relativeToTarget(filePath) {
  return path.relative(targetDir, filePath).replaceAll("\\", "/");
}

function readJson(filePath) {
  if (!fs.existsSync(filePath)) return null;

  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (error) {
    fail(`No se pudo leer JSON válido en ${filePath}\n${error.message}`);
  }
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf-8");
}

function patchJson(filePath, patcher) {
  const data = readJson(filePath);

  if (!data) return false;

  patcher(data);
  writeJson(filePath, data);

  return true;
}

function copyTemplate(src, dest) {
  if (shouldIgnore(src)) return;

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
    log(`↷ Conservado archivo existente: ${relativeToTarget(dest)}`);
    return;
  }

  fs.copyFileSync(src, dest);
}

function copyPathAlways(src, dest) {
  if (!fs.existsSync(src) || shouldIgnore(src)) return;

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

  log(`✓ Actualizado: ${relativeToTarget(dest)}`);
}

function copyPathIfMissing(src, dest) {
  if (!fs.existsSync(src) || shouldIgnore(src)) return false;

  if (fs.existsSync(dest)) {
    log(`⏭  Conservado: ${relativeToTarget(dest)}`);
    return false;
  }

  const stat = fs.statSync(src);

  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });

    for (const child of fs.readdirSync(src)) {
      copyPathIfMissing(path.join(src, child), path.join(dest, child));
    }

    return true;
  }

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);

  log(`✓ Creado: ${relativeToTarget(dest)}`);
  return true;
}

function copyTemplatePathAlways(relativePath) {
  copyPathAlways(path.join(templateRoot, relativePath), path.join(targetDir, relativePath));
}

function copyTemplatePathIfMissing(relativePath) {
  copyPathIfMissing(path.join(templateRoot, relativePath), path.join(targetDir, relativePath));
}

function appendGitignoreRules() {
  const gitignorePath = path.join(targetDir, ".gitignore");

  const rules = [
    "",
    "# Archivos generados por exportación Slidev",
    "public/descargas/*.pdf",
    "public/descargas/*.pptx",
    "!public/descargas/.gitkeep",
    "",
    "# Reportes locales de auditoría",
    "audit-report.json",
    "",
  ];

  const existing = fs.existsSync(gitignorePath)
    ? fs.readFileSync(gitignorePath, "utf-8")
    : "";

  const missingRules = rules.filter((rule) => {
    if (rule.trim() === "") return false;
    if (rule.startsWith("#")) return false;
    return !existing.split(/\r?\n/).includes(rule);
  });

  if (!missingRules.length) {
    log("⏭  .gitignore ya contiene las reglas necesarias.");
    return;
  }

  const block = rules.join("\n");
  const separator = existing.endsWith("\n") || existing.length === 0 ? "" : "\n";

  fs.writeFileSync(gitignorePath, `${existing}${separator}${block}`, "utf-8");
  log("✓ Actualizado: .gitignore");
}

function mergeObject(target, source) {
  if (!source || typeof source !== "object") return target || {};

  const output = target && typeof target === "object" ? { ...target } : {};

  for (const [key, value] of Object.entries(source)) {
    output[key] = value;
  }

  return output;
}

function mergePackageFromTemplate({ updateName = false } = {}) {
  const templatePackagePath = path.join(templateRoot, "package.json");
  const targetPackagePath = path.join(targetDir, "package.json");

  const templatePackage = readJson(templatePackagePath);
  const targetPackage = readJson(targetPackagePath);

  if (!templatePackage || !targetPackage) return;

  if (updateName) {
    targetPackage.name = cleanPackageName(path.basename(targetDir));
  }

  targetPackage.scripts = mergeObject(targetPackage.scripts, {
    dev: targetPackage.scripts?.dev || "slidev slides.md --open --port 3000",
    config: "node scripts/generar-desde-config.mjs",
    semana: "node scripts/semana.mjs",
    "pages:check": "node scripts/preparar-github-pages.mjs",
    "actualizar:tema": "npm create openclass-uniminuto@latest . -- --update-theme",
    "actualizar:tema:preview": "npm run actualizar:tema && npm run config && npm run dev",
    "dev:all": "node scripts/dev-all.mjs",
    "dev:todo": "node scripts/dev-all.mjs",
    "build:all": "node scripts/build-site.mjs",
    "build:incremental": "node scripts/build-incremental.mjs",
    "export:downloads": "node scripts/export-downloads.mjs",
    "export:incremental": "node scripts/export-incremental.mjs",
    "pages:build": "npm run config && npm run export:downloads && npm run build:all",
    "pages:preview": "npm run preview:pages",
    publicar: "node scripts/publicar.mjs",
    nuevo: "node scripts/nuevo-curso.mjs",
    "zip:template": "node scripts/zip-template.mjs",
  });

  targetPackage.dependencies = mergeObject(
    targetPackage.dependencies,
    templatePackage.dependencies,
  );

  targetPackage.devDependencies = mergeObject(
    targetPackage.devDependencies,
    templatePackage.devDependencies,
  );

  writeJson(targetPackagePath, targetPackage);
  log("✓ Actualizado: package.json");
}

function patchPackageLockName() {
  const lockPath = path.join(targetDir, "package-lock.json");
  const lock = readJson(lockPath);

  if (!lock) return;

  const innerName = cleanPackageName(path.basename(targetDir));

  lock.name = innerName;

  if (lock.packages && lock.packages[""]) {
    lock.packages[""].name = innerName;
  }

  writeJson(lockPath, lock);
}

function updateThemeOnly() {
  if (!fs.existsSync(targetDir)) {
    fail(`No existe la carpeta destino: ${targetDir}`);
  }

  log("\n┌──────────────────────────────────────────────┐");
  log("│ Actualizar infraestructura Open Class        │");
  log("└──────────────────────────────────────────────┘\n");
  log(`Destino: ${targetDir}`);
  log("Modo: actualizar tema, scripts, plantillas y recursos base seguros.\n");
  log("No se sobrescriben: semanas/, slides.md ni openclass.config.json existente.\n");

  const pathsToUpdate = [
    "README.md",

    "theme/uniminuto/components",
    "theme/uniminuto/layouts",
    "theme/uniminuto/styles",
    "theme/uniminuto/utils",
    "theme/uniminuto/package.json",
    "theme/uniminuto/README-AutoFit.md",

    "setup",
    "snippets",

    "scripts/build-site.mjs",
    "scripts/build-incremental.mjs",
    "scripts/decks.mjs",
    "scripts/dev-all.mjs",
    "scripts/export-downloads.mjs",
    "scripts/export-incremental.mjs",
    "scripts/generar-desde-config.mjs",
    "scripts/nuevo-curso.mjs",
    "scripts/preparar-github-pages.mjs",
    "scripts/publicar.mjs",
    "scripts/semana.mjs",
    "scripts/zip-template.mjs",

    "plantillas",

    ".github/workflows/deploy.yml",

    "public/fondos",
  ];

  for (const relativePath of pathsToUpdate) {
    copyTemplatePathAlways(relativePath);
  }

  copyTemplatePathIfMissing("openclass.config.json");

  copyTemplatePathIfMissing("public/descargas/.gitkeep");
  copyTemplatePathIfMissing("public/videos/.gitkeep");
  copyTemplatePathIfMissing("public/imagenes/.gitkeep");

  copyTemplatePathIfMissing("public/favicon.png");
  copyTemplatePathIfMissing("public/imagenes/favicon.png");

  copyTemplatePathAlways("public/imagenes/avion.png");

  appendGitignoreRules();

  mergePackageFromTemplate({ updateName: false });

  log("\n✅ Infraestructura actualizada sin tocar el contenido académico.");
  log("   Recomendado ahora:");
  log("     npm install");
  log("     npm run config");
  log("     npm run pages:build");
  log("");
}

function isEffectivelyEmptyProject(dir) {
  if (!fs.existsSync(dir)) return true;

  const entries = fs
    .readdirSync(dir)
    .filter((entry) => ![".git", ".gitkeep"].includes(entry));

  return entries.length === 0;
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
  npm create openclass-uniminuto@latest . -- --force

Para aplicar la configuración IoT inicial:
  npm create openclass-uniminuto@latest . -- --iot

Para actualizar únicamente la infraestructura de un proyecto existente:
  npm create openclass-uniminuto@latest . -- --update-theme`);
}

log("\n┌──────────────────────────────────────────────┐");
log("│ Crear proyecto Open Class UNIMINUTO · Slidev │");
log("└──────────────────────────────────────────────┘\n");
log(`Destino: ${targetDir}`);

if (isCurrentDirectoryTarget) {
  log("Modo: aplicar plantilla en el directorio actual");
}

if (forceOverwrite) {
  log("Modo: --force activo; se podrán sobrescribir archivos existentes");
}

copyTemplate(templateRoot, targetDir);

const innerName = cleanPackageName(path.basename(targetDir));

patchJson(path.join(targetDir, "package.json"), (pkg) => {
  pkg.name = innerName;
});

patchJson(path.join(targetDir, "package-lock.json"), (lock) => {
  lock.name = innerName;

  if (lock.packages && lock.packages[""]) {
    lock.packages[""].name = innerName;
  }
});

if (flags.has("--iot")) {
  const sourceConfig = path.join(
    targetDir,
    "config",
    "openclass.config.iot-desde-openclass-iot.json",
  );

  const destConfig = path.join(targetDir, "openclass.config.json");

  if (!fs.existsSync(sourceConfig)) {
    fail("No se encontró la configuración IoT incluida en la plantilla.");
  }

  fs.copyFileSync(sourceConfig, destConfig);
  log("✓ Configuración IoT aplicada en openclass.config.json");

  const result = spawnSync(
    process.execPath,
    ["scripts/generar-desde-config.mjs", "--force"],
    {
      cwd: targetDir,
      stdio: "inherit",
      shell: false,
    },
  );

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
log("Siguientes pasos:");
log(`  cd ${path.relative(process.cwd(), targetDir) || "."}`);

if (!flags.has("--install")) {
  log("  npm install");
}

if (!flags.has("--iot")) {
  log("  npm run nuevo");
}

log("  npm run semana -- 1");
log("  npm run dev");
log("");
log("Para activar una semana adicional:");
log('  npm run semana -- 2 --title "Título de la semana 2"');
log("");
log("Para actualizar infraestructura en un proyecto existente:");
log("  npm create openclass-uniminuto@latest . -- --update-theme");
log("");
log("Para revisar la publicación en GitHub Pages:");
log("  npm run pages:check");
log("");