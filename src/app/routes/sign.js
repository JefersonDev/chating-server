const router = require('express').Router();

router.get('/signup',(req,res) => {
    res.send("signup")
});

router.get('/signin',(req,res) => {
    res.send("signin")
});

module.exports = router;
