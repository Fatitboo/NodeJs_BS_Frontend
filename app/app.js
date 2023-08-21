const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.use(express.json());

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

app.use(express.static('public'))
app.use(express.static('views'))


module.exports = app;