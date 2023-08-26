
const errorTemplate = (req, res, title, pageName, message, errors, session) => {
    res.render(pageName, {
        title: title,
        message: message,
        body: req.body,
        errs: errors,
        session:session
    })
}
module.exports = errorTemplate