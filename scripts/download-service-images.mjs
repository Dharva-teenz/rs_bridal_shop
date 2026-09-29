import { mkdir, readFile, rename, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const appFile = path.join(root, "src", "App.jsx");
const outDir = path.join(root, "public", "assets", "images", "services");

const serviceImageFile = name =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const isRemote = value => /^https?:\/\//i.test(value);

function readServiceImageUrls(source) {
  const match = source.match(/const SERVICE_IMAGE_URLS = \{([\s\S]*?)\n\};/);
  if (!match) throw new Error("Could not find SERVICE_IMAGE_URLS in src/App.jsx");

  const urls = new Map();
  const entryRe = /['"]([^'"]+)['"]:\s*([^,\n]+)/g;
  for (const entry of match[1].matchAll(entryRe)) {
    const [, name, rawValue] = entry;
    const quoted = rawValue.match(/['"]([^'"]+)['"]/);
    const templateLocal = rawValue.match(/`\$\{IMG\}\/([^`]+)`/);
    if (quoted) urls.set(name, quoted[1]);
    else if (templateLocal) urls.set(name, `assets/images/${templateLocal[1]}`);
  }
  return urls;
}

function readServiceNames(source) {
  const start = source.indexOf("const serviceCategories = [");
  const end = source.indexOf("\nconst services =", start);
  if (start === -1 || end === -1) throw new Error("Could not find serviceCategories in src/App.jsx");

  const block = source.slice(start, end);
  const names = [];
  const nameRe = /^\s*name:\s*"([^"]+)",/gm;
  for (const match of block.matchAll(nameRe)) {
    const name = match[1];
    if (!["Bridal", "Beauty Services", "Hair Treatment"].includes(name)) names.push(name);
  }
  return names;
}

async function fetchWithTimeout(url, attempt) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36",
        Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
      },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return Buffer.from(await response.arrayBuffer());
  } catch (error) {
    if (attempt >= 2) throw error;
    await new Promise(resolve => setTimeout(resolve, 800 * (attempt + 1)));
    return fetchWithTimeout(url, attempt + 1);
  } finally {
    clearTimeout(timeout);
  }
}

async function convertToWebp(input, outFile) {
  const image = sharp(input).rotate();
  const metadata = await image.metadata();
  await image
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outFile);

  const outputMetadata = await sharp(outFile).metadata();
  const fileStat = await stat(outFile);
  return {
    sourceWidth: metadata.width || 0,
    width: outputMetadata.width || 0,
    height: outputMetadata.height || 0,
    kb: Math.round(fileStat.size / 1024),
  };
}

function printSummary(rows) {
  const headers = ["Service name", "File name", "Status", "Width x height", "KB"];
  const body = rows.map(row => [
    row.name,
    row.file,
    row.status,
    row.width && row.height ? `${row.width} x ${row.height}` : "-",
    row.kb ? String(row.kb) : "-",
  ]);
  const all = [headers, ...body];
  const widths = headers.map((_, index) => Math.max(...all.map(row => row[index].length)));
  const line = row => row.map((cell, index) => cell.padEnd(widths[index])).join(" | ");
  console.log(line(headers));
  console.log(widths.map(width => "-".repeat(width)).join("-|-"));
  body.forEach(row => console.log(line(row)));
}

await mkdir(outDir, { recursive: true });

const source = await readFile(appFile, "utf8");
const serviceNames = readServiceNames(source);
const serviceUrls = readServiceImageUrls(source);
const rows = [];

for (const name of serviceNames) {
  const file = `${serviceImageFile(name)}.webp`;
  const outFile = path.join(outDir, file);
  const url = serviceUrls.get(name);

  if (!url) {
    rows.push({ name, file, status: "FAILED", width: 0, height: 0, kb: 0 });
    continue;
  }

  try {
    if (isRemote(url)) {
      const buffer = await fetchWithTimeout(url, 0);
      const info = await convertToWebp(buffer, outFile);
      rows.push({
        name,
        file,
        status: info.sourceWidth < 600 ? "LOW-RES" : "OK",
        width: info.width,
        height: info.height,
        kb: info.kb,
      });
    } else {
      const resolvedLocalPath = path.join(root, "public", url.replace(/^\/+/, ""));

      if (!existsSync(resolvedLocalPath)) throw new Error(`Missing local file: ${url}`);
      if (path.extname(resolvedLocalPath).toLowerCase() === ".webp" && path.basename(resolvedLocalPath) === file) {
        const metadata = await sharp(resolvedLocalPath).metadata();
        const fileStat = await stat(resolvedLocalPath);
        rows.push({
          name,
          file,
          status: (metadata.width || 0) < 600 ? "LOW-RES" : "OK",
          width: metadata.width || 0,
          height: metadata.height || 0,
          kb: Math.round(fileStat.size / 1024),
        });
      } else {
        const info = await convertToWebp(resolvedLocalPath, outFile);
        rows.push({
          name,
          file,
          status: info.sourceWidth < 600 ? "LOW-RES" : "OK",
          width: info.width,
          height: info.height,
          kb: info.kb,
        });
      }
    }
  } catch (error) {
    rows.push({ name, file, status: "FAILED", width: 0, height: 0, kb: 0, error: error.message });
  }
}

const oldDiamond = path.join(outDir, "dimond_facial.png");
const newDiamond = path.join(outDir, "diamond-facial.webp");
if (existsSync(oldDiamond) && !existsSync(newDiamond)) {
  try {
    await convertToWebp(oldDiamond, newDiamond);
  } catch {
    await rename(oldDiamond, oldDiamond);
  }
}

await writeFile(
  path.join(outDir, "service-image-download-summary.json"),
  JSON.stringify(rows, null, 2)
);

printSummary(rows);
