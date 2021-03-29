const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwtToken = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');

const createUser = async (req, res) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error : error.array()})
    }

    const {userName,email,password} = req.body;

    try {
        let user = await User.findOne({email});

        if(user){
            return res.status(400).json({msg : "User already exsits"})
        }

        user = new User({
            userName,
            email,
            password
        });

        const salt =  await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);
        await user.save();

        const payload = {
            user:{
                id:user.id
            }
        }    

        jwtToken.sign(payload,config.get('jwtSecretKey'),{expiresIn : 360000},(err,token) =>{
            if(err){
                throw err;  
            }
            res.json({token})
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg : "Server Error"})        
    }
}

exports.createUser = createUser;