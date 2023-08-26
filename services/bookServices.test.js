const service = require('../services/bookServices')
jest.mock('./bookServices')

describe('Test book service function', ()=>{
    test('As a user I want to get all books', async ()=>{
        const books = await service.getBooks()
        expect(books.data[0].title).toEqual('Hanh phuc cua mot tang gia')
        expect(books.data[0].author).toEqual('Phat Nguyen')
        expect(books.data[0].ISBN).toEqual('10-23834-2394')
        expect(books.data[0].price).toEqual(100000)
        expect(books.data[0].yearPublished).toEqual('1945')
        expect(books.data[0].numberOfPages).toEqual(200)
    });
    test('As a user I want to post a book', async ()=>{
        const book = await service.postBook()
        expect(book.title).toEqual('Hanh phuc cua mot tang gia')
        expect(book.author).toEqual('Phat Nguyen')
        expect(book.ISBN).toEqual('10-23834-2394')
        expect(book.price).toEqual(100000)
        expect(book.yearPublished).toEqual('1945')
        expect(book.numberOfPages).toEqual(200)
    })
})