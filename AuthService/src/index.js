const express =require('express');
const {PORT}  = require('./config/serverConfig')
const apiRoutes =  require('./routes/index');
const bodyParser = require('body-parser');

const {User} =  require('./models/index');
const {Role} = require('./models/index');
// const userService = require('../src/services/user-service');
const db = require('./models/index');

const app = express();

const prepareAndStartServer =()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',apiRoutes);
    
    app.listen(PORT,async () =>{
        console.log(`Server Started on PORT ${PORT}`);
        // const service = new userService();
        // const token = service.createToken({email: 'sanket@gmail.com', id: 1});
        // console.log("New Token is : ", token);
        // const token =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmtldEBnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNzEwMDkxNzg1LCJleHAiOjE3MTAwOTIzODV9.X91YqGaiG_y-QwotPBbk4oDH1YIQjaT-yGr6oAL3I5A';
        // const response = service.verifyToken(token);
        // console.log(response);
        
        if(process.env.DB_SYNC ){
            db.sequelize.sync({alter :true});
        }
        const u1 = await User.findByPk(7);
        const r1 = await Role.findByPk(1);
        u1.addRole(r1);
    })
}

prepareAndStartServer();