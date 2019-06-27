const express = require('express');
const router = express.Router();
const db = require('../models');
const bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');




//Routing to register
router.get('/register', ((req, res) => {
    res.render('register');
}))

router.use(bodyParser.urlencoded({ extended: false }))

router.post('/register', (req, res)=>{
    var fName = req.body.fName;
    var lName = req.body.lName;
    var email = req.body.email;
    var username = req.body.username;
    let password = req.body.password;
    var password2 = req.body.password2;
    let errors = [];

    //CHECK REQUIRED FIELDS
    if(!fName || !lName || !email || !username || !password || !password2){
        errors.push({msg: 'Please fill in all fields'})
    }

    //CHECK PASSWORDS MATCH
    if(password != password2) {
        errors.push({msg: 'Passwords do not match'})
    }

    //CHECK PASS LENGTH
    if(password.length < 8){
        errors.push({msg: 'Password should at least be 8 characters long'})
    }

    //LENGTH OF ARRAY OF ERRORS WILL POP UP ON REGISTRATION
    if(errors.length > 0){
        res.render('register', {
            errors,
            fName, 
            lName, 
            username,
            email,
            password,
            password2
    })}
    else {
        db.user.findOne({where: { email: email }})
        .then(person =>{
            if (person) {
                errors.push({msg: 'Email already exists'});
                res.render('register', {
                    errors,
                    fName, 
                    lName, 
                    username,
                    email,
                    password,
                    password2
                });
            } 
            else {
                let password = bcrypt.hashSync(req.body.password, 8);
                db.user.create({fName:fName, lName:lName, username:username, email:email, password:password})    
                .then((user) => {
                    req.flash('success_msg', 'You are now registered and can log in');
                    res.redirect('/login')
                })
                .catch((error) => {
                    res.send(error)
                })
            }
        })
    }
});

module.exports = router;