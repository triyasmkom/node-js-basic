import http from "http";

const server = http.createServer((request, response)=>{
    console.info(request.method);
    console.info(request.url);
    console.info(request.statusMessage);
    console.table(request.headers);

    if(request.method==="POST"){
        request.addListener("data",(data)=>{
            response.setHeader("Content-Type", "application/json");
            response.write(data);
            response.end();
        })
    } else {
        if(request.url==="/azka"){
            response.write("Hello Azka...")
        } else {
            response.write("Hello http server");
        }

        response.end();
    }

});

server.listen(3000);
