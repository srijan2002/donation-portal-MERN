const express=require('express');
const routes=express.Router();
const Controllers=require('../controllers/controllers');
const passport = require('passport');
require('../passport')

routes.get('/',Controllers.home);
routes.post('/',Controllers.register);
routes.post('/login',Controllers.login)
routes.get('/protected',passport.authenticate('jwt', { session: false }),Controllers.protected)
module.exports=routes;