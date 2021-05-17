//const { response } = require("express");
const express =require("express")
const bodyParser = require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req,res){

res.sendFile(__dirname +"/index.html");

});



app.post("/", function(req,res){
    
    
   //res.send("Thanks");
//    var n1=Number(req.body.num1);
//     var n2=Number(req.body.num2);
//     var result = (n1+n2);
//     res.send(result);
var n1=Number(req.body.num1);
var n2=Number(req.body.num2);
    var re=n1+n2;
    res.send("The answer is " + re);
    });



app.listen(3000, function(){

 console.log("Server has started in port 3000");

});