const express = require("express");
const app = express();

//Hay Here you are going to learn how to create middlewares

//Creating middleware

// const reqFilter = (req,resp,next) => {
//     console.log("Hii");
//     next();//if you not write next() here then the below page not load and run in the state f loading.
// }

//We use some check here using quiry params whethere the person is a minor or not
const reqFilter = (req,resp,next) => {

    if(!req.query.age){ // in requist quiry params check whethere age given or not
        resp.send("Please enter your age in params");
    }
    else if(req.query.age < 18){ // if age is given check whertere he/she < 18 or not
        resp.send("Below 18 not allowed !");
    }
    else{ // if he/she is above 18 then below page means next accessable 
        next();
    }
}

app.use(reqFilter); // This is for using middlewares

app.get("/darty",(req,resp) => {
    resp.send("Welcome to Darty Content");
})

app.listen(5000);