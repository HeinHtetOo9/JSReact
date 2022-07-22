var express = require('express');
const {response} = require("express");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Admin Home');
});

router.get('/ab?cd', function(req, res, next) {
    res.send('ab?cd');
});
router.get('/profile/:adminId(\\d+)', function(req, res, next) {
    res.send(`adminId ${req.params.adminId}`);
});
router.get('/multi', function(req, res, next) {
    //res.send('Multi First Handler');
    next();
},function (req,res){
    res.send('Multi Second Handler');
});

module.exports = router;
