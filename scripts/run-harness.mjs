// Bundles the harness with esbuild (Next.js modules aliased to stubs) and runs it. Dev-only.
import { build } from "esbuild";
import { pathToFileURL } from "node:url";

await build({
  entryPoints: ["scripts/harness.mts"],
  bundle: true, format: "esm", platform: "node", target: "node20", outfile: "scripts/.harness-out/harness.bundle.mjs",
  jsx: "automatic", loader: { ".css": "empty", ".png": "file" },
  external: ["react", "react-dom", "marked", "node:*"],
  alias: {
    "next/link": "./scripts/stubs/next/link.tsx", "next/image": "./scripts/stubs/next/image.tsx", "next/font/google": "./scripts/stubs/next/font-google.ts",
    "next/navigation": "./scripts/stubs/next/navigation.ts", "next/script": "./scripts/stubs/next/script.tsx", "next/server": "./scripts/stubs/next/server.ts",
    "next/og": "./scripts/stubs/next/og.ts", "next": "./scripts/stubs/next/index.ts", "@": ".",
  },
  logLevel: "error",
});
await import(pathToFileURL("./scripts/.harness-out/harness.bundle.mjs").href);
