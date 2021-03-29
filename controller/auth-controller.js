const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwtToken = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');

const getLoggedInUser = async(req, res) => {
    const {id} = req.user;
    try {
        const user = await User.findOne({_id : id}).select('-password');
        res.status(200).json(user)
    }catch (error) {
        console.log(error);
        res.status(500).json({msg : "Server Error"})      
    }   
}

const getUser = async(req, res) => {
    
    let error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error : error.array()})
    }

    const {email,password} = req.body;

    
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:"Invalid credentials"})
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({msg:"Invalid credentials"}) 
        }

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

exports.getLoggedInUser = getLoggedInUser;
exports.getUser = getUser;