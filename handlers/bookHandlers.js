let session = require("express-session");
const successTemplate = require("../templates/succesTemplate");
const errorTemplate = require("../templates/errorTemplate");
const messages = require('../utilities/message');
const { getBooks, postBook , putBook,getBookById, deleteBook} = require("../services/bookServices");

const getBookHandler =async (req, res) => {
    try {
        session=req.session
        req.headers.authorization = 'Bearer: ' + session.token;
        const books = await getBooks(req);
        let arrBooks = books.data.result;
        if(arrBooks.length>0){
            successTemplate(res, 'books', 'Books', session, books.data.message, arrBooks)
        }else{
            successTemplate(res, 'books', 'Books', session)
        }
    } catch (error) {
        return errorTemplate(req, res, 'books', 'Books', error.message, 'undefined', session)
    }
}
const addBookHandler =async (req, res)=>{
    try {
        session=req.session
        successTemplate(res, 'Add a Book', 'addBook',session, null)
    } catch (error) {
        return errorTemplate(req, res, 'books', 'Books', error.message, 'undefined', session)
    }
}
const postBookHandler= async (req, res)=>{
    try {
        session=req.session
        req.headers.authorization = 'Bearer: ' + session.token;
        const book = await postBook(req);
        const books = await getBooks(req);
        let arrBooks = books.data.result;
        successTemplate(res, 'books', 'Books', session, null, arrBooks)

    } catch (error) {
        return errorTemplate(req, res, 'Add a Book', 'addBook', error.message, error, session)
    }
}
const getEditBookHandler = async (req, res)=>{
    try {
        session=req.session
        req.headers.authorization = 'Bearer: ' + session.token;
        const book = await getBookById(req)
        successTemplate(res, 'Edit a book', 'editBook', session, book.data.message, book.data.result)

    } catch (error) {
        return errorTemplate(req, res, 'books', 'Books', error.message, error, session)
    }
}
const updateBookHandler = async (req, res)=>{
    try {
        session=req.session
        req.headers.authorization = 'Bearer: ' + session.token;
        const result = await putBook(req)
        const books = await getBooks(req);
        let arrBooks = books.data.result;
        successTemplate(res, 'books', 'Books', session, result.data.message, arrBooks)
    } catch (error) {
        return errorTemplate(req, res, 'Books', 'books', error.message, 'undefined', 'undefined')
    }
}

const deleteBookHandler = async (req, res)=>{
    try {
        session=req.session
        req.headers.authorization = 'Bearer: ' + session.token;
        const result = await deleteBook(req)
        const books = await getBooks(req);
        let arrBooks = books.data.result;
        successTemplate(res, 'books', 'Books', session, result.data.message, arrBooks)
    } catch (error) {
        return errorTemplate(req, res, 'Books', 'books', error.message, 'undefined', 'undefined')        
    }
}
module.exports = { 
    getBookHandler,
    addBookHandler ,
    postBookHandler,
    getEditBookHandler,
    updateBookHandler,
    deleteBookHandler
}