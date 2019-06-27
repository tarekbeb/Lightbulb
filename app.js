const express = require('express');
const session = require('express-session');
const db = require('./models');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const localStrategy = require('passport-local').Strategy;
const passport = require('passport');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const app = express();


//set up engine and views folders
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));


var myStore = new SequelizeStore({
    db: db.sequelize 
})

//EXPRESS SESSION
app.use(session({
    secret: 'dog eats cats',
    resave: false,
    saveUninitialized: true,
    store: myStore
}));

myStore.sync(); 

//PASSPORT MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());

//Connect Flash
app.use(flash());
app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error_msg = req.flash('error'); //FOR THE LOGIN ERROR
    next();
})

//Render home Page (index.ejs)
app.get('/', (req, res) => {
    res.render('index', 
    // { sess : req.session
    // }
    );
})

//Routes
app.use(require('./routes/dashboard'));
app.use(require('./routes/register'));
app.use(require('./routes/login'));


//nodemon server
const port = 3000;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})