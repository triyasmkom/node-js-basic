import https from "https";

const endPoint = "https://hookb.in/JKgxpz1PQEig1WBgVmz6";
const request = https.request(endPoint, {
   method: "POST",
   header: {
       "Content-Type": "application/json",
       "Accept": "application/json",
   }
},(response)=>{
    response.addListener("data", (data)=>{
        console.info(`Receive data : ${data.toString()}`);
    })
});

const body = JSON.stringify({
    firstname: "Nadhira",
    lastname: "Nisa",
})

request.write(body);
request.end();