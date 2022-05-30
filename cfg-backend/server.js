const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookie = require('cookie-parser');
const routes = require('./routes/routes')
var passport = require('passport');
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(passport.initialize());
let port = process.env.PORT || 3001;

mongoose.connect('mongodb+srv://srijan:srijan2002@cfg-backend.xsdcp.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{app.listen(port);console.log(`Server Running on Port : ${port}`)}).catch((err)=>console.log(err));
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
    });
app.use(routes);