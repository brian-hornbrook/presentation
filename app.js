const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('./models/User');


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

// *** DATA BASE ***
app.use( session ({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
mongoose.connect('mongodb://localhost:27017/presentationDB', { useNewUrlParser: true })
// mongoose.set('useCreateIndex', true);
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser);


// *** INDEX ***
app.get('/', (req, res) => {
    res.render('index');
    // Presentation.find(function (err, presentations) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(presentations)
    //         res.render('index', { 'presentations': presentations, "test": 'test' })
    //     }
    // })
});


// *** USER ROUTES ***
app.post('/presentations', async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    const { title, subtitle, paragraph } = req.body;
    const presentation = new Presentation({ title, subtitle, paragraph });
    presentation.user = user;
    await presentation.save();
})

app.get('/update', (req, res) => {
    Presentation.updateOne({_id: "63348d197e8327846fb843ca"}, {title: "La Carga del Diablo"}, () => {
        res.redirect('/')
    })
})

app.get('/delete', (req, res) => {
    Presentation.deleteOne({title: "No es Dios"}, () => {
        
    })
})

app.listen(3000, () => {
    console.log("Server has started on port 3000");
});