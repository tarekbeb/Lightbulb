var express = require('express');
var router = express.Router();
// var { ensureAuthenticated } = require('../config/auth')

router.get('/', ((req, res) => {
    res.render('index');
}))

router.get('/dashboard', ((req, res) => {
    res.render('ideas');
}));


module.exports = router;