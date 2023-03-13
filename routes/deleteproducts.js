const {productModel} = require("../models/product.model");
const express = require('express')
const app = express()
const productdeleteRouter = express.Router()
const {validate} = require("../middleware/validate");
const { authorisation } = require("../middleware/authorisation")

productdeleteRouter.get("/", validate, authorisation(["seller"]), (req, res)=>{
    console.log(req.body)
    res.end("product delete page")
});

module.exports = {
    productdeleteRouter
}