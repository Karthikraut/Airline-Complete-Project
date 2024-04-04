const {StatusCodes} =require('http-status-codes');
class ValidationError extends Error {
    constructor(error){
        super();
        let explanation = [];
        error.errors.array.forEach((err) => {
            explanation.push(err.message);
        });
            this.name = 'Validation Error';
            this.message = 'Not able to Validate data';
            this.statusCode =  StatusCodes.BAD_REQUEST;
    }
}

module.exports = ValidationError;