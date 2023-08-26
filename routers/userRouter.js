const express = require('express');
const router = express.Router();
let session = require('express-session');
const { 
    getHomeHandler, 
    getAboutHandler, 
    getRegisterHandler, 
    getLoginHandler, 
    getLogoutHandler, 
    postLoginHandler, 
    postRegisterHandler 
} = require('../handlers/userHandlers');

router.use(session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: true,
}))

router.get('/', getHomeHandler)
router.get('/about', getAboutHandler)
router.get('/register', getRegisterHandler)
router.post('/register', postRegisterHandler)
router.post('/login', postLoginHandler)
router.get('/login', getLoginHandler)
router.get('/logout', getLogoutHandler)

module.exports = router;