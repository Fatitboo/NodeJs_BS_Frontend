const express = require('express');
const { validationRegistration, validationLogin } = require('../validations/validation')
const isEmpty = require('../utilities/utils');
const messages = require('../utilities/message');
const { postRegister, postLogin } = require('../services/userServices');
const router = express.Router();
let session = require('express-session')

router.use(session({
  secret: process.env.secret,
  resave: false,
  saveUninitialized: true,
  
}))

router.get('/', (req, res) => {
    session=req.session

    res.render('home', { pagename: 'Home',session: session });
})
router.get('/about', (req, res) => {
    session=req.session

    res.render('about', { pagename: 'About',session: session});
})
router.get('/register', (req, res) => {
    res.render('register', { pagename: 'Register' });
})
router.post('/register', (req, res) => {
    const errors = validationRegistration(req.body)
    if (isEmpty(errors)) {
        postRegister(req.body).then(
            result => {
                res.render('login', {
                    pagename: 'Login',
                    message: messages.successful_register,

                })
            }).catch(err => {
                    res.render('register', {
                        pagename: 'Register',
                        message: err.response.data.error.message
                    })
                });
            
    } else {
        console.log(req.body)
        res.render('register', {
            pagename: 'Register',
            message: messages.failed_register,
            body: req.body,
            errs: errors
        })

    }
})
router.post('/login', (req, res) => {
    session=req.session
    const errors = validationLogin(req.body);
    if (isEmpty(errors)) {
        
        console.log(req.body)
        postLogin(req.body).then(
            result=>{
                session.name=result.data.user.firstName;
                session.logged = result.data.logged;
                session.token = result.data.token;
                console.log(session)
                res.render('home', {
                    pagename: 'Home',
                    message: messages.successful_login,
                    session: session
                })
            }
        ).catch(err=>{
            res.render('login', {
                pagename: 'Login',
                message: err.response.data.error.message
            })
        });
        
    } else {
        console.log(errors)
        console.log(req.body)
        res.render('login', {
            pagename: 'Login',
            message: messages.failed_login,
            body: req.body,
            errs: errors
        })
    }

})
router.get('/login', (req, res) => {
    res.render('login', { pagename: 'Login' });
})
router.get('/logout', (req, res)=>{
    req.session.destroy(null);
    res.render('home', {pagename: 'Home'})
})

module.exports = router;