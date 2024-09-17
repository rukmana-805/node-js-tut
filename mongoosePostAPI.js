const mongoose = require("mongoose");
const express = require("express");

require("./mongooseConnect");

const ProductModule = require("./schemaMongoose");

const app = express();

app.use(express.json()); // Used to convert string data comming from the postman/api to json format.

//POST method is basically used to post the data comming from the api/postman/website to the database.
app.post("/create",async (req,resp) => {

    const data = new ProductModule(req.body);//make a new projectmodule to insert data(req.body) comming from postman

    const result = await data.save();//used to save in the database.

    resp.send(result);//print the responce (acknowledgment).
})

app.listen(5000);