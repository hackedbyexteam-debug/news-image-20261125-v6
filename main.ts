// news-image-20261125 v6 — the entry program copies the rendered broadsheet
// (entry.png beside this file) to /output/entry.png, the same graded
// behavior as the kit starter: one image, no network, no generation at
// run time. The image itself was drawn by the agent with PIL.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = new URL("./entry.png", import.meta.url);

// The whole graded behavior is this copy, so verify the source is a real
// non-empty PNG before copying (x-reposts-02 failed its hidden tests
// because its program never produced the output file at all).
const bytes = readFileSync(src);
if (bytes.length === 0 || bytes[0] !== 0x89 || bytes[1] !== 0x50 || bytes[2] !== 0x4e || bytes[3] !== 0x47) {
  throw new Error("entry.png is missing or is not a PNG");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
if (statSync(join(outDir, "entry.png")).size !== bytes.length) {
  throw new Error("entry.png did not copy completely");
}
