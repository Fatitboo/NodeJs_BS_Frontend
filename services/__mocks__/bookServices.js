const axios = require('axios');
require('dotenv').config();


const getBooks = async () => {
    console.log('Mocked get all books')
    return await Promise.resolve({
        data: [
            {
                title: 'Hanh phuc cua mot tang gia',
                author: 'Phat Nguyen',
                ISBN: '10-23834-2394',
                numberOfPages: 200,
                price: 100000,
                yearPublished: '1945',
            },
        ]
    });
}
const postBook = async () => {
    console.log('Mocked get all books')
    return await Promise.resolve(
        {
            title: 'Hanh phuc cua mot tang gia',
            author: 'Phat Nguyen',
            ISBN: '10-23834-2394',
            numberOfPages: 200,
            price: 100000,
            yearPublished: '1945',
        }
    );
}
const putBook = async (req) => {
    axios.defaults.headers.put['Authorization'] = req.headers.authorization
    return await axios.put(process.env.url + 'books/' + req.body.id, {
        title: req.body.title,
        author: req.body.author,
        ISBN: req.body.ISBN,
        numberOfPages: req.body.numberOfPages,
        price: req.body.price,
        yearPublished: req.body.yearPublished
    })
}
const getBookById = async (req) => {
    axios.defaults.headers.get['Authorization'] = req.headers.authorization
    return await axios.get(process.env.url + 'books/' + req.params.id)
}
const deleteBook = async (req) => {
    axios.defaults.headers.delete['Authorization'] = req.headers.authorization
    return await axios.delete(process.env.url + 'books/' + req.params.id)
}
module.exports = { getBooks, postBook, putBook, getBookById, deleteBook }