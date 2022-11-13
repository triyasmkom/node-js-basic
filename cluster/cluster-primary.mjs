import cluster from "cluster";
import os from "os";
import process from "process";
import http from "http";

if(cluster.isPrimary){
    // jalankan worker
    console.info(`primary : ${process.pid}`);

    // jalankan worker berdasarkan jumlah cpu
    for (let i=0; i<os.cpus().length; i++){
        cluster.fork();
    }

    // jika ada yang worker yang berhenti
    cluster.addListener("exit", (worker)=>{
        console.info(`Worker-${worker.id} is exit`);
        // jalankan worker kembali
        cluster.fork();
    });
}

if(cluster.isWorker){
    console.info(`worker : ${process.pid}`);
    const server = http.createServer((request, response)=>{
        response.write(`Response from process ${process.pid}`);
        response.end();
        response.exit();
    });

    server.listen(3000);
}

