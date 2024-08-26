const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "e-comm";
const client = new MongoClient(url);

async function getData(){
    
    //This line is for connecting client (await use for it returen a promis and when we use await in a function then we
    //must made the unction async)
    let result = await client.connect();

    //This line is to choose which data base
    let db = result.db(database);

    //below line is for from e-comm database which collection you want to use
    let collection = db.collection("products");

    //find function is used to extract all record from the collection and toArray is just for organised the value of
    //the data store in the particular collection.
    let responce = await collection.find({}).toArray();
    console.log(responce);
}

// When we call it then also this is executed.
getData();