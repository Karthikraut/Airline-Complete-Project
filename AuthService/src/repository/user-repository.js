const {User,Role} = require('../models/index');

class UserRepository{

    async create(data){
        try{
            const user = await User.create(data);
            return user;
        }catch(error){
            console.log("Something went Wrong in Repo Layer");
            throw error;
        }
    }

    async destroy(userId){
        try{
            const user = await User.destroy({
                where: {
                    id: userId
                }
            });
            return user;
        }catch(error){
            console.log("Something went Wrong in Repo Layer");
            throw error;
        }
    }

    async getById(userId){
        try{
            const user = await User.findByPk(userId,{
                attributes: ['email', 'id']
            })
            return user;
        }catch(error){
            console.log("Something went Wrong in Repo Layer");
            throw error;
        }
    }

    async getByEmail(emailId){
        try {
            const user = await User.findOne({
                where: { email : emailId}
            });
            return user;
        } catch (error) {
            console.log("Something Went wrong at repository layer.")
            throw error;
        }
    }

    async isAdmin(userId){
        try {
            const  userRole = await User.findByPk(userId);
            const adminRole = await Role.findOne({
                where: {name: "Admin"}
            });
           
            return userRole.hasRole(adminRole);
        } catch (error) {
            console.log("Something Went wrong at repository layer.")
            throw error;
        }
    }
}


module.exports = UserRepository;