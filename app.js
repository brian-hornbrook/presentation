const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true })

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log("Server has started on port 3000");
})