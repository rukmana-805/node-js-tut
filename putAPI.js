//steps
// 1) Make put method for API
// 2) Send data from postman
// 3) Handle data in node js by request
// 4) Write code for update data in mongo db

const express = require("express");
const dbConnect = require("./dbconnect");
const app = express();

app.use(express.json());

//This method is basically used to update the data form the Database using api requist
app.put("/", async (req,resp) => {//for query params you should write app.put("/:brand",()=>{})
    let collection = await dbConnect();
    let result = await collection.updateOne(
        {price:450},
        {$set:req.body} //access through query params {req.params.brand} (look at line no 14's comment)
    )
    resp.send(result);
})

app.listen(4000);