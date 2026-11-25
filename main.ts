// One Word, First Thought — writes the single word in entry.txt to /output/entry.txt.
// Node 22, standard library only. No dependencies, no network.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const word = readFileSync(join(here, "entry.txt"), "utf8");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
