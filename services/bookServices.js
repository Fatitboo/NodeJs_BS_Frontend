const axios = require('axios');
require('dotenv').config();


const getBooks = async (req) => {
    axios.defaults.headers.get['Authorization'] = req.headers.authorization
    return await axios.get(process.env.url + 'books');
}
const postBook = async (req) => {   
    axios.defaults.headers.post['Authorization'] = req.headers.authorization
    return await axios.post(process.env.url + 'books', {
        title: req.body.title,
        author: req.body.author,
        ISBN: req.body.ISBN,
        numberOfPages: req.body.numberOfPages,
        price: req.body.price,
        yearPublished: req.body.yearPublished
    });
}
const putBook = async (req)=>{
    axios.defaults.headers.put['Authorization'] = req.headers.authorization
    return await axios.put(process.env.url + 'books/'+req.body.id, {
        title: req.body.title,
        author: req.body.author,
        ISBN: req.body.ISBN,
        numberOfPages: req.body.numberOfPages,
        price: req.body.price,
        yearPublished: req.body.yearPublished
    })
}
const getBookById = async (req)=>{
    axios.defaults.headers.get['Authorization'] = req.headers.authorization
    return await axios.get(process.env.url + 'books/'+req.params.id)
}
const deleteBook = async (req)=>{
    axios.defaults.headers.delete['Authorization'] = req.headers.authorization
    return await axios.delete(process.env.url + 'books/'+req.params.id)
}
const getBooksId = async (req)=>{
    axios.defaults.headers.get['Authorization'] = req.headers.authorization
    return await axios.get(process.env.url + 'books/books');
}
module.exports = { getBooks, postBook, putBook, getBookById,deleteBook, getBooksId }