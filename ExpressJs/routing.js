// First install express js before using it --> npm install express
const express = require("express");
const app = express(); //excuting the express

// Create routing using express
app.get("",(req, resp) => { //This is for home page
    resp.send("Hwllow, This is Home Page Content.");
})

app.get("/about", (req, resp) => {
    resp.send("Hellow, This is About Page Content.")
})

app.listen(5000)
//How can you access these pages--> localhost:5005/about -->(for about page) type in browser url