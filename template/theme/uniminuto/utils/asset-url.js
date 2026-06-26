export function assetUrl(path = "") {
  if (!path) return path;

  if (/^(https?:|data:|blob:|#)/.test(path)) {
    return path;
  }

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;

  const normalizedPath = path.startsWith("/")
    ? path.slice(1)
    : path.replace(/^\.\//, "");

  return `${normalizedBase}${normalizedPath}`;
}
