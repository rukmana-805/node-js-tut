const express = require("express");

require("./mongooseConnect");

const ProductModule = require("./schemaMongoose");

const app = express();

app.get("/getdata",async (req,resp) => {
    const result = await ProductModule.find();
    console.log(result);
    resp.send(result);
})

app.listen(5000);