// Build step 2: turn the single Vite SPA shell (dist/index.html) into one real HTML file per URL.
//
//   /                              -> dist/index.html
//   /bridal-makeup-artist-chennai  -> dist/bridal-makeup-artist-chennai/index.html
//   /about-suji                    -> dist/about-suji/index.html
//
// Each file gets its OWN <title>, description, canonical, Open Graph tags, JSON-LD and
// server-rendered page content, so Google sees the right page even before it runs any JavaScript.
// The script FAILS THE BUILD if anything is missing (before, it could silently ship an empty page).

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const root = process.cwd();
const dist = path.join(root, "dist");
const SITE_URL = "https://www.rsbridal.in";
const EMPTY_ROOT = '<div id="root"></div>';

const vite = await createServer({
  root,
  appType: "custom",
  server: { middlewareMode: true },
  // We only SSR-load our own source here, so skip the dependency scan (it printed scary
  // errors and could leave the prerender half-finished).
  optimizeDeps: { noDiscovery: true, include: [] },
  logLevel: "error",
});

const escAttr = value => String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const escText = value => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const escJson = data => JSON.stringify(data).replace(/</g, "\\u003c");

function mustReplace(html, regex, replacer, label) {
  if (!regex.test(html)) throw new Error(`prerender: could not find ${label} in dist/index.html`);
  regex.lastIndex = 0;
  return html.replace(regex, replacer);
}

function setMeta(html, attr, key, value) {
  const re = new RegExp(`(<meta\\s[^>]*?${attr}="${key}"[^>]*?content=")[^"]*(")`);
  return mustReplace(html, re, (_, a, b) => `${a}${escAttr(value)}${b}`, `<meta ${attr}="${key}">`);
}

function applySeo(html, seo) {
  html = mustReplace(html, /<title>[\s\S]*?<\/title>/, () => `<title>${escText(seo.title)}</title>`, "<title>");
  html = setMeta(html, "name", "description", seo.description);
  html = setMeta(html, "property", "og:title", seo.ogTitle);
  html = setMeta(html, "property", "og:description", seo.ogDescription);
  html = setMeta(html, "property", "og:url", seo.ogUrl);
  html = setMeta(html, "property", "og:type", seo.ogType);
  html = setMeta(html, "property", "og:image", seo.ogImage);
  html = setMeta(html, "name", "twitter:title", seo.twitterTitle);
  html = setMeta(html, "name", "twitter:description", seo.twitterDescription);
  html = setMeta(html, "name", "twitter:image", seo.twitterImage);
  html = mustReplace(html, /(<link\s+rel="canonical"\s+href=")[^"]*(")/, (_, a, b) => `${a}${seo.canonical}${b}`, "canonical link");
  html = mustReplace(html, /(<link\s+rel="alternate"\s+hreflang="[^"]+"\s+href=")[^"]*(")/g, (_, a, b) => `${a}${seo.canonical}${b}`, "hreflang links");
  return html;
}

function swapSchemas(html, schemas) {
  // The template carries the HOME page's schema + FAQ schema. Other pages must not inherit them
  // (FAQ markup has to match the FAQ that is actually visible on that page).
  html = html.replace(/<script id="rs-bridal-(?:homepage|faq)-schema" type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, "");
  const tags = schemas.map(({ id, data }) => `    <script id="${id}" type="application/ld+json">${escJson(data)}</script>\n`).join("");
  return mustReplace(html, /<\/head>/, () => `${tags}  </head>`, "</head>");
}

try {
  const appModule = await vite.ssrLoadModule("/src/App.jsx");
  const chennai = await vite.ssrLoadModule("/src/pages/BridalMakeupChennai.jsx");
  const about = await vite.ssrLoadModule("/src/pages/AboutSuji.jsx");
  const App = appModule.default;

  const template = await readFile(path.join(dist, "index.html"), "utf8");
  if (!template.includes(EMPTY_ROOT)) {
    throw new Error('prerender: dist/index.html has no empty <div id="root"></div> (already prerendered? run a fresh build)');
  }

  const routes = [
    { urlPath: "/", route: "home", seo: appModule.HOME_SEO_METADATA, schemas: null },
    { urlPath: "/bridal-makeup-artist-chennai", route: "bridal-makeup-artist-chennai", seo: chennai.PAGE_SEO, schemas: chennai.PAGE_STRUCTURED_DATA },
    { urlPath: "/about-suji", route: "about-suji", seo: about.ABOUT_SUJI_SEO, schemas: about.PAGE_STRUCTURED_DATA },
  ];

  for (const { urlPath, route, seo, schemas } of routes) {
    if (!seo?.title || !seo?.canonical) throw new Error(`prerender: missing SEO data for ${urlPath}`);

    const markup = renderToString(React.createElement(App, { initialRoute: route }));
    if (markup.length < 2000 || !markup.includes("<h1")) {
      throw new Error(`prerender: rendered markup for ${urlPath} looks empty (${markup.length} chars, h1: ${markup.includes("<h1")})`);
    }

    let html = template.replace(EMPTY_ROOT, `<div id="root" data-route="${route}">${markup}</div>`);
    html = applySeo(html, seo);
    if (schemas) html = swapSchemas(html, schemas);

    const outFile = urlPath === "/" ? path.join(dist, "index.html") : path.join(dist, urlPath.slice(1), "index.html");
    await mkdir(path.dirname(outFile), { recursive: true });
    await writeFile(outFile, html);
    console.log(`prerendered ${urlPath.padEnd(31)} -> ${path.relative(root, outFile)}  (${(html.length / 1024).toFixed(0)} KB)`);
  }

  // Real 404 (Vercel serves dist/404.html with a 404 status for unknown URLs).
  await writeFile(
    path.join(dist, "404.html"),
    `<!doctype html>
<html lang="en-IN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page not found | RS Bridal</title>
    <meta name="robots" content="noindex" />
    <style>body{font-family:Georgia,serif;background:#fffdfb;color:#2b1f1c;display:grid;place-items:center;min-height:100vh;margin:0;text-align:center}a{color:#7a111a}</style>
  </head>
  <body>
    <main>
      <h1>Page not found</h1>
      <p><a href="${SITE_URL}/">Go to the RS Bridal home page</a></p>
    </main>
  </body>
</html>
`
  );
  console.log("wrote dist/404.html");
} finally {
  await vite.close();
}
