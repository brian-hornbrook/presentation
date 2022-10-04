const mongoose = require('mongoose');
const { Schema } = mongoose;

const presentationSchema = new Schema({
    userId: String,
    title: String,
    subtitle: String,
    paragraph: String,
})