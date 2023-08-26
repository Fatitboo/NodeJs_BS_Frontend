let session = require("express-session")
const errorTemplate = require("../templates/errorTemplate");
const { getAuthors, postAuthor, deleteAuthor, getAuthorById, patchAuthor } = require("../services/authorServices");
const successTemplate = require("../templates/succesTemplate");
const { getBooksId } = require("../services/bookServices");

const getAuthorsHandler = async (req, res)=>{
    try {
        session=req.session
        req.headers.authorization = 'Bearer: ' + session.token;
        const authors = await getAuthors(req);
        successTemplate(res, 'authors', 'Authors', session, authors.data.message, authors.data.result)
    } catch (error) {
        return errorTemplate(req, res, 'authors', 'Authors', error.message, error, session)
    }
}
const getAddAuthorHandler = async (req, res)=>{
    try {
        session=req.session
        req.headers.authorization = 'Bearer: ' + session.token;
        const result = await getBooksId(req)
        if((result.data.result).length>0){
            successTemplate(res, 'Add a Author', 'addAuthor',session, result.data.message, result.data.result)
        }else{
            successTemplate(res, 'Add a Author', 'addAuthor',session, 'Cannot find book, please add book first!')
        }
    } catch (error) {
        return errorTemplate(req, res, 'authors', 'Authors', error.message, 'undefined', session)
    }
}
const postAuthorHandler =async (req, res)=>{
    try {
        session=req.session
        req.headers.authorization = 'Bearer: ' + session.token;
        const author = await postAuthor(req)
        const authors = await getAuthors(req);
        successTemplate( res, 'authors', 'Authors', session,author.data.message,authors.data.result)
    } catch (error) {
        return errorTemplate(req, res, 'Add a Author', 'addAuthor', error.message, 'undefined', session)
    }
}
const deleteAuthorHandler = async(req,res)=>{
    try {
        session=req.session
        req.headers.authorization = 'Bearer: ' + session.token;
        const author = await deleteAuthor(req)
        const authors = await getAuthors(req);
        successTemplate( res, 'authors', 'Authors', session,author.data.message,authors.data.result)
    } catch (error) {
        return errorTemplate(req, res, 'authors', 'Authors', error.message, 'undefined', session)    
    }
}
const getEditAuthorByIdHandler = async (req, res)=>{
    try {
        session=req.session
        req.headers.authorization = 'Bearer: ' + session.token;
        const author  = await getAuthorById(req)
        successTemplate( res, 'Edit a author', 'editAuthor', session,author.data.message,author.data.result)

    } catch (error) {
        return errorTemplate(req, res, 'authors', 'Authors', error.message, 'undefined', session)    
    }
}
const updateAuthorHandler = async (req, res)=>{
    try {
        session=req.session
        req.headers.authorization = 'Bearer: ' + session.token;
        const result = await patchAuthor(req)
        const authors = await getAuthors(req)
        successTemplate( res, 'authors', 'Authors', session,result.data.message,authors.data.result)
    } catch (error) {
        return errorTemplate(req, res, 'Edit a author', 'editAuthor', error.message, 'undefined', session)    
    }
}
module.exports={
    getAuthorsHandler,
    getAddAuthorHandler,
    postAuthorHandler,
    deleteAuthorHandler,
    getEditAuthorByIdHandler,
    updateAuthorHandler
}