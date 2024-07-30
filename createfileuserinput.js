const input = process.argv;

const action = input[2];//action-> add file, remove file etc
const filename = input[3]; // filename that you want to add or remove
const filecontent = input[4] // The content which you want to write in the file

const fs = require("fs");

if(action == "add"){
    fs.writeFileSync(filename,filecontent);//function to create file
}
else if(action == "remove"){
    fs.unlinkSync(filename);//function that used to delete the file
}
else{
    console.log("Invalid Input Operation.")
}