const express  =require('express');
const router =express.Router();

const v1AppRoutes  = require('./v1/index');

router.use('/v1', v1AppRoutes);

module.exports =router;