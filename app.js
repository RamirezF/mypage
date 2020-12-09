const express = require('express');
const app = express();
const router = express.Router();
const db = require('./db');
const agenda = require('./routes/agenda');
const login = require('./routes/login');

const path = __dirname + '/views/';
const port = 8080;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use('/agenda', agenda);
app.use('/login', login);

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})
