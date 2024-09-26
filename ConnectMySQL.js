

const mysql = require("mysql");

//Mysql connection
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"// the database you want to conect in localhost
});

//For checking whethere the database is connected or not
con.connect((err) => {
    if(err){
        console.log("Error occuere while connecting to database");
    }
    else{
        console.log("Connected");
    }
});

con.query("select * from users",(err,result) => {
    console.log(result);
});