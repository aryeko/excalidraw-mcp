import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ExcalidrawApp } from "./mcp-app";

createRoot(document.body).render(
  <>
    <ExcalidrawApp />
    <Analytics />
    <SpeedInsights />
  </>
);
