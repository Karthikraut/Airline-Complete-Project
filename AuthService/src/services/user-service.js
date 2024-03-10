const UserRepository = require("../repository/user-repository");
const jwt =require('jsonwebtoken')
const {JWT_KEY} =require('../config/serverConfig')
class UserService{

    constructor(){
        this.userRepository = new UserRepository();
    }
    
    async create(data){
        try{
            const user = await this.userRepository.create(data);
            return user;
        } catch(error){
            console.log("Something Went wrong in service layer.");
            throw error;
        }
    }

    createToken(user){
        try{
            var token = jwt.sign(user,JWT_KEY, {expiresIn: 600});
            return token;
        } catch(error){
            console.log("Error occurs at creating Token.");
            throw error;
        }
    }

    verifyToken(user){
        try{
            var response = jwt.verify(user,JWT_KEY);
            return response;
        } catch(error){
            console.log("Error occurs at verifing token.");
            throw error;
        }
    }

}

module.exports = UserService;