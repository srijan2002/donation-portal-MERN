const User = require('../models/user');
const { hashSync, compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const home = (req,res)=>{
    res.status(200).send("Hello User");
}

const register = async(req,res)=>{
    const {name,email,password}=req.body;
    try{
        const user = await User.create({name,email,password});
        // const token = createToken(user._id);
        // res.cookie('jwt',token,{httpOnly:true,maxAge:1000*maxAge});
        res.status(200).send("User Registered");
        // this.EMAIL=email;
    }catch(err){
        const errors=handle(err);
        res.status(400).send("Error Occurred");
}
}

const login = async(req,res)=>{
    User.findOne({ email: req.body.email }).then(user => {
        //No user found
        if (!user) {
            return res.status(401).send({
                success: false,
                message: "Could not find the user."
            })
        }

        //Incorrect password
        if (!compareSync(req.body.password, user.password)) {
            return res.status(401).send({
                success: false,
                message: "Incorrect password"
            })
        }

        const payload = {
            email: user.email,
            id: user._id
        }

        const token = jwt.sign(payload, 'secret', { expiresIn: '1d' })

        return res.status(200).send({
            success: true,
            message: "Logged in successfully!",
            token: "Bearer " + token
        })
    })
}

const protected = (req,res)=>{
    res.status(200).send( {
        success:true,
        user: {
            id: req.user._id,
            email: req.user.email,
        }
    });
}


module.exports={home,register,login,protected}