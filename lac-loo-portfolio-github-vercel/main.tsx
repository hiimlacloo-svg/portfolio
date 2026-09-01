import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./app/page";
import MidAutumnCaseStudy from "./app/MidAutumnCaseStudy";
import "./app/globals.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Missing root element");
}

const isMidAutumnCaseStudy = window.location.pathname.replace(/\/$/, "") ===
  "/projects/mid-autumn-2026";

document.title = isMidAutumnCaseStudy
  ? "Mid-Autumn 2026 Case Study — Lac Loo"
  : "Lac Loo — Visual Designer";

createRoot(rootElement).render(
  <React.StrictMode>
    {isMidAutumnCaseStudy ? <MidAutumnCaseStudy /> : <Home />}
  </React.StrictMode>,
);
