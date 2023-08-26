const getAuthors = async (req) => {
    console.log('Mocked get all authors')
    return await Promise.resolve({
        data: [{
            name: 'Nha Nam',
            publisher: 'nxb kim dong',
            website: 'https://nxbkimdong',
            twitter: '@nhanam',
            about: 'a handsome author',
            book: {
                title: 'Nha gia kim',
                author: 'Nha Nam',
                ISBN: '12-12121-1212',
                price: 666000,
                yearPublished: '2020'
            }
        }]
    });
}

const postAuthor = async (req) => {
    console.log('Mocked post and save author ')
    return await Promise.resolve({
        name: 'Nha Nam',
        publisher: 'nxb kim dong',
        website: 'https://nxbkimdong',
        twitter: '@nhanam',
        about: 'a handsome author',
        book: {
            title: 'Nha gia kim',
            author: 'Nha Nam',
            ISBN: '12-12121-1212',
            price: 666000,
            yearPublished: '2020'
        }
    })
}
const patchAuthor = async (req) => {
    return await axios.patch(process.env.url + 'authors/' + req.body.id, {
        name: req.body.name,
        book: req.body.bookId,
        publisher: req.body.publisher,
        website: req.body.website,
        twitter: req.body.twitter,
        about: req.body.about
    })
}
const getAuthorById = async (req) => {
    return await axios.get(process.env.url + 'authors/' + req.params.id)
}
const deleteAuthor = async (req) => {
    return await axios.delete(process.env.url + 'authors/' + req.params.id)
}

module.exports = { getAuthorById, getAuthors, patchAuthor, postAuthor, deleteAuthor }