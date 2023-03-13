const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    "name": {type: String, require: true},
    "price": {type: Number, require: true}
});

const productModel = mongoose.model("/products", productSchema);

module.exports = {
    productModel
}