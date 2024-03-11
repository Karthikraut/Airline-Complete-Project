const express =require('express');
const {PORT}  = require('./config/serverConfig')
const apiRoutes =  require('./routes/index');
const bodyParser = require('body-parser');

const userService = require('../src/services/user-service');

const app = express();

const prepareAndStartServer =()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',apiRoutes);
    
    app.listen(PORT,() =>{
        console.log(`Server Started on PORT ${PORT}`);
        const service = new userService();
        // const token = service.createToken({email: 'sanket@gmail.com', id: 1});
        // console.log("New Token is : ", token);
        // const token =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmtldEBnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNzEwMDkxNzg1LCJleHAiOjE3MTAwOTIzODV9.X91YqGaiG_y-QwotPBbk4oDH1YIQjaT-yGr6oAL3I5A';
        // const response = service.verifyToken(token);
        // console.log(response);
    })
}

prepareAndStartServer();