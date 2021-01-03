const mongoose = require('mongoose');

const SchemaUser = new mongoose.Schema({
    username: String,
    avatar: String,
    email: String,
    password: String,

})

module.exports = mongoose.model("User",SchemaUser);
