const express = require('express');
const app = express();

//Template engine used to load dynamic pages--> ejs is the example og it

//First install the ejs package through the command npm install ejs
//Create a folder called view and create some dynamic pages with extension .ejs

//the set up it like below
app.set("view engine","ejs");

app.get("/profile",(_,resp) => {
    const user = {
        name : "Akash Behera",
        age : 21
    }
    resp.render(__dirname+"/view/profile",{user});// render method render that particular ejs page and also send
    //responce in 2nd parameter to the profile page. Check profile page in view folder to know how to use it dynamically
})

app.listen(3005);