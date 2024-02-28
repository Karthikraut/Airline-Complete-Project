const express = require("express");
const bodyParser =require("body-parser");

const ApiRoutes = require('./routes/index');

const {Airport, City} = require('./models/index');

const {PORT} =require('./config/serverConfig');


const setupAndStartServer = async()=>{
    //Create the Express Object
    const app =express();
     
    app.use(bodyParser.json()); //Parse JSON encoded Body
    app.use(bodyParser.urlencoded({extended :true})); //Parse URL-Encoded Body

    app.use('/api', ApiRoutes);

    app.listen(PORT,async ()=>{
        console.log(`Server started at ${PORT}`)
      //  console.log(process.env) // remove this after you've confirmed it is working
       
      // const repo =new CityRepository();
        // repo.createCity({name : "Mumbai"})
      
        // await City.create({
        //   name: "New Delhi"
        // })

        const airports = await Airport.findAll({
          include: [{
            model: City
          }]
        });
        console.log(airports);
        
    })
} 

setupAndStartServer();