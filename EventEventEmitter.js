//EventEmitter is basically used to create events and handle it whenever a partucular api call
//like get or post or put or delete etc..

const express = require("express");
const EventEmitter = require("events");//EventEmitter is a class thats why start with capital

const app = express();

const event = new EventEmitter();

let count = 0;

//countEvent-> is the event name that emit from get method the handle here and the call back function increase
// the count by one whenever the get method requisted from the postman.
event.on("countEvent",() => {
    count++;
    console.log("Event Fire "+count);
})

app.get("/",(req,resp) => {
    resp.send("Home called");
    event.emit("countEvent");//Whenever get method call or requisted from postman then this event emit;
})

app.get("/search",(req,resp) => {
    resp.send("search called");
    event.emit("countEvent");
})

app.get("/data",(req,resp) => {
    resp.send("Data called");
    event.emit("countEvent");
})

app.listen(5000);