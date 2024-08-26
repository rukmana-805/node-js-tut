const express = require('express');
const app = express();

//creating middleware
const reqFilter = (req,resp,next) => {
    if(!req.query.age){
        resp.send("Please provide age in params");//http://localhost:5001/secret/?age=20 like this
    }
    else if(req.query.age < 18){
        resp.send("You are under age for hidden and secret page")
    }
    else{
        next();
    }
}

//you can use this middleware in the middle parameter of the get function.
//you can use it with the route where you want to apply the middleware.

app.get("/",(req,resp) => {//when you go to home, there will be no restriction because we not apply any middleware
    resp.send("This is Home Page");
})

//here we use it
app.get("/hidden",reqFilter,(req,resp) => {
    resp.send("This is Hidden Page");
})

//here also we use this
app.get("/secret",reqFilter,(req,resp) => {
    resp.send("This is Secret Page");
})

app.listen(5001);