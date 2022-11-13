import fs from "fs";

const buffer = fs.readFileSync("file-system.mjs");

console.info(buffer.toString());

fs.writeFileSync("temp.txt", "Hello world");