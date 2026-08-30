import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");
const hasPrerenderedMarkup = rootElement.hasChildNodes();
const app = (
  <React.StrictMode>
    <App initialRoute={hasPrerenderedMarkup ? "home" : undefined} />
  </React.StrictMode>
);

if (hasPrerenderedMarkup) hydrateRoot(rootElement, app);
else createRoot(rootElement).render(app);
