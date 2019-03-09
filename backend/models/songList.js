const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
    {
        song: {
            type: String,
            required: true,
            maxlength: 100
        },
        artist: {
            type: String,
            required: true,
            maxlength: 100
        },
        category: {
            type: String,
            required: true,
            maxlength: 100
        }
    }
)

const Song = mongoose.model("Song", songSchema);
module.exports = Song;
