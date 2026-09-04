const fs = require("node:fs");
const path = require("node:path");

const outputDirectory = path.join(__dirname, "dist");

fs.rmSync(outputDirectory, { recursive: true, force: true });
fs.mkdirSync(outputDirectory, { recursive: true });
fs.copyFileSync(path.join(__dirname, "server.js"), path.join(outputDirectory, "server.js"));

console.log("Build termine : dist/server.js a ete genere.");
