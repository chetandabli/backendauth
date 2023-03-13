const jwt = require('jsonwebtoken');
const express = require('express')
const refreshRouter = express.Router()
require('dotenv').config();

refreshRouter.get("/", (req, res)=>{
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.refreshTokenSecretKey, function(err, decoded) {
        if(err){
            res.status(400).json({massage: "refresh token is also rexpired! please login again", err: err})
        }else{
            const normalToken = jwt.sign({"userID": decoded.userID, "role": decoded.role}, process.env.normalTokenSecretKey, { expiresIn: 60 });
            const refreshToken = jwt.sign({"userID": decoded.userID, "role": decoded.role}, process.env.refreshTokenSecretKey, { expiresIn: 300 });
            res.status(200).json({token: `Bearer ${normalToken}`, refreshToken: `Bearer ${refreshToken}`, "msg": "both token regenerated! now you can use normal token"})
        }
    });
})

module.exports = {
    refreshRouter
}

