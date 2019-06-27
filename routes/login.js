const express = require('express');
const router = express.Router();
const db = require('../models');
const bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
var passport = require('passport');
require('../config/passport');

var { forwardAuthenticated } = require('../config/auth');


router.get('/login', forwardAuthenticated, ((req, res) => {
    res.render('login');
}))

router.post('/login',
    passport.authenticate('local', 
    {successRedirect: '/dashboard', 
    failureRedirect: '/login', 
    failureFlash: true}),
    (res, req)=>{
      sess = req.session,
      sess.email = req.body.email;
      res.end('done');  
    })


  //LOGOUT
  router.post('/logout', (req, res) => {
    req.session.destroy((err)=>{
      req.logout();
      res.redirect('/')
  })
  });

module.exports = router;