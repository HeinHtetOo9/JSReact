var express = require('express');
let path = require('path');
let users = require('./../controller/UserController');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// router.get('/home', function(req, res, next) {
//   res.redirect('../');
// });
// router.get('/hello', function(req, res, next) {
//   res.send('respond Hello');
// });
// router.get('/download', function(req, res, next) {
//   res.download('./public/demo.txt');
// });
// router.get('/send', function(req, res, next) {
//   res.setHeader('Content-Type', 'text/html');
//   res.send("<h1>Hello From Send<h1></h1>")
// });
// router.get('/sendFile', function(req, res, next) {
//   let filepath = path.join(__dirname,"../public","demo.txt");
//   res.setHeader('Content-Type', 'text/plain');
//   res.sendFile(filepath);
// });
router.get('/:userId',users.getUserById);
router.post('/', users.registerUser);
router.post('/login', users.login);

module.exports = router;
