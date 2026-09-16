// Same idea as step1, minus the trap. Run this from inside step2/:
//   cd ..
//   cd step2
//   node okay.js
"use strict";

const fs = require("fs");

const note = fs.readFileSync("note.txt", "utf8").trim();

console.log("okay.");
console.log(note);
console.log("");
console.log("Next: cd .. && cd assignment && node generate.js");
