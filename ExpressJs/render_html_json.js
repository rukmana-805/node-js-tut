const express = require("express");
const app = express();

app.get("",(req, resp) => { //Use backtics for multiple line writing
    resp.send(`
        <h1>This is Home page</h1>
        <a href="/login">Go to Login</a> </br>
        <a href="/details">Go to Details</a>
    `);
})

//Sending html as Responce and Accepting the Query Params details as Request.
app.get("/login",(req,resp) => {
    resp.send(`
        <input type="text" placeholder="Username" /> </br>
        <input type="password" placeholder="Password" /> </br>
        <button>Login</button> </br>
        <span>Qurery Params Data : ${req.query.name}</span> </br>
        <a href="/">Go to Home</a> </br>
        <a href="/details">Go to Details</a>
    `)
})

//Sending Json data as Responce
app.get("/details",(req,resp) => {
    resp.send([
        {
            name : "Akash Behera",
            age : 21,
            mob : 8260522156
        },
        {
            name : "Abhishek Dhar",
            age : 21,
            mob : 8260988675
        },
        {
            name : "Jeeban Behera",
            age : 22,
            mob : 6370237335
        }
    ])
})

app.listen(4000);