import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("zlib.mjs.txt");
const result = zlib.unzipSync(source);

fs.writeFileSync("zlib-decompres.mjs.txt", result);