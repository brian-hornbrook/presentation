const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema, model } = mongoose;

const userSchema = Schema({
    username: String,
    password: String
})

userSchema.plugin(passportLocalMongoose);
const User = new model('User', userSchema);

module.exports = User;