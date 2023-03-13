const {userModel} = require("../models/user.model")
const express = require('express')
const loginRouter = express.Router()
const bcrypt = require('bcrypt');
require('dotenv').config()
const jwt = require('jsonwebtoken');

loginRouter.post("/", async (req, res)=>{
    const {email, password} = req.body;
    try {
        const userData = await userModel.findOne({email});
        bcrypt.compare(password, userData.password, (err, result)=>{
            if(err){
                console.log(err)
            }
            if(result){
                const normalToken = jwt.sign({"userID": userData._id, "role": userData.role}, process.env.normalTokenSecretKey, { expiresIn: 60 });
                const refreshToken = jwt.sign({"userID": userData._id, "role": userData.role}, process.env.refreshTokenSecretKey, { expiresIn: 300 });
                res.status(200).json({token: `Bearer ${normalToken}`, refreshToken: `Bearer ${refreshToken}`})
            }else{
                res.status(400).json("Password is Wrong")
            }
        });
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = {
    loginRouter
}


