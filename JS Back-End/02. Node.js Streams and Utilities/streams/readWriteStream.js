const fs = require("fs");
const path = require("path");

// Copy ?
const readStream = fs.createReadStream(path.resolve(__dirname, "input.txt"));
const writeStream = fs.createWriteStream(path.resolve(__dirname, "output.txt"));


readStream.on('data', (chunk)=>{
    writeStream.write(chunk);
})

readStream.on('end', ()=>{
    console.log('finished');
    writeStream.end();
})