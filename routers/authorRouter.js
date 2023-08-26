const express = require('express')
let session = require('express-session');
const { 
    getAuthorsHandler ,
    getAddAuthorHandler,
    postAuthorHandler,
    deleteAuthorHandler,
    getEditAuthorByIdHandler,
    updateAuthorHandler
} = require('../handlers/authorHandlers')

const router = express.Router()
router.use(session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: true,
}))
router.get('/', getAuthorsHandler)
router.get('/deleteAuthor/:id', deleteAuthorHandler)
router.get('/editAuthor/:id', getEditAuthorByIdHandler)
router.post('/', postAuthorHandler)
router.post('/update', updateAuthorHandler)

router.get('/addAuthor', getAddAuthorHandler)
module.exports=router