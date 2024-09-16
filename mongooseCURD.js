
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");//mongodb connection

//Create Schema
const ProductSchema = new mongoose.Schema({
    type : String,
    brand : String,
    price : Number
});

// Function for inserting data through mongoose
const insertData = async () => {
    const ProductModel = mongoose.model("products",ProductSchema);//Create a model
    const data = new ProductModel({//create a new productmodel object to insert it
        type : "mobile",
        brand : "Nothing",
        price : 650
    });

    const result = await data.save();
    console.log(result);
}

//insertData();

//Function to update the value in database through mongoose
const updateData = async () => {
    const ProModel = mongoose.model("products",ProductSchema);

    const result = await ProModel.updateOne(
        {price : 76},//key-> which record you want to update (whose price is 76)
        {$set : {brand : "oppo"}}// what you want to update (change brand name as oppo)
    );

    console.log(result);
}

// updateData();

//Function to delete record from the database using mongoose
const deleteData = async () => {
    const ProductMod = mongoose.model("products",ProductSchema);

    const result = await ProductMod.deleteOne(
        {price : 76}//key-> which record you want to delete (whose price is 76)
    );

    console.log(result);
}

// deleteData();

//Function to read all data from database using mongoose
const readData = async () => {
    const ProMod = mongoose.model("products",ProductSchema);

    const result = await ProMod.find();//for all record
    // you can also find a particular or  group of record that follow a condition by giving find({brand:"xiomi"})
    
    console.log(result);
}

readData();