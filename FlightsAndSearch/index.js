const express = require("express");

const setupAndStartServer = async()=>{
    //Create the Express Object
    const app =express();
    const PORT =3000;
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`)
    })
}

setupAndStartServer();