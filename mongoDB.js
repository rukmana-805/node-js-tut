const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "e-comm";

const client = new MongoClient(url);

async function dbConnection(){
    let result = await client.connect();
    let db = result.db(database);

    return db.collection("products");
}

//Way 1 to handle Promis return by db.collection();
// dbConnection().then((resp) => {// dbConnection() return a promis that will be resolved by then()
//     resp.find().toArray().then((data) => {// here toArray() return a promis that will be resolved by then() which give real organised data
//         console.log(data);
//     })
// })

//Way 2 to handle Promis return by db.collection(); --> This is recomended way to handle Promis
let getData = async () => {
    let collection = await dbConnection();// Here dbConnection retuen a promis that will be resolved by await
    let data = await collection.find().toArray();//toArray() return a promis that will be resolved by the await 
    console.log(data);
}

getData();
