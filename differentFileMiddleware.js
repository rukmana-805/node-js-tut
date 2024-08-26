const express = require("express");
const app = express();

// Here we just import the middleware agerestriction available in the different molder called middlewares
const reqFilter = require("./middlewares/agerestriction");

// Then here we use that.. like before
app.get("/darty",reqFilter,(req,resp) => {
    resp.send("This is the Darty Page");
})

app.listen(5000);