import { readdirSync } from "node:fs";

function normalizeBase(value) {
  let base = value || "/";

  if (!base.startsWith("/")) {
    base = `/${base}`;
  }

  if (!base.endsWith("/")) {
    base = `${base}/`;
  }

  return base;
}

const SITE_BASE = normalizeBase(process.env.SITE_BASE || "/");

function withBase(path = "") {
  return `${SITE_BASE}${path.replace(/^\/+/, "")}`;
}

function getWeekNumber(filename) {
  const match = filename.match(/_semana(\d+)\.md$/i);
  return match ? Number(match[1]) : 999;
}

function getDeckName(filename) {
  return filename.replace(/\.md$/i, "");
}

const rootFiles = readdirSync(process.cwd(), { withFileTypes: true })
  .filter((item) => item.isFile())
  .map((item) => item.name);

const weeklyEntries = rootFiles
  .filter((name) => /^[a-z0-9_-]+_semana\d+\.md$/i.test(name))
  .filter((name) => !name.startsWith("demo_"))
  .sort((a, b) => {
    const weekDiff = getWeekNumber(a) - getWeekNumber(b);
    return weekDiff !== 0 ? weekDiff : a.localeCompare(b);
  });

const weeklyDecks = weeklyEntries.map((entry) => {
  const name = getDeckName(entry);

  return {
    name,
    entry,
    out: `dist/semanas/${name}`,
    base: withBase(`semanas/${name}/`),
    exportable: true,
  };
});

export const decks = [
  {
    name: "openclass-main",
    entry: "slides.md",
    out: "dist",
    base: SITE_BASE,
    exportable: false,
  },
  ...weeklyDecks,
];

export default decks;