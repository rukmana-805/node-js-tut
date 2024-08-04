// Here we are learning about how to remove extension while accessing a page in browser like
// localhost:3000/about enter
//we can did this by using sendFile(path of file) method.

const path = require("path");
const express = require("express");
const app = express();

//Accessing the path of public folder
const publicPath = path.join(__dirname,"public");

//Rendering the Home page
app.get("",(req,resp) => {
    resp.sendFile(`${publicPath}/index.html`);
})

//Redering the about page
app.get("/about",(req,resp) => { // You can access it by writing localhost:4000/about enter (not about.html enter)
    resp.sendFile(`${publicPath}/about.html`);
})

//404 Page load (create first)
app.get("*",(req,resp) => {
    resp.sendFile(`${publicPath}/page404.html`);
})

app.listen(4000);