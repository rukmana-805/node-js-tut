//steps
// 1) Make post method for API
// 2) Send data from postman
// 3) Get data in node js by request
// 4) Write code for insert data in mongo db

const dbConnect = require("./dbconnect");
const express = require("express");

const app = express();

app.use(express.json());//This line is for when someone post the data from the postman then this line help to
//convert it to the json format.

//This method is basically used for posting data to the database using api requist
app.post("/",async (req,resp) => {
    
    let collection = await dbConnect();//mongodb connection estabilish here

    let data = await collection.insertOne(req.body);//to insert the data comming from the postman into the collection
    //in mongodb. here data inserted into collecton.

    //console.log(req.body);//This line gives the output of body requisted form the postman.

    resp.send(data);// The data comming from the postman again send to as a responce(check in postman)
    //it return the acknowledgment(true) whethere the data in inserted in the database or not
})

app.listen(5000);