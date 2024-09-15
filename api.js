const express = require("express");
const dbConnect = require("./dbconnect");
const app = express();

app.get("/",async (req,resp) => {

     const collection = await dbConnect();
     const result = await collection.find({}).toArray();
     console.log(result);
    resp.send(result);
})

app.listen(4001);