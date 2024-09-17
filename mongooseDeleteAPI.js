const express = require("express");

require("./mongooseConnect");

const ProductModule = require("./schemaMongoose");

const app = express();

app.delete("/remove/:_id",async (req,resp) => {
    const result = await ProductModule.deleteOne(req.params);
    console.log(result);
    resp.send(result);
})

app.listen(3000);