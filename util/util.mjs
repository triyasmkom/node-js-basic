import util from "util";

console.info(util.format("Nama : %s", "Nadhira"));

const person = {firstName:"Nadhira", lastName: "Khairunnisa"};
console.info(util.format("Person: %j", person));
