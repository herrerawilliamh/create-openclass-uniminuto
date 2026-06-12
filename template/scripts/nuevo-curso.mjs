/**
 * Asistente interactivo para crear openclass.config.json y generar el curso.
 *
 * Uso:
 *   npm run nuevo
 */
import { createInterface } from "node:readline/promises";
import { spawnSync } from "node:child_process";
import fs from "node:fs";

const rl = createInterface({ input: process.stdin, output: process.stdout });

function ask(question, fallback = "") {
  const hint = fallback ? ` [${fallback}]` : "";
  return rl.question(`  ${question}${hint}: `);
}

function cleanShortName(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .trim();
}

console.log("\n┌──────────────────────────────────────────┐");
console.log("│ Nuevo curso Open Class · UNIMINUTO       │");
console.log("└──────────────────────────────────────────┘\n");

const shortRaw = await ask("Nombre corto del curso. Ejemplo: iot, bigdata, gestionseguridad");
const shortName = cleanShortName(shortRaw);
const fullName = (await ask("Nombre completo del curso")).trim();
const year = (await ask("Año", String(new Date().getFullYear()))).trim() || String(new Date().getFullYear());
const weeksTotal = 8;
console.log("  Número de semanas [8]: 8");
const description = (await ask("Descripción breve del curso", "Agrega aquí la descripción general del curso")).trim();

if (!shortName || !fullName) {
  console.error("\n❌ El nombre corto y el nombre completo son obligatorios.\n");
  process.exit(1);
}

const activeRaw = (await ask("Semanas activas iniciales separadas por coma", "1")).trim() || "1";
const activeWeeks = activeRaw
  .split(",")
  .map((value) => Number(value.trim()))
  .filter((value) => Number.isInteger(value) && value >= 1 && value <= weeksTotal);

const configureWeeks = (await ask("¿Configurar título y fecha de cada semana ahora? S/N", "S")).trim().toLowerCase();
const weeks = [];

for (let i = 1; i <= weeksTotal; i++) {
  if (configureWeeks === "n" || configureWeeks === "no") {
    weeks.push({
      number: i,
      title: `Título semana ${i}`,
      date: year,
      centralTheme: "Tema central de la semana",
      activity: "Actividad o evaluación relacionada",
    });
    continue;
  }

  console.log(`\n  Semana ${i}`);
  const title = (await ask("Título", `Título semana ${i}`)).trim() || `Título semana ${i}`;
  const date = (await ask("Fecha", year)).trim() || year;
  const centralTheme = (await ask("Tema central", title)).trim() || title;
  const activity = (await ask("Actividad/evaluación relacionada", "Actividad o evaluación relacionada")).trim() || "Actividad o evaluación relacionada";
  weeks.push({ number: i, title, date, centralTheme, activity });
}

rl.close();

const config = {
  course: {
    shortName,
    fullName,
    year,
    description,
    openClassLabel: "Open Class",
  },
  generation: {
    weeksTotal: 8,
    activeWeeks: activeWeeks.length ? activeWeeks : [1],
    exportPortal: false,
    overwriteLaunchers: true,
    overwritePortal: true,
    overwriteDecks: true,
    overwritePackageScripts: true,
    overwriteWeekContent: false,
  },
  weeks,
};

fs.writeFileSync("openclass.config.json", JSON.stringify(config, null, 2) + "\n", "utf-8");
console.log("\n✓ openclass.config.json creado");

const result = spawnSync(process.execPath, ["scripts/generar-desde-config.mjs", "--force"], {
  stdio: "inherit",
  shell: false,
});

process.exit(result.status ?? 0);
