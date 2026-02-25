import { access, copyFile, cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const distDir = path.join(rootDir, "dist", "public");
const docsDir = path.join(rootDir, "docs");

async function main() {
  try {
    await access(distDir);
  } catch {
    throw new Error("Missing dist/public. Run a build before preparing docs.");
  }

  await rm(docsDir, { recursive: true, force: true });
  await mkdir(docsDir, { recursive: true });
  await cp(distDir, docsDir, { recursive: true });
  await copyFile(path.join(docsDir, "index.html"), path.join(docsDir, "404.html"));
  await writeFile(path.join(docsDir, ".nojekyll"), "");

  console.log("Prepared docs/ for GitHub Pages branch deployment.");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
