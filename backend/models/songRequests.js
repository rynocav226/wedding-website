const mongoose = require("mongoose");
const User = require("./user");

const songRequestSchema = new mongoose.Schema(
    {
        song1: {
            type: String,
            maxlength: 50
        },
        song2: {
            type: String,
            maxlength: 50
        },
        song3: {
            type: String,
            maxlength: 50
        },
        song4: {
            type: String,
            maxlength: 50
        },
        song5: {
            type: String,
            maxlength: 50
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }
)

const SongRequest = mongoose.model("SongRequest", songRequestSchema);
module.exports = SongRequest;
