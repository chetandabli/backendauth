const {userModel} = require("../models/user.model")
const express = require('express')
const signupRouter = express.Router()
const bcrypt = require('bcrypt');
require('dotenv').config()

signupRouter.post("/", async (req, res)=>{
    let {name, email, password, role} = req.body;
    try {
        let isExist = await userModel.find({email});
        if(isExist.length != 0){
            res.status(400).end("email already exist!")
        }else{
            bcrypt.hash(password, 5, async(err, hash)=>{
                if(err){
                    res.status(500).send("connot register user please try again")
                }else{
                    const newUser = new userModel({name, email, password: hash, role});
                    await newUser.save();
                    res.status(201).send("user registred! please login")
                }
            });
        }
    } catch (error) {
       res.status(500).json(error)
    }
})

module.exports = {
    signupRouter
}