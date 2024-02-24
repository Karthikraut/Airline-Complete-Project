const {City}  = require('../models/index');

class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        } catch (error){
            console.log("Something Went Wrong in Repository Layer.");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id:cityId
                }
            });
            return true;
        } catch(error){
            console.log("Something Went Wrong in Repository Layer.");
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try{
            //The Below approach Also Works but will not return updated object
            // If we are using PostgressSql then we can use returning and plain method.
            // const city =await City.update(data,{ //{ name: "Prayagraj" }
            //     where :{
            //         id : cityId
            //     }
            // });

            //For Getting Updated data in MySql We use below Method.
            const city  = await City.findByPk(cityId);
            city.name =data.name;
            await city.save();
            return city;

        } catch(error){
            console.log("Something Went Wrong in Repository Layer.");
            throw {error};
        }
    }

    async getCity(  cityId){
        try{
            const city =await City.findByPk(cityId);
            return city;
        } catch(error){
            console.log("Something Went Wrong in Repository Layer.");
            throw {error};
        }
    }
}

module.exports =CityRepository;