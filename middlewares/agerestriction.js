//You must be export in before use

module.exports = reqFilter = (req,resp,next) => {
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