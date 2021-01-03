
const signService = require("../../services/UserSignServices");
module.exports = async (req,res) => {
    const result = await signService.signin(req.body);
    res.status(result.status).send(result);
}
