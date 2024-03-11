const express  =require('express');

const UserController = require('../../controllers/user-controller');
const {ValidUserAuth} = require('../../middlewares/index');

const router = express.Router();

router.post('/signup',
    ValidUserAuth.validateUserAuth,
    UserController.create);

router.post('/signin',
    ValidUserAuth.validateUserAuth,
    UserController.signIn);

router.get('/isAuthenticated', UserController.isAuthenticated);

router.get('/isAdmin',ValidUserAuth.validateIsAdminRequest ,UserController.validateAdmin);

module.exports = router;