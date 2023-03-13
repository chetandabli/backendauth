const express = require('express')
const logoutRouter = express.Router()

const blacklisted = [];

logoutRouter.get("/", (req, res)=>{
    const token = req.headers.authorization.split(" ")[1];
    blacklisted.push(token);
    res.send("token added to blacklist")
});

module.exports = {
    logoutRouter,
    blacklisted
}
