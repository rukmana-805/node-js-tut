const express = require("express");
const app = express(); //excuting the express

app.get("",(req, resp) => { //This is for home page

    const data = req.query; // This line gives an object that pass in URL Query Parama
    // how to send data in params -> localhost:5005/?name=Akash

    console.log(data.name);//data is a object and .name gives the value of the name
    resp.send("Hellow, This is Home Page Content. and this page is created by "+data.name);
})

app.listen(5005);