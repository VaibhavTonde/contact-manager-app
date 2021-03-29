const bcrypt = require('bcryptjs');
const jwtToken = require('jsonwebtoken');
const config = require('config');

const getAuthToken = (req, res,next) => {
    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({msg:"No token provided"});
    }

    try {
        const decoded = jwtToken.verify(token,config.get('jwtSecretKey'));
        if(decoded){
            req.user = decoded.user;
            next();
        }
    } catch (err) {
        console.log(err);
        res.status(401).json({msg:"Token is not valid"})
    }
}

exports.getAuthToken = getAuthToken;
