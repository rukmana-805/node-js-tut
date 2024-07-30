const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname,"CURD");
const filePath = `${dirPath}/apple.txt`;

//creating file
fs.writeFileSync(`${dirPath}/apple.txt`,"This is a apple dude.");

//Read file
fs.readFile(filePath,"utf8",(error,items)=>{
    if(!error) console.log(items);
})

//Append File
fs.appendFile(filePath," and filename is apple.txt",(error)=>{
    if(!error) console.log("File Updated");
})

//Rename File
fs.rename(filePath,`${dirPath}/orange.txt`,(err)=>{
    if(!err) console.log("Rename Successfully");
})

//Delete File
fs.unlinkSync(filePath);