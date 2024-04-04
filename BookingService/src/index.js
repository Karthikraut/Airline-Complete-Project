const express =require('express');
const app = express();
const PORT =3002;
const db = require('./models/index');

const setupAndStartServer = () =>{
    app.listen(PORT,()=>{
        console.log(`Server started at Port ${PORT}`)
        if(process.env.DB_SYNC){
            db.Sequelize.sync({alter:true});
        }
    })
} 
setupAndStartServer();