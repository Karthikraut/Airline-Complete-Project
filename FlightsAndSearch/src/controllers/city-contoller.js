const CityService =require('../services/city-service')
/** 
 * POST
 * data =  req.body
 * 
*/ 
const cityService =  new CityService();

const create  = async (req,res)=>{ 
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            sucess: true,
            message: 'Sucessfully created a city',
            err: {}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to create a city',
            err: error
        })
    }
}

const destroy  =async (req,res)=>{
    try{
        const city = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : city,
            sucess: true,
            message: 'Sucessfully created a city',
            err: {}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to Delete a city',
            err: error
        })
    }
}

const update  =async (req,res)=>{
    try{
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data : city,
            sucess: true,
            message: 'Sucessfully Updated a city',
            err: {}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to Update a city',
            err: error
        })
    }
}

const get  =async (req,res)=>{
    try{
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : city,
            sucess: true,
            message: 'Sucessfully Get a city',
            err: {}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to Get a city',
            err: error
        })
    }
}

const getAll  =async (req,res) =>{
    try{
        const cities = await cityService.getAll();
        return res.status(200).json({
            data : cities,
            sucess: true,
            message: 'Sucessfully Get all cities',
            err: {}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to Get the cities',
            err: error
        })
    }
}

module.exports ={
    create,
    destroy,
    get,
    getAll,
    update
}