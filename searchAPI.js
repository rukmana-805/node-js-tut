//Search API in Node js with mongodb :-> Search items using regx from database
//steps
// 1) Make a simple GET route for api 
// 2) Search with single filed 
// 3) Search with multiple fields
// 4) Test api

//for more theory check the copy......

const express = require("express");
require("./mongooseConnect");

const ProductModle = require("./schemaMongoose");

const app = express();

app.get("/search/:key", async (req,resp) => {//On the basic of key that are passes through the params we basically
    //find the items....
    
    let result = await ProductModle.find(
        {
            "$or":[
                {"type" : {$regex : req.params.key} },
                {"brand" : {$regex : req.params.key}}
            ]
        }
    );
    console.log(result);
    resp.send(result);
})

app.listen(3000);