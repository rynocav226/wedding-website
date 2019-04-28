const mongoose = require("mongoose");

const songRequestSchema = new mongoose.Schema(
    {
        likes: {
            song1: {
                type: String,
                maxlength: 50,
                default: ""
            },
            song2: {
                type: String,
                maxlength: 50,
                default: ""
            },
            song3: {
                type: String,
                maxlength: 50,
                default: ""
            },
            song4: {
                type: String,
                maxlength: 50,
                default: ""
            },
            song5: {
                type: String,
                maxlength: 50,
                default: ""
            }
        },
        dislikes: {
            song1: {
                type: String,
                maxlength: 50,
                default: ""
            },
            song2: {
                type: String,
                maxlength: 50,
                default: ""
            },
            song3: {
                type: String,
                maxlength: 50,
                default: ""
            },
            song4: {
                type: String,
                maxlength: 50,
                default: ""
            },
            song5: {
                type: String,
                maxlength: 50,
                default: ""
            }
        },
        invitation: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Invitation",
            default: null
        }
    }
);

songRequestSchema.pre("remove", async function(next) {
    try {
        const Invitation = require("./invitation");
        let invitation = await Invitation.findById(this.invitation);
        invitation.requests = null;
        await invitation.save();
        return next();
    } catch (err) {
        return next(err);
    }
});

module.exports = mongoose.model("SongRequest", songRequestSchema);
