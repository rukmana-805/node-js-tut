//steps
// 1) Make delete method for API
// 2) Send data from postman
// 3) Handle data in node js by request
// 4) Write code for delete data in mongo db

const express = require("express");
const dbConnect = require("./dbconnect");
const mongodb = require("mongodb");

//app.use(express.json());

const app = express();

app.delete("/:id", async (req,resp) => {//This is how we access id or any attiributs through params

    console.log(req.params.id);//Print the id which comming from the params

    let collection = await dbConnect();//database connection

    let result = await collection.deleteOne({_id : new mongodb.ObjectId(req.params.id)});//we mentioned the id as _id
    // and in mongodb id created it self and it is a object that's why we access the id through ObjectId function

    resp.send(result);
})

app.listen(3000);