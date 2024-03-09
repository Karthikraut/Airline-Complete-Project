class CrudRepository{
    constructor(model){
        this.model =model;
    }

    async create(data){
        try{
            const result = await this.model.create(data);
            return result;
        }
        catch(error){
            console.log("Something went wrong in CRUD repo");
            throw error;
        }
    }

    async destroy(modelId){
        try{
            await this.model.destroy({
                where: {
                    id: modelId
                }
            });
            return true;
        } catch(error){
            console.log("Something Went wrong in CRUD Repo");
            throw error;
        }
    }
    async getAll(modelId){
        try{
           const response = await this.model.findAll();
            return response;
        } catch(error){
            console.log("Something Went wrong in CRUD Repo");
            throw error;
        }
    }

    async getById(modelId){
        try{
           const response = await this.model.findByPk(modelId);
            return response;
        } catch(error){
            console.log("Something Went wrong in CRUD Repo");
            throw error;
        }
    }
    
    async update(modelId,data){
        try{
           const response = await this.model.update(data,{
                where: {
                    id: modelId
                }
            });
            return response;
        } catch(error){
            console.log("Something Went wrong in CRUD Repo");
            throw error;
        }
    }
}

module.exports = CrudRepository;