/**
 * Genera o actualiza una Open Class Slidev a partir de openclass.config.json.
 *
 * Uso principal:
 *   npm run config
 *   npm run config -- --force
 *   node scripts/generar-desde-config.mjs --config config/openclass.config.iot-ejemplo.json --force
 *
 * Principio:
 * - openclass.config.json es la fuente de verdad.
 * - generation.activeWeeks define qué semanas aparecen en el portal, exportaciones y deploy.
 * - No sobrescribe el contenido académico en semanas/*.md salvo con --force o overwriteWeekContent=true.
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

const FALLBACK_FAVICON_PNG_BASE64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/p9sAAAAASUVORK5CYII=";

const REQUIRED_THEME_ASSETS = [
  "public/fondos/slide-01-portada.png",
  "public/fondos/slide-05-template.png",
  "public/fondos/slide-06-cierre.png",
  "public/imagenes/avion.png",
  "public/imagenes/favicon.png",
  "public/favicon.png",
];

function fail(message) {
  console.error(`\n❌ ${message}\n`);
  process.exit(1);
}

function readJson(filePath) {
  if (!fs.existsSync(filePath)) {
    fail(`No se encontró el archivo de configuración: ${filePath}`);
  }

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

function uniqueNumbers(values) {
  return [...new Set(values.map(Number))]
    .filter((value) => Number.isInteger(value))
    .sort((a, b) => a - b);
}

function replaceTokens(template, tokens) {
  return Object.entries(tokens).reduce((content, [key, value]) => {
    return content.replaceAll(`{{${key}}}`, String(value ?? ""));
  }, template);
}

function readTemplate(filePath, fallback) {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf-8") : fallback;
}

const config = readJson(configPath);
const course = config.course || {};
const generation = config.generation || {};

const courseShort = cleanShortName(
  course.shortName || config.shortName || config.courseCode || "curso",
);

const courseName = String(
  course.fullName || course.name || config.courseName || "Nombre del curso",
).trim();

const courseYear = String(course.year || config.year || new Date().getFullYear()).trim();

const description = String(
  course.description || config.description || "Agrega aquí la descripción general del curso.",
).trim();

const openClassLabel = String(course.openClassLabel || "Open Class").trim();

const weeksTotal = Number(
  generation.weeksTotal ||
    config.weeksTotal ||
    config.totalWeeks ||
    asArray(config.weeks).length ||
    8,
);

if (!courseShort) fail("El campo course.shortName es obligatorio.");
if (!courseName) fail("El campo course.fullName es obligatorio.");
if (!Number.isInteger(weeksTotal) || weeksTotal < 1) {
  fail("generation.weeksTotal debe ser un número entero mayor o igual a 1.");
}

const configuredWeeks = new Map(
  asArray(config.weeks)
    .filter((week) => Number.isInteger(Number(week.number)))
    .map((week) => [Number(week.number), week]),
);

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

const activeWeeksRaw = asArray(generation.activeWeeks ?? config.activeWeeks);

const activeWeekNumbers = activeWeeksRaw.length
  ? uniqueNumbers(activeWeeksRaw).filter((number) => number >= 1 && number <= weeksTotal)
  : allWeeks
      .filter((week) => week.status !== "draft" && week.status !== "inactive")
      .map((week) => week.number);

const activeWeeks = allWeeks.filter((week) => activeWeekNumbers.includes(week.number));

const overwriteLaunchers = generation.overwriteLaunchers !== false || force;
const overwritePortal = generation.overwritePortal !== false || force;
const overwriteDecks = generation.overwriteDecks !== false || force;
const overwritePackageScripts = generation.overwritePackageScripts !== false || force;
const overwriteWeekContent = generation.overwriteWeekContent === true || force;
const exportPortal = generation.exportPortal === true;

const semanaTemplate = readTemplate(
  "plantillas/semana.md",
  `---
layout: slide-01-portada
---

::title::
{{COURSE_NAME}}

::week::
Semana {{WEEK_NUMBER}} — {{WEEK_TITLE}}

::date::
{{WEEK_DATE}}

---
layout: slide-08-titulo-texto
---

::title::
Tema central

::content::
{{WEEK_THEME}}

---
layout: slide-12-cierre
---
`,
);

const launcherTemplate = readTemplate(
  "plantillas/launcher.md",
  `---
theme: ./theme/uniminuto
title: {{COURSE_NAME}} — Semana {{WEEK_NUMBER}} — {{WEEK_TITLE}}
favicon: /favicon.png
codeCopy: true
transition: fade
routerMode: hash
drawings:
  persist: false
src: ./semanas/{{COURSE_SHORT}}_semana{{WEEK_NUMBER}}.md
---
`,
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

  return `### **Semana ${week.number}**

<a href="./semanas/${slug}/#/1" target="_self">${week.title}</a>

<a href="./descargas/${slug}.pdf" download>Descargar PDF</a> · <a href="./descargas/${slug}.pptx" download>Descargar PPTX</a>`;
}

function buildPortal() {
  const midpoint = Math.ceil(activeWeeks.length / 2);

  const left = activeWeeks.length
    ? activeWeeks
        .filter((_, index) => index < midpoint)
        .map(portalWeekItem)
        .join("\n\n")
    : "### Sin semanas activas\n\nEjecuta `npm run semana -- 1` para generar la primera semana.";

  const right =
    activeWeeks
      .filter((_, index) => index >= midpoint)
      .map(portalWeekItem)
      .join("\n\n") ||
    "### Próximamente\n\nActiva más semanas con `npm run semana -- 2`, `npm run semana -- 3` y así sucesivamente.";

  return `---
theme: ./theme/uniminuto
title: ${courseName} — ${openClassLabel}
favicon: /favicon.png
codeCopy: true
transition: fade
routerMode: hash
drawings:
  persist: false
layout: slide-01-portada
---

::title::
${courseName}

::week::
${openClassLabel}

::date::
${courseYear}

---
layout: slide-08-titulo-texto
---

::title::
Descripción general del curso

::content::
${description}

---
layout: slide-08-titulo-texto
---

::title::
Ruta de aprendizaje

::content::
El curso se organiza en semanas. Cada semana cuenta con un lanzador raíz y un archivo interno en la carpeta \`semanas/\`.

Las presentaciones activas se controlan desde \`openclass.config.json\` mediante el campo \`generation.activeWeeks\`.

---
layout: slide-10-titulo-dos-columnas
---

::title::
Presentaciones disponibles

::left::
${left}

::right::
${right}

---
layout: slide-12-cierre
---
`;
}

function buildDecks() {
  const entries = [
    `function normalizeBase(value) {
  let base = value || "/";

  if (!base.startsWith("/")) {
    base = \`/\${base}\`;
  }

  if (!base.endsWith("/")) {
    base = \`\${base}/\`;
  }

  return base;
}

const SITE_BASE = normalizeBase(process.env.SITE_BASE || "/");

function withBase(value = "") {
  return \`\${SITE_BASE}\${value.replace(/^[/]+/, "")}\`;
}

export const decks = [
  {
    name: "openclass-${courseShort}",
    entry: "slides.md",
    out: "dist",
    base: SITE_BASE,
    exportable: ${exportPortal ? "true" : "false"},
  },`,
  ];

  for (const week of activeWeeks) {
    const slug = `${courseShort}_semana${week.number}`;

    entries.push(`  {
    name: "${slug}",
    entry: "${slug}.md",
    out: "dist/semanas/${slug}",
    base: withBase("semanas/${slug}/"),
    exportable: true,
  },`);
  }

  entries.push(`];

export default decks;
`);

  return entries.join("\n");
}

function buildScripts() {
  const scripts = {
    dev: "slidev slides.md --open --port 3000",
    config: "node scripts/generar-desde-config.mjs",
    semana: "node scripts/semana.mjs",
    "pages:check": "node scripts/preparar-github-pages.mjs",
    "actualizar:tema": "npm create openclass-uniminuto@latest . -- --update-theme",
    "actualizar:tema:preview": "npm run actualizar:tema && npm run config && npm run dev",
  };

  for (let i = 1; i <= weeksTotal; i++) {
    const slug = `${courseShort}_semana${i}`;
    scripts[`dev:s${i}`] = `slidev ${slug}.md --open --port ${3000 + i}`;
  }

  scripts.clean = "node -e \"require('fs').rmSync('dist',{recursive:true,force:true})\"";
  scripts["clean:downloads"] =
    "node -e \"require('fs').rmSync('public/descargas',{recursive:true,force:true}); require('fs').mkdirSync('public/descargas',{recursive:true})\"";
  scripts["clean:cache"] =
    "node -e \"require('fs').rmSync('.slidev',{recursive:true,force:true}); require('fs').rmSync('node_modules/.vite',{recursive:true,force:true})\"";

  scripts["build:index"] = "slidev build slides.md --out dist --base / --without-notes";

  for (let i = 1; i <= weeksTotal; i++) {
    const slug = `${courseShort}_semana${i}`;
    scripts[`build:s${i}`] =
      `slidev build ${slug}.md --out dist/semanas/${slug} --base /semanas/${slug}/ --without-notes`;
  }

  scripts["build:all"] = "node scripts/build-site.mjs";
  scripts["build:incremental"] = "node scripts/build-incremental.mjs";

  scripts["export:downloads"] = "node scripts/export-downloads.mjs";
  scripts["export:incremental"] = "node scripts/export-incremental.mjs";

  scripts.vista =
    "npm run config && npm run clean && npm run export:downloads && npm run build:all && http-server dist -p 4173 -c-1 -o";

  scripts.publicar = "node scripts/publicar.mjs";
  scripts["dev:todo"] = "node scripts/dev-all.mjs";
  scripts.nuevo = "node scripts/nuevo-curso.mjs";
  scripts["zip:template"] = "node scripts/zip-template.mjs";

  scripts["preview:static"] = "npm run config && npm run build:all && http-server dist -p 4173 -c-1";
  scripts["preview:pages"] =
    "npm run config && npm run export:downloads && npm run build:all && http-server dist -p 4173 -c-1";

  scripts["pages:build"] = "npm run config && npm run export:downloads && npm run build:all";
  scripts["pages:preview"] = "npm run preview:pages";

  return scripts;
}

function ensureProjectAssets() {
  ensureDir("public");
  ensureDir("public/fondos");
  ensureDir("public/descargas");
  ensureDir("public/imagenes");
  ensureDir("public/videos");

  writeFileSafe("public/descargas/.gitkeep", "", {
    overwrite: false,
    label: "public/descargas/.gitkeep",
  });

  writeFileSafe("public/videos/.gitkeep", "", {
    overwrite: false,
    label: "public/videos/.gitkeep",
  });

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
    writeBinaryFileIfMissing(rootFavicon, FALLBACK_FAVICON_PNG_BASE64, {
      label: rootFavicon,
    });

    writeBinaryFileIfMissing(imageFavicon, FALLBACK_FAVICON_PNG_BASE64, {
      label: imageFavicon,
    });
  }

  const missingAssets = REQUIRED_THEME_ASSETS.filter((asset) => !fs.existsSync(asset));

  if (missingAssets.length) {
    console.log("\n⚠️  Recursos visuales obligatorios faltantes:");
    for (const asset of missingAssets) {
      console.log(`   - ${asset}`);
    }
    console.log("   El proyecto puede generarse, pero algunas diapositivas podrían verse incompletas.\n");
  }
}

function cleanLegacyDemoFiles() {
  const shouldClean = forceCleanDemo || courseShort !== "demo";

  if (!shouldClean) {
    console.log("⏭  Archivos demo conservados.");
    return;
  }

  for (let i = 1; i <= 8; i += 1) {
    removeFileIfExists(`demo_semana${i}.md`, {
      label: `demo_semana${i}.md`,
    });

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
console.log(`Activas       : ${activeWeeks.map((week) => week.number).join(", ") || "ninguna"}\n`);

ensureDir("semanas");
ensureProjectAssets();
cleanLegacyDemoFiles();

writeFileSafe("slides.md", buildPortal(), {
  overwrite: overwritePortal,
  label: "slides.md",
});

writeFileSafe("scripts/decks.mjs", buildDecks(), {
  overwrite: overwriteDecks,
  label: "scripts/decks.mjs",
});

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

  writeFileSafe("package.json", JSON.stringify(pkg, null, 2) + "\n", {
    overwrite: true,
    label: "package.json",
  });
}

if (fs.existsSync("package-lock.json")) {
  try {
    const lock = JSON.parse(fs.readFileSync("package-lock.json", "utf-8"));

    lock.name = `openclass-${courseShort}`;

    if (lock.packages && lock.packages[""]) {
      lock.packages[""].name = `openclass-${courseShort}`;
    }

    writeFileSafe("package-lock.json", JSON.stringify(lock, null, 2) + "\n", {
      overwrite: true,
      label: "package-lock.json",
    });
  } catch {
    console.log("⚠️  package-lock.json no se actualizó porque no parece ser JSON válido.");
  }
}

console.log("\n✅ Configuración generada.");
console.log("   Próximo paso sugerido: npm install");
console.log("   Vista de una semana:   npm run dev:s1");
console.log("   Vista completa:        npm run vista\n");