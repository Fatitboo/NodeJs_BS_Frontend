let session = require("express-session");
const successTemplate = require("../templates/succesTemplate");
const { validationRegistration, validationLogin } = require('../validations/validation');
const errorTemplate = require("../templates/errorTemplate");
const { postRegister, postLogin } = require('../services/userServices');
const isEmpty = require('../utilities/utils');
const messages = require('../utilities/message');

const getHomeHandler = (req, res) => {
    session = req.session

    return successTemplate(res, 'home', 'Home', session, null)
}
const getAboutHandler = (req, res) => {
    session = req.session

    return successTemplate(res, 'about', 'About', session, null)
}
const getRegisterHandler = (req, res) => {

    return successTemplate(res, 'register', 'Register', session, null)
}
const postRegisterHandler = async (req, res) => {
    try {
        const errors = validationRegistration(req.body)
        if (isEmpty(errors)) {
            const result = await postRegister(req.body)
            return successTemplate(res, 'login', 'Login', session, messages.successful_register)
        }
        else {
            return errorTemplate(req, res, 'register', 'Register', messages.failed_register, errors)
        }
    } catch (error) {
        return errorTemplate(req, res, 'register', 'Register', error.message, error, session)
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
            return successTemplate(res, 'home', 'Home', session, messages.successful_login)
        } else {
            return errorTemplate(req, res, 'login', 'Login', messages.failed_login, errors)
        }
    } catch (error) {
        return errorTemplate(req, res, 'login', 'Login', error.message, error,session);
    }
}

const getLoginHandler = (req, res) => {
    return successTemplate(res, 'login', 'Login', session, null)
}

const getLogoutHandler = (req, res) => {
    req.session.destroy(null);
    console.log(session)
    return successTemplate(res, 'home', 'Home', 'undefined', null);
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