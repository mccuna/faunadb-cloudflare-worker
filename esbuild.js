const { build } = require("esbuild");

build({
  entryPoints: ["src/index.ts"],
  outdir: "build",
  bundle: true,
  sourcemap: true,
  format: "esm",
  logLevel: "info",
});
