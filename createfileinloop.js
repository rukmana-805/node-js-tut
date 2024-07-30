const fs = require("fs");
const path = require("path");//used to get path

//const dirPath = path.join(__dirname); //gives the current directory path-> C:\\Users\HP\Desktop\Node Js learnig
const dirPath = path.join(__dirname,"Files") //it takes 2nd parameter of file or folder name

//Creating file through loop
for(i=0;i<5;i++){
    fs.writeFileSync(dirPath+"/hellow"+i+".txt","This file created through looping in createfileinloop file");
}

//Accessing files of a particulat folder
fs.readdir(dirPath,(error,files)=>{ //used to read a folder(directory) 1st parameter is directory path and 2nd is 
    //call back function and callback function take first paramter as error and second is files which is a array

    //console.log(files); // gives a array which contain all the file of that particular folder
    //you can also access it like -> files[0]
    //accessing all file using forEach loop
    files.forEach((items)=>{
        console.log(items); // print all file name
    })

})
