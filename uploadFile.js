// Here we are going to learn about how to upload files in upload folder using Node js
//!) Install Multer npm package
//2) Make route for upload file
//3) Write code for upload file

const express = require("express");
const multer = require("multer");

const app = express();

//Use as middleware
const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"upload");// cb-> call back
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now+".jpg");
        }
    })
}).single("user_file");


app.post("/upload",upload,(req,resp) => {
    resp.send("file uploaded");
})

app.listen(5000);