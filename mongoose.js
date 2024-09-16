//MONGOOSE :-> Mongoose is basically the advanmce version of the mongodb npm package which allows us to put some
//restriction on the database by specifing SCHEMA and MODEL

// SCHEMA :-> Schema is basically used to put some validation to the database for exmp if in db we have 4 record
// and someone want to insert 5 or 6 field then it will be restrict that and only 4 field will be inserted.

// MODEL :-> mongoose.model(collection_name,Schema); This is basically used to put the particular schema to the
// particular collections and then we create a new data through the model and insert it.

const mongoose = require("mongoose");

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-comm");//For connecting database mongoose.connect("url");

    //Create a schema
    const ProductSchema = new mongoose.Schema({ //Other than these 3 field it will not accept any filed
        type : String,
        brand : String,
        price : Number
    });

    //Create a model
    const ProductModel = mongoose.model("products",ProductSchema);//1st parameter is collection name and 2nd is
    //schema

    //create a new data and insert into database
    //when ever we want to insert a new record, we always create a new ProductModel
    const data = new ProductModel({
        type : "laptop",
        brand : "hp",
        price : 900
    });

    const result = await data.save();//used to save in database (it is optional)
    console.log(result);//gives the result which are insetrted.
}

main();