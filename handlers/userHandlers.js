let session = require("express-session");
const successTemplate = require("../templates/succesTemplate");
const { validationRegistration, validationLogin } = require('../validations/validation');
const errorTemplate = require("../templates/errorTemplate");
const { postRegister, postLogin } = require('../services/userServices');
const isEmpty = require('../utilities/utils');
const messages = require('../utilities/message');

const getHomeHandler = (req, res) => {
    session=req.session
    req.headers.authorization = 'Bearer: ' + session.token;
    return successTemplate(res, 'Home', 'home', session, null)
}
const getAboutHandler = (req, res) => {
    session=req.session
    req.headers.authorization = 'Bearer: ' + session.token;
    return successTemplate(res, 'About', 'about', session, null)
}
const getRegisterHandler = (req, res) => {
    session = req.session
    return successTemplate(res, 'Register', 'register', session, null)
}
const postRegisterHandler = async (req, res) => {
    try {
        session = req.session
        const errors = validationRegistration(req.body)
        if (isEmpty(errors)) {
            const result = await postRegister(req.body)
            return successTemplate(res, 'Login', 'login', session, messages.successful_register)
        }
        else {
            return errorTemplate(req, res, 'Register', 'register', messages.failed_register, errors)
        }
    } catch (error) {
        return errorTemplate(req, res, 'Register', 'register', error.message, error, session)
    }
}
const postLoginHandler = async (req, res) => {
    try {
        session = req.session
        const errors = validationLogin(req.body);
        if (isEmpty(errors)) {
            const result = await postLogin(req.body)
            session.name = result.data.result.firstName;
            session.logged = result.data.logged;
            session.token = result.data.token;
            return successTemplate(res, 'Home', 'home', session, messages.successful_login)
        } else {
            return errorTemplate(req, res, 'Login', 'login', messages.failed_login, errors)
        }
    } catch (error) {
        return errorTemplate(req, res, 'Login', 'login', error.message, error,session);
    }
}

const getLoginHandler = (req, res) => {
    session = req.session
    return successTemplate(res, 'Login', 'login', session, null)
}

const getLogoutHandler = (req, res) => {
    req.session.destroy(null);
    return successTemplate(res, 'Home', 'home', 'undefined', null);
}
module.exports = {
    getHomeHandler,
    getAboutHandler,
    getRegisterHandler,
    postRegisterHandler,
    postLoginHandler,
    getLoginHandler,
    getLogoutHandler,
    postRegisterHandler
}