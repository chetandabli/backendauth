const {productModel} = require("../models/product.model");
const express = require('express')
const app = express()
const productRouter = express.Router()
const {validate} = require("../middleware/validate");
const { authorisation } = require("../middleware/authorisation")

productRouter.get("/", validate, authorisation(["user"]), (req, res)=>{
    console.log(req.body)
    res.end("product page")
});

module.exports = {
    productRouter
}