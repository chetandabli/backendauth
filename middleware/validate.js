const jwt = require('jsonwebtoken');
require('dotenv').config()
const { blacklisted } = require("../routes/logout")

const validate = (req, res, next)=>{
    const token = req.headers.authorization.split(" ")[1];
    if(blacklisted.includes(token)){
        res.status(401).send("please login again token is blacklisted")
    }else{
        jwt.verify(token, process.env.normalTokenSecretKey, function(err, decoded) {
            if(err){
                res.status(400).json({massage: "try with refresh token using /refresh endpoint and giving refresh token in headers", err: err})
            }else{
                req.body= decoded;
                next()
            }
        });
    }
}

module.exports = {
    validate
}