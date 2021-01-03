const router = require('express').Router();

const signin = require('../controller/sign/signin');
const signup = require('../controller/sign/signup');

router.post('/signup',signup);
router.post('/signin',signin);

module.exports = router;
