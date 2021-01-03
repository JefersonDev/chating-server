const jwt = require('jsonwebtoken');

const secret = process.env["JWT_SECRET"]

module.exports.sign = async (payload) => {
    return await jwt.sign(payload,secret)
}

module.exports.verify = async (token) => {
    return await jwt.verify(token,secret);
}
