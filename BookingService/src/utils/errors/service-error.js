const {StatusCodes} =require("http-status-codes");

class ServiceError extends Error{
    
    constructor(
        message = 'Something went Wrong',
        explanation = 'Service Layer error',
        statusCodes = StatusCodes.INTERNAL_SERVER_ERROR
    ){
        this.name = 'ServiceError',
        this.message =message;
        this.explanation =explanation;
        this.statusCodes = statusCodes;
    }
}

module.exports = ServiceError;