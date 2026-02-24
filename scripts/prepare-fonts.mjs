import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const fontJobs = [
  {
    source: ["assets", "Fonts", "SF Pro Text", "SFProText-Regular.ttf"],
    outDir: ["client", "public", "fonts", "sf-pro"],
    outName: "SFProText-Regular",
    type: "ttf",
  },
  {
    source: ["assets", "Fonts", "SF Pro Text", "SFProText-Medium.ttf"],
    outDir: ["client", "public", "fonts", "sf-pro"],
    outName: "SFProText-Medium",
    type: "ttf",
  },
  {
    source: ["assets", "Fonts", "SF Pro Text", "SFProText-Semibold.ttf"],
    outDir: ["client", "public", "fonts", "sf-pro"],
    outName: "SFProText-Semibold",
    type: "ttf",
  },
  {
    source: ["assets", "Fonts", "SF Pro Text", "SFProText-Bold.ttf"],
    outDir: ["client", "public", "fonts", "sf-pro"],
    outName: "SFProText-Bold",
    type: "ttf",
  },
  {
    source: ["assets", "Fonts", "Canela", "Canela Family", "Canela-Regular-Trial.otf"],
    outDir: ["client", "public", "fonts", "canela"],
    outName: "Canela-Regular",
    type: "otf",
  },
  {
    source: ["assets", "Fonts", "Canela", "Canela Family", "Canela-Medium-Trial.otf"],
    outDir: ["client", "public", "fonts", "canela"],
    outName: "Canela-Medium",
    type: "otf",
  },
  {
    source: ["assets", "Fonts", "Canela", "Canela Family", "Canela-Bold-Trial.otf"],
    outDir: ["client", "public", "fonts", "canela"],
    outName: "Canela-Bold",
    type: "otf",
  },
];

const toAbsolute = (parts) => path.join(projectRoot, ...parts);

async function loadConverter() {
  try {
    const { createFont, woff2 } = await import("fonteditor-core");
    await woff2.init();
    return { createFont };
  } catch {
    return null;
  }
}

async function convertToWoff2(createFont, sourcePath, sourceType, outPath) {
  const fontBuffer = await readFile(sourcePath);
  const font = createFont(fontBuffer, { type: sourceType });
  const woff2Buffer = font.write({ type: "woff2" });
  await writeFile(outPath, Buffer.from(woff2Buffer));
}

async function run() {
  const warnings = [];
  const converter = await loadConverter();

  for (const job of fontJobs) {
    const sourcePath = toAbsolute(job.source);
    const outDir = toAbsolute(job.outDir);
    const originalOutPath = path.join(outDir, `${job.outName}.${job.type}`);
    const woff2OutPath = path.join(outDir, `${job.outName}.woff2`);

    await mkdir(outDir, { recursive: true });
    await copyFile(sourcePath, originalOutPath);

    if (!converter) {
      warnings.push(
        `Skipped .woff2 for ${job.outName} (install dev dependency: fonteditor-core).`,
      );
      continue;
    }

    try {
      await convertToWoff2(converter.createFont, sourcePath, job.type, woff2OutPath);
    } catch (error) {
      warnings.push(`Could not convert ${job.outName} to .woff2 (${String(error)}).`);
    }
  }

  console.log("Font preparation completed.");
  if (warnings.length > 0) {
    console.log("");
    console.log("Warnings:");
    warnings.forEach((warning) => console.log(`- ${warning}`));
  }
}

run().catch((error) => {
  console.error("Font preparation failed.");
  console.error(error);
  process.exitCode = 1;
});
