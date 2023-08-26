const service = require('./authorServices')
jest.mock('./authorServices')
describe('Test author services', ()=>{
    test('As a user i want to get authors should return authors', async ()=>{
        const authors = await service.getAuthors()
        expect(authors.data[0].name).toEqual("Nha Nam");
        expect(authors.data[0].publisher).toEqual("nxb kim dong");
        expect(authors.data[0].website).toEqual('https://nxbkimdong');
        expect(authors.data[0].twitter).toEqual('@nhanam');
        expect(authors.data[0].about).toEqual('a handsome author');
        expect(authors.data[0].book.title).toEqual('Nha gia kim');
        expect(authors.data[0].book.ISBN).toEqual('12-12121-1212');
        expect(authors.data[0].book.price).toEqual(666000);
        expect(authors.data[0].book.yearPublished).toEqual('2020');
    });
   test('As a user i want to save an author', async ()=>{
        const author = await service.postAuthor()
        expect(author.name).toEqual("Nha Nam");
        expect(author.publisher).toEqual("nxb kim dong");
        expect(author.website).toEqual('https://nxbkimdong');
        expect(author.twitter).toEqual('@nhanam');
        expect(author.about).toEqual('a handsome author');
        expect(author.book.title).toEqual('Nha gia kim');
        expect(author.book.ISBN).toEqual('12-12121-1212');
        expect(author.book.price).toEqual(666000);
        expect(author.book.yearPublished).toEqual('2020');
   })
})