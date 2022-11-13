import timers from "timers/promises";

console.info(new Date());
const value = await timers.setTimeout(5000, "value");
console.info(new Date());
console.info(value);


for await (const startTime of timers.setInterval(1000, new Date())){
    console.info(`Start timer at ${startTime}`);
}