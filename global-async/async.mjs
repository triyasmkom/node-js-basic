function samplePromise(){
    return Promise.resolve("Test Promise");
}

const name = await samplePromise();
console.info(name);

