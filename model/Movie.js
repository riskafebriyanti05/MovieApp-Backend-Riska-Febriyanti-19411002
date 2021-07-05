const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    judulFilm: {
        type: String
    },
    harga: {
        type: Number
    },
    tahun: {
        type: String,
        default: '2019'
    },
    genre: {
        type: String
    },
    rating: {
        type: Number,
        default: 0
    },
    deskripsi: {
        type: String
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('movie', MovieSchema)