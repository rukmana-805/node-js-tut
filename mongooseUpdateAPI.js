const express = require("express");

require("./mongooseConnect");

const ProductModule = require("./schemaMongoose");

const app = express();

app.use(express.json());

app.put("/update/:_id",async (req,resp) => {
    const result = await ProductModule.updateOne(
        {_id : req.params},
        {$set : req.body}
    );
    console.log(result);
    resp.send(result);
})

app.listen(4000);