import {Console} from "console";
import fs from "fs";

const file = fs.createWriteStream("app.log");

const log = new Console({
    stdout: file,
    stderr: file,
});

log.info("Hello world");
log.error("Hello world");

const person = {
    firstName: "Azka",
    lastName: "Nufail",
}

log.table(person);