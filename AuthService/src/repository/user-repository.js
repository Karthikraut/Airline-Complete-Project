const {User} = require('../models/index');

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

    async get(userId){
        try{
            const user = await User.findByPk(userId,{
                attributes: ['email', 'id']
            })
        }catch(error){
            console.log("Something went Wrong in Repo Layer");
            throw error;
        }
    }
}


module.exports = UserRepository;