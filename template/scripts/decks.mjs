function normalizeBase(value) {
  let base = value || "/";
  if (!base.startsWith("/")) base = `/${base}`;
  if (!base.endsWith("/")) base = `${base}/`;
  return base;
}

const SITE_BASE = normalizeBase(process.env.SITE_BASE || "/");

function withBase(path = "") {
  return `${SITE_BASE}${path.replace(/^\/+/, "")}`;
}

export const decks = [
  {
    name: "openclass-demo",
    entry: "slides.md",
    out: "dist",
    base: SITE_BASE,
    exportable: false,
  },
  {
    name: "demo_semana1",
    entry: "demo_semana1.md",
    out: "dist/semanas/demo_semana1",
    base: withBase("semanas/demo_semana1/"),
    exportable: true,
  },
];
