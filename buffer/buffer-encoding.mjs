const buffer = Buffer.from("Eko", "utf8");
console.info(buffer.toString("base64"));
console.info(buffer.toString("hex"));


const buffer2 = Buffer.from("RWtv", "base64url");

console.info(buffer2.toString("utf8"));