const express = require('express')
const { 
    getAuthorsHandler ,
    getAddAuthorHandler,
    postAuthorHandler,
    deleteAuthorHandler,
    getEditAuthorByIdHandler,
    updateAuthorHandler
} = require('../handlers/authorHandlers')

const router = express.Router()

router.get('/', getAuthorsHandler)
router.get('/addAuthor', getAddAuthorHandler)
router.get('/deleteAuthor/:id', deleteAuthorHandler)
router.get('/editAuthor/:id', getEditAuthorByIdHandler)
router.post('/', postAuthorHandler)
router.post('/update', updateAuthorHandler)

module.exports=router