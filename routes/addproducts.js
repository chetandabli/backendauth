const {productModel} = require("../models/product.model");
const express = require('express')
const app = express()
const productaddRouter = express.Router()
const {validate} = require("../middleware/validate");
const { authorisation } = require("../middleware/authorisation")

productaddRouter.get("/", validate , authorisation(["seller"]) , (req, res)=>{
    console.log(req.body)
    res.end("product add page")
});

module.exports = {
    productaddRouter
}
