import { spawn } from "node:child_process";
import { decks } from "./decks.mjs";

const COLORS = [
  "bgBlue.bold",
  "bgGreen.bold",
  "bgYellow.bold",
  "bgMagenta.bold",
  "bgCyan.bold",
  "bgRed.bold",
  "blue.bold",
  "green.bold",
  "yellow.bold",
  "magenta.bold",
  "cyan.bold",
  "red.bold",
];

const BASE_PORT = 3000;

const weeklyDecks = decks.filter((deck) => deck.entry !== "slides.md");

const commands = [
  `slidev slides.md --open --port ${BASE_PORT}`,
  ...weeklyDecks.map((deck, index) => {
    return `slidev ${deck.entry} --port ${BASE_PORT + index + 1}`;
  }),
];

const names = ["portal", ...weeklyDecks.map((deck) => deck.name)].join(",");
const colors = COLORS.slice(0, commands.length).join(",");

console.log("");
console.log("🚀 Iniciando servidores de desarrollo...");
console.log(`   portal → http://localhost:${BASE_PORT}`);

weeklyDecks.forEach((deck, index) => {
  console.log(`   ${deck.name} → http://localhost:${BASE_PORT + index + 1}`);
});

console.log("");

const child = spawn("concurrently", ["-n", names, "-c", colors, ...commands], {
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});