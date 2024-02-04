const express = require("express");
const {PORT} =require('./config/serverConfig');

const setupAndStartServer = async()=>{
    //Create the Express Object
    const app =express();
    
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`)
      //  console.log(process.env) // remove this after you've confirmed it is working
    })
}

setupAndStartServer();