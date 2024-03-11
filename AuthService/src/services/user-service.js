const UserRepository = require("../repository/user-repository");
const jwt =require('jsonwebtoken')
const {JWT_KEY} =require('../config/serverConfig')
const bcrypt = require('bcrypt');

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

    async signIn(email, plainPassword){
       try {
             //STEP 1:- Check for the Email in your database
            const user =  await this.userRepository.getByEmail(email);
            if (!user) {
                throw new Error("User not found");
            }
    
            //STEP 2:- Check If User password is equal to plain Password which has been inserted
            const passwordMatch = this.checkPassword(plainPassword, user.password);
            
            if(!passwordMatch){
                console.log("Password Doesn't Match");
                throw {error: 'Incorrect Password'};
            }

            //Step 3 -> if password match then create a token and sent it to the user
            const newJWT = this.createToken({email: user.email, id: user.id});
            return newJWT;
       } catch (error) {
            console.log(error);
            console.log("Error At Sign IN Process.")
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
            console.log("USER: ",user)
            console.log("Error occurs at verifing token.");
            throw error;
        }
    }

    checkPassword(userInputPlainPassword, encryptedPassword){
        try{
            return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
        } catch(error){
            console.log("Something went wrong in password comparison");
            throw error;  
        }
    }

    async isAuthenticated(token){
        try {
            const response = this.verifyToken(token);
            if(!response){
                throw {error: "Token Invalid"}
            }
            const user =  await this.userRepository.getById(response.id);
            if(!user){
                throw {error: "User with that Token Not Found"}
            }
            return user.id;
        } catch (error) {
            console.log(" Something went wrong in IsAuthentication. ");
            throw error;
        }

    }

}

module.exports = UserService;