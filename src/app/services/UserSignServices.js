const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('../modules/jwt');

module.exports.signup = async (data) => {
    const {username, email, password} = data;

    let already = await User.findOne({email: email});

    if (already !== null)
        return {status: 409, msg: "user already exists"}

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({username: username, email: email, password: hash})



    return {
        status: 200, msg: "successful", data: {
            id: user._id,
            username: user.username,
            email: user.email
        },

    };

}

module.exports.signin = async (data) => {
    const {email, password} = data;

    const already = await User.findOne({email});

    if (already === null)
        return {status: 401, msg: "user not found"}

    const valid = await bcrypt.compare(password, already.password);

    if (!valid)
        return {status: 401, msg: "user not found"}

    const token = await jwt.sign({user: already._id});

    return {
        status: 200, msg: "successful", data: {
            id: already._id,
            username: already.username,
            email: already.email
        },
        token
    };

}
