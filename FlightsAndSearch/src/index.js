const express = require("express");
const bodyParser =require("body-parser");

const {PORT} =require('./config/serverConfig');


const setupAndStartServer = async()=>{
    //Create the Express Object
    const app =express();
    
    app.use(bodyParser.json()); //Parse JSON encoded Body
    app.use(bodyParser.urlencoded({extended :true})); //Parse URL-Encoded Body

    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`)
      //  console.log(process.env) // remove this after you've confirmed it is working
    })
} 

setupAndStartServer();