const express = require('express');
const app = express();
const port = 8080;
const passport = require('passport');
const session = require('express-session');
const initialize = require('./config/passportLocal');
const bcrypt = require('bcrypt');
const methodOverride = require('method-override')


const users = [];

initialize(passport, 
email => users.find(user => user.email === email),
id => users.find(user => user.id === id));

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));

app.use(session({
    secret:"SecretKey",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'))


app.get('/', checkAuthentication , (req, res) =>{
    res.render('index', {name: req.user.name});
})

app.get('/login', checkNotAuthentication , (req, res) =>{
    res.render('login');
})

app.get('/register', checkNotAuthentication , (req, res) =>{
    res.render('register');
})

app.post('/register', async (req, res) =>{
    try{
        const hashpassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashpassword,
        })

        return res.redirect('/login');
    }catch(err){
        console.log(err);
        return res.redirect('/register');
    }
})


app.post('/login', passport.authenticate('local', {failureRedirect:'/login', successRedirect:'/'}));

app.delete('/logout', (req, res) =>{
    req.logOut(function(err){
        if(err){
            return res.redirect('/');
        }
        res.redirect('/login');
    })
})


function checkAuthentication(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/login');
}

function checkNotAuthentication(req,res,next){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return next();
}

app.listen(port, (err) => {
    if(err){
        console.log(`Error in setting up the server : ${err}`);
        return;
    }
    console.log(`Server is up and running on port : ${port}`);
})