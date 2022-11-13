import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("triyas\n");
writer.write("hevianto\n");
writer.write("saputro\n");
writer.end();

const reader = fs.createReadStream("target.log");
// reader.read();
reader.addListener("data",(data)=>{
    console.info(data.toString());
});
