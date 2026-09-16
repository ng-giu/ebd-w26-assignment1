// Try running this from the repo root first, on purpose:
//   node step1/hi.js
// It will fail. Read why, then run it the right way:
//   cd step1
//   node hi.js
"use strict";

const fs = require("fs");
const path = require("path");

try {
  const greeting = fs.readFileSync("greeting.txt", "utf8");
  console.log(greeting.trim());
} catch (err) {
  const lookedFor = path.resolve(process.cwd(), "greeting.txt");
  const actualFile = path.join(__dirname, "greeting.txt");

  console.log("Could not read greeting.txt.");
  console.log("");
  console.log(`Your terminal is currently in: ${process.cwd()}`);
  console.log(`It looked for the file at:     ${lookedFor}`);
  console.log(`The file actually lives at:    ${actualFile}`);
  console.log("");
  console.log("A relative path like \"greeting.txt\" is resolved from wherever");
  console.log("your terminal currently is (process.cwd()), not from where the");
  console.log("script file sits on disk.");
  console.log("");
  console.log("Fix it:");
  console.log("  cd step1");
  console.log("  node hi.js");
  process.exit(1);
}
