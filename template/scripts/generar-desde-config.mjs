/**
 * Genera o actualiza una Open Class Slidev a partir de openclass.config.json.
 *
 * Uso principal:
 *   npm run config
 *   node scripts/generar-desde-config.mjs --config config/openclass.config.iot-ejemplo.json --force
 */
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);

function valueAfter(flag, fallback) {
  const i = args.indexOf(flag);
  if (i >= 0 && args[i + 1]) return args[i + 1];
  const pair = args.find((arg) => arg.startsWith(`${flag}=`));
  if (pair) return pair.slice(flag.length + 1);
  return fallback;
}

const configPath = valueAfter("--config", "openclass.config.json");
const force = args.includes("--force") || args.includes("-f");
const dryRun = args.includes("--dry-run");
const forceCleanDemo = args.includes("--clean-demo");
const FALLBACK_FAVICON_PNG_BASE64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/p9sAAAAASUVORK5CYII=";

function fail(message) {
  console.error(`\n❌ ${message}\n`);
  process.exit(1);
}

function readJson(filePath) {
  if (!fs.existsSync(filePath)) fail(`No se encontró el archivo de configuración: ${filePath}`);
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (error) {
    fail(`No se pudo leer ${filePath}. Revisa que sea JSON válido.\n${error.message}`);
  }
}

function ensureDir(dir) {
  if (!dryRun) fs.mkdirSync(dir, { recursive: true });
}

function writeFileSafe(filePath, content, { overwrite = true, label = filePath } = {}) {
  ensureDir(path.dirname(filePath));

  if (fs.existsSync(filePath) && !overwrite) {
    console.log(`⏭  Conservado: ${label}`);
    return false;
  }

  if (!dryRun) fs.writeFileSync(filePath, content, "utf-8");
  console.log(`${dryRun ? "🔎" : "✓"}  ${label}`);
  return true;
}

function writeBinaryFileIfMissing(filePath, bufferOrBase64, { label = filePath } = {}) {
  ensureDir(path.dirname(filePath));

  if (fs.existsSync(filePath)) {
    console.log(`⏭  Conservado: ${label}`);
    return false;
  }

  if (!dryRun) {
    const buffer = Buffer.isBuffer(bufferOrBase64)
      ? bufferOrBase64
      : Buffer.from(bufferOrBase64, "base64");
    fs.writeFileSync(filePath, buffer);
  }

  console.log(`${dryRun ? "🔎" : "✓"}  ${label} creado`);
  return true;
}

function removeFileIfExists(filePath, { label = filePath } = {}) {
  if (!fs.existsSync(filePath)) return false;
  if (!dryRun) fs.rmSync(filePath, { force: true });
  console.log(`${dryRun ? "🔎" : "🧹"}  Eliminado: ${label}`);
  return true;
}

function cleanShortName(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .trim();
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function replaceTokens(template, tokens) {
  return Object.entries(tokens).reduce(
    (content, [key, value]) => content.replaceAll(`{{${key}}}`, String(value ?? "")),
    template,
  );
}

function readTemplate(filePath, fallback) {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf-8") : fallback;
}

function normalizeBase(value) {
  let base = value || "/";
  if (!base.startsWith("/")) base = `/${base}`;
  if (!base.endsWith("/")) base = `${base}/`;
  return base;
}

const config = readJson(configPath);
const course = config.course || {};
const generation = config.generation || {};

const courseShort = cleanShortName(course.shortName || config.shortName || config.courseCode || "curso");
const courseName = String(course.fullName || course.name || config.courseName || "Nombre del curso").trim();
const courseYear = String(course.year || config.year || new Date().getFullYear()).trim();
const description = String(course.description || config.description || "Agrega aquí la descripción general del curso.").trim();
const openClassLabel = String(course.openClassLabel || "Open Class").trim();
const weeksTotal = Number(generation.weeksTotal || config.weeksTotal || config.totalWeeks || asArray(config.weeks).length || 8);

if (!courseShort) fail("El campo course.shortName es obligatorio.");
if (!courseName) fail("El campo course.fullName es obligatorio.");
if (!Number.isInteger(weeksTotal) || weeksTotal < 1) fail("generation.weeksTotal debe ser un número entero mayor o igual a 1.");

const configuredWeeks = new Map(asArray(config.weeks).map((week) => [Number(week.number), week]));

function weekInfo(number) {
  const week = configuredWeeks.get(number) || {};
  const title = String(week.title || `Título semana ${number}`).trim();
  return {
    number,
    title,
    date: String(week.date || courseYear).trim(),
    centralTheme: String(week.centralTheme || week.theme || title).trim(),
    activity: String(week.activity || "Actividad o evaluación relacionada").trim(),
    duration: String(week.duration || "90 minutos").trim(),
    status: String(week.status || "active").trim(),
  };
}

const allWeeks = Array.from({ length: weeksTotal }, (_, i) => weekInfo(i + 1));
const activeWeeksRaw = asArray(generation.activeWeeks || config.activeWeeks);
const activeWeekNumbers = activeWeeksRaw.length
  ? activeWeeksRaw.map(Number).filter((n) => Number.isInteger(n) && n >= 1 && n <= weeksTotal)
  : allWeeks.filter((week) => week.status !== "draft" && week.status !== "inactive").map((week) => week.number);

const activeWeeks = allWeeks.filter((week) => activeWeekNumbers.includes(week.number));
const overwriteLaunchers = generation.overwriteLaunchers !== false || force;
const overwritePortal = generation.overwritePortal !== false || force;
const overwriteDecks = generation.overwriteDecks !== false || force;
const overwritePackageScripts = generation.overwritePackageScripts !== false || force;
const overwriteWeekContent = generation.overwriteWeekContent === true || force;
const exportPortal = generation.exportPortal === true;

const semanaTemplate = readTemplate(
  "plantillas/semana.md",
  `---\nlayout: slide-01-portada\n---\n\n::title::\n{{COURSE_NAME}}\n\n::week::\nSemana {{WEEK_NUMBER}} — {{WEEK_TITLE}}\n\n::date::\n{{WEEK_DATE}}\n\n---\nlayout: slide-12-cierre\n---\n`,
);

const launcherTemplate = readTemplate(
  "plantillas/launcher.md",
  `---\ntheme: ./theme/uniminuto\ntitle: {{COURSE_NAME}} — Semana {{WEEK_NUMBER}} — {{WEEK_TITLE}}\nfavicon: /favicon.png\ncodeCopy: true\ntransition: fade\nrouterMode: hash\ndrawings:\n  persist: false\nsrc: ./semanas/{{COURSE_SHORT}}_semana{{WEEK_NUMBER}}.md\n---\n`,
);

function weekTokens(week) {
  return {
    COURSE_SHORT: courseShort,
    COURSE_NAME: courseName,
    COURSE_YEAR: courseYear,
    OPEN_CLASS_LABEL: openClassLabel,
    WEEK_NUMBER: week.number,
    WEEK_TITLE: week.title,
    WEEK_DATE: week.date,
    WEEK_THEME: week.centralTheme,
    WEEK_ACTIVITY: week.activity,
    WEEK_DURATION: week.duration,
  };
}

function portalWeekItem(week) {
  const slug = `${courseShort}_semana${week.number}`;
  return `### **Semana ${week.number}**\n\n<a href="./semanas/${slug}/#/1" target="_self">${week.title}</a>\n\n<a href="./descargas/${slug}.pdf" download>Descargar PDF</a> · <a href="./descargas/${slug}.pptx" download>Descargar PPTX</a>`;
}

function buildPortal() {
  const left = activeWeeks.length
    ? activeWeeks.filter((_, index) => index < Math.ceil(activeWeeks.length / 2)).map(portalWeekItem).join("\n\n")
    : "### Sin semanas activas\n\nEjecuta `npm run semana -- 1` para generar la primera semana.";
  const right = activeWeeks.filter((_, index) => index >= Math.ceil(activeWeeks.length / 2)).map(portalWeekItem).join("\n\n") || "### Próximamente\n\nActiva más semanas con `npm run semana -- 2`, `npm run semana -- 3` y así sucesivamente.";

  return `---\ntheme: ./theme/uniminuto\ntitle: ${courseName} — ${openClassLabel}\nfavicon: /favicon.png\ncodeCopy: true\ntransition: fade\nrouterMode: hash\ndrawings:\n  persist: false\nlayout: slide-01-portada\n---\n\n::title::\n${courseName}\n\n::week::\n${openClassLabel}\n\n::date::\n${courseYear}\n\n---\nlayout: slide-08-titulo-texto\n---\n\n::title::\nDescripción general del curso\n\n::content::\n${description}\n\n---\nlayout: slide-08-titulo-texto\n---\n\n::title::\nRuta de aprendizaje\n\n::content::\nEl curso se organiza en semanas. Cada semana cuenta con un lanzador raíz y un archivo interno en la carpeta \`semanas/\`.\n\nLas presentaciones activas se controlan desde \`openclass.config.json\` mediante el campo \`generation.activeWeeks\`.\n\n---\nlayout: slide-10-titulo-dos-columnas\n---\n\n::title::\nPresentaciones disponibles\n\n::left::\n${left}\n\n::right::\n${right}\n\n---\nlayout: slide-12-cierre\n---\n`;
}

function buildDecks() {
  const entries = [
    `function normalizeBase(value) {\n  let base = value || "/";\n  if (!base.startsWith("/")) base = \`/\${base}\`;\n  if (!base.endsWith("/")) base = \`\${base}/\`;\n  return base;\n}\n\nconst SITE_BASE = normalizeBase(process.env.SITE_BASE || "/");\n\nfunction withBase(path = "") {\n  return \`\${SITE_BASE}\${path.replace(/^\\/+/, "")}\`;\n}\n\nexport const decks = [\n  {\n    name: "openclass-${courseShort}",\n    entry: "slides.md",\n    out: "dist",\n    base: SITE_BASE,\n    exportable: ${exportPortal ? "true" : "false"},\n  },`,
  ];

  for (const week of activeWeeks) {
    const slug = `${courseShort}_semana${week.number}`;
    entries.push(`  {\n    name: "${slug}",\n    entry: "${slug}.md",\n    out: "dist/semanas/${slug}",\n    base: withBase("semanas/${slug}/"),\n    exportable: true,\n  },`);
  }

  entries.push(`];\n`);
  return entries.join("\n");
}

function buildScripts() {
  const scripts = {
    dev: "slidev slides.md --open --port 3000",
    config: "node scripts/generar-desde-config.mjs",
    semana: "node scripts/semana.mjs",
    "pages:check": "node scripts/preparar-github-pages.mjs",
    "actualizar:tema": "npm create openclass-uniminuto@latest . -- --update-theme",
    "actualizar:tema:preview": "npm run actualizar:tema && npm run dev",
  };

  for (let i = 1; i <= weeksTotal; i++) {
    const slug = `${courseShort}_semana${i}`;
    scripts[`dev:s${i}`] = `slidev ${slug}.md --open --port ${3000 + i}`;
  }

  scripts.clean = "node -e \"require('fs').rmSync('dist',{recursive:true,force:true})\"";
  scripts["clean:downloads"] = "node -e \"require('fs').rmSync('public/descargas',{recursive:true,force:true}); require('fs').mkdirSync('public/descargas',{recursive:true})\"";
  scripts["clean:cache"] = "node -e \"require('fs').rmSync('.slidev',{recursive:true,force:true}); require('fs').rmSync('node_modules/.vite',{recursive:true,force:true})\"";
  scripts["build:index"] = "slidev build slides.md --out dist --base / --without-notes";

  for (let i = 1; i <= weeksTotal; i++) {
    const slug = `${courseShort}_semana${i}`;
    scripts[`build:s${i}`] = `slidev build ${slug}.md --out dist/semanas/${slug} --base /semanas/${slug}/ --without-notes`;
  }

  scripts["build:all"] = "node scripts/build-site.mjs";
  scripts["build:incremental"] = "node scripts/build-incremental.mjs";
  scripts["export:downloads"] = "node scripts/export-downloads.mjs";
  scripts["export:incremental"] = "node scripts/export-incremental.mjs";
  scripts.vista = "npm run clean && npm run export:downloads && npm run build:all && http-server dist -p 4173 -c-1 -o";
  scripts.publicar = "node scripts/publicar.mjs";
  scripts["dev:todo"] = "node scripts/dev-all.mjs";
  scripts.nuevo = "node scripts/nuevo-curso.mjs";
  scripts["zip:template"] = "node scripts/zip-template.mjs";
  scripts["preview:static"] = "npm run build:all && http-server dist -p 4173 -c-1";
  scripts["preview:pages"] = "npm run export:downloads && npm run build:all && http-server dist -p 4173 -c-1";
  scripts["pages:build"] = "npm run export:downloads && npm run build:all";
  scripts["pages:preview"] = "npm run preview:pages";

  return scripts;
}

function ensureProjectAssets() {
  ensureDir("public");
  ensureDir("public/descargas");
  ensureDir("public/imagenes");
  ensureDir("public/videos");

  const rootFavicon = "public/favicon.png";
  const imageFavicon = "public/imagenes/favicon.png";

  if (fs.existsSync(rootFavicon) && !fs.existsSync(imageFavicon)) {
    if (!dryRun) fs.copyFileSync(rootFavicon, imageFavicon);
    console.log(`${dryRun ? "🔎" : "✓"}  ${imageFavicon} creado desde ${rootFavicon}`);
  }

  if (fs.existsSync(imageFavicon) && !fs.existsSync(rootFavicon)) {
    if (!dryRun) fs.copyFileSync(imageFavicon, rootFavicon);
    console.log(`${dryRun ? "🔎" : "✓"}  ${rootFavicon} creado desde ${imageFavicon}`);
  }

  if (!fs.existsSync(rootFavicon) && !fs.existsSync(imageFavicon)) {
    writeBinaryFileIfMissing(rootFavicon, FALLBACK_FAVICON_PNG_BASE64, { label: rootFavicon });
    writeBinaryFileIfMissing(imageFavicon, FALLBACK_FAVICON_PNG_BASE64, { label: imageFavicon });
  }
}

function cleanLegacyDemoFiles() {
  const shouldClean = forceCleanDemo || courseShort !== "demo";
  if (!shouldClean) {
    console.log("⏭  Archivos demo conservados.");
    return;
  }

  for (let i = 1; i <= 8; i += 1) {
    removeFileIfExists(`demo_semana${i}.md`, { label: `demo_semana${i}.md` });
    removeFileIfExists(path.join("semanas", `demo_semana${i}.md`), {
      label: path.join("semanas", `demo_semana${i}.md`),
    });
  }
}

console.log("\n┌──────────────────────────────────────────────┐");
console.log("│ Generador Open Class UNIMINUTO desde config │");
console.log("└──────────────────────────────────────────────┘\n");
console.log(`Configuración : ${configPath}`);
console.log(`Curso         : ${courseName}`);
console.log(`Nombre corto  : ${courseShort}`);
console.log(`Semanas       : ${weeksTotal}`);
console.log(`Activas       : ${activeWeeks.map((w) => w.number).join(", ") || "ninguna"}\n`);

ensureDir("semanas");
ensureProjectAssets();
cleanLegacyDemoFiles();

writeFileSafe("slides.md", buildPortal(), { overwrite: overwritePortal, label: "slides.md" });
writeFileSafe("scripts/decks.mjs", buildDecks(), { overwrite: overwriteDecks, label: "scripts/decks.mjs" });

for (const week of allWeeks) {
  const slug = `${courseShort}_semana${week.number}`;
  const tokens = weekTokens(week);
  writeFileSafe(`${slug}.md`, replaceTokens(launcherTemplate, tokens), {
    overwrite: overwriteLaunchers,
    label: `${slug}.md`,
  });
  writeFileSafe(path.join("semanas", `${slug}.md`), replaceTokens(semanaTemplate, tokens), {
    overwrite: overwriteWeekContent,
    label: path.join("semanas", `${slug}.md`),
  });
}

if (overwritePackageScripts && fs.existsSync("package.json")) {
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));
  pkg.name = `openclass-${courseShort}`;
  pkg.description = `Presentaciones Open Class del curso ${courseName}.`;
  pkg.scripts = buildScripts();
  writeFileSafe("package.json", JSON.stringify(pkg, null, 2) + "\n", { overwrite: true, label: "package.json" });
}

if (fs.existsSync("package-lock.json")) {
  try {
    const lock = JSON.parse(fs.readFileSync("package-lock.json", "utf-8"));
    lock.name = `openclass-${courseShort}`;
    if (lock.packages && lock.packages[""]) {
      lock.packages[""].name = `openclass-${courseShort}`;
    }
    writeFileSafe("package-lock.json", JSON.stringify(lock, null, 2) + "\n", { overwrite: true, label: "package-lock.json" });
  } catch {
    console.log("⚠️  package-lock.json no se actualizó porque no parece ser JSON válido.");
  }
}

console.log("\n✅ Configuración generada.");
console.log("   Próximo paso sugerido: npm install");
console.log("   Vista de una semana:   npm run dev:s1");
console.log("   Vista completa:        npm run vista\n");
