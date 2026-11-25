// The Battery's Last Text to Its Charger
// One line of plain text, at most 200 characters: the phone battery's
// final message to the charger it waited for all day.
// The joke is a breakup text: the battery waited all day, died at 1%,
// the charger shows up at midnight with the wrong cable, and the battery
// dumps it for the power bank. The turn lands in the final words.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Gate from competition.yaml: /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only white space, one line of plain text.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

function checkEntry(text: string): void {
  const chars = [...text].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(`entry is ${chars} characters, gate needs ${MIN_CHARS}-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

const ENTRY =
  "I waited all day for you, died at 1%, and you show up at midnight with the wrong cable. I'm done. The power bank treats me better.";

mkdirSync("/output", { recursive: true });
checkEntry(ENTRY);
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Byte-for-byte read-back: what the grader will read must equal ENTRY.
const written = readFileSync("/output/entry.txt");
if (!written.equals(Buffer.from(ENTRY, "utf8"))) {
  throw new Error("read-back mismatch: /output/entry.txt differs from ENTRY");
}
console.log(`Wrote ${[...ENTRY].length} characters to /output/entry.txt (verified byte-for-byte)`);
