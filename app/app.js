const cors = require('cors');
const express = require('express');
const userRouter = require('../routers/userRouter');
const bookRouter = require('../routers/bookRouter')
const authorRouter = require('../routers/authorRouter')


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

app.use(express.static('public'))
app.use(express.static('views'))

app.use('/', userRouter)
app.use('/books', bookRouter)
app.use('/authors', authorRouter)

app.use((req, res)=>{
    req.session.destroy(null)
    res.status(404).render('404')
})


module.exports = app;