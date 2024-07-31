//Accessing html file which is present in public folder(check)
//here we use app.use() method to access all files of html
//use method takes diffenet parameter but here we use epress.static(floderPath)

const express = require("express");
const path = require("path"); //used to get the path of public folder

const publicPath = path.join(__dirname,"public");
console.log(publicPath);
const app = express(); //executing express

app.use(express.static(publicPath)); //express.static method gives all the static pages present in that particular
//forlder and use method render it to the browser.

app.listen(4003);//Access this port to get output
