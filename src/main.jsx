import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");
const hasPrerenderedMarkup = rootElement.hasChildNodes();
// scripts/prerender.mjs writes data-route so we hydrate the SAME page that was rendered
// into this HTML file (before: always "home", even on /about-suji or /bridal-makeup-artist-chennai).
const prerenderedRoute = rootElement.dataset.route || "home";
const app = (
  <React.StrictMode>
    <App initialRoute={hasPrerenderedMarkup ? prerenderedRoute : undefined} />
  </React.StrictMode>
);

if (hasPrerenderedMarkup) hydrateRoot(rootElement, app);
else createRoot(rootElement).render(app);
