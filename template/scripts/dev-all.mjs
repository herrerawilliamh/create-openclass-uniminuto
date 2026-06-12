import { decks } from "./decks.mjs";
import { spawn } from "node:child_process";

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
];

const semanas = decks.filter((deck) => deck.entry !== "slides.md");
const BASE_PORT = 3000;

const commands = [
  `slidev slides.md --open --port ${BASE_PORT}`,
  ...semanas.map((deck, index) => `slidev ${deck.entry} --port ${BASE_PORT + index + 1}`),
];

const names = ["portal", ...semanas.map((deck) => deck.name)].join(",");
const colors = COLORS.slice(0, commands.length).join(",");

console.log("\n🚀 Iniciando servidores de desarrollo...");
console.log(`   portal → http://localhost:${BASE_PORT}`);
semanas.forEach((deck, index) => {
  console.log(`   ${deck.name} → http://localhost:${BASE_PORT + index + 1}`);
});
console.log("");

spawn("concurrently", ["-n", names, "-c", colors, ...commands], {
  stdio: "inherit",
  shell: true,
});
