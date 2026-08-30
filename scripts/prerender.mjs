import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const root = process.cwd();
const outputPath = path.join(root, "dist", "index.html");
const rootElement = '<div id="root"></div>';
const vite = await createServer({ root, appType: "custom", server: { middlewareMode: true }, logLevel: "error" });

try {
  const { default: App } = await vite.ssrLoadModule("/src/App.jsx");
  const markup = renderToString(React.createElement(App));
  const html = await readFile(outputPath, "utf8");

  if (!html.includes(rootElement)) {
    throw new Error("Could not find the React root in the production HTML.");
  }

  await writeFile(outputPath, html.replace(rootElement, `<div id="root">${markup}</div>`));
} finally {
  await vite.close();
}
