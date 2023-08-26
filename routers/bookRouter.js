const express = require('express');
const router = express.Router();
let session = require('express-session');
const {
    getBookHandler,
    addBookHandler,
    postBookHandler,
    getEditBookHandler,
    updateBookHandler,
    deleteBookHandler
} = require('../handlers/bookHandlers')

router.get('/', getBookHandler)
router.get('/addBook', addBookHandler)
router.get('/editBook/:id', getEditBookHandler)
router.get('/deleteBook/:id', deleteBookHandler)

router.post('/', postBookHandler)
router.post('/update', updateBookHandler)
module.exports = router;