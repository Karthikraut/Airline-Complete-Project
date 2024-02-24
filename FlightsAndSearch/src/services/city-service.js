const {CityRepository} = require('../repository/index');

class CityService{
    constructor(){ //You can Make Constructor or cannot make the constructor it depends on you
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try{
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch(error){
            console.log("Something Went Wrong at Service Layer.");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            const response = await this.cityRepository.deleteCity(cityId);
            return true; 
        } catch(error){
            console.log("Something Went Wrong at Service Layer.");
            throw {error};
        }
    }

    async updateCity( cityId, data){
        try{
            const city = await this.cityRepository.updateCity(cityId,data);
            return city;
        } catch(error){
            console.log("Something Went Wrong at Service Layer.");
            throw {error};
        }
    }

    async getCity(cityId){
        try{
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch(error){
            console.log("Something Went Wrong at Service Layer.");
            throw {error};    
        }
    }

    async getAll(filter){
        try{
            const cities = await this.cityRepository.getAllCities({name: filter.name});
            return cities;
        }catch(error){
            console.log("Something Went Wrong at Service Layer.");
            throw {error};    
        }
    }
    
}
module.exports =CityService;