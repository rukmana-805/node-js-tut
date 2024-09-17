const mongoose = require("mongoose");

//Create schema
const ProductSchema = new mongoose.Schema({
    type : String,
    brand : String,
    price : Number
});

//Create modle
module.exports = mongoose.model("products",ProductSchema);//export module