const validateUserAuth = (req,res,next) =>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            success: false,
            data: {},
            message: "Something went Wrong",
            err: "Email or Password missing in the request."
        })
    }
    next();
}

const validateIsAdminRequest = (req,res,next) =>{
    if(!req.body.userId){
        return res.status(400).json({
            success: false,
            data: {},
            message: "Something went Wrong",
            err: "Email or Password missing in the request."
        })
    }
    next();
}

module.exports = {
    validateUserAuth,
    validateIsAdminRequest
}