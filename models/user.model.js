const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    "name": {type: String, require: true},
    "email": {type: String, require: true},
    "password": {type: String, require: true},
    "role": {type: String, enum: ["user", "seller"], default: "user"}
});

const userModel = mongoose.model("users", userSchema);

module.exports = {
    userModel
}