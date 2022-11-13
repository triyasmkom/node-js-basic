import path from "path";


const file = "user/triyas/data/contoh.txt"

console.info(path.sep);
console.info(path.delimiter);
console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));
console.info(path.parse(file));