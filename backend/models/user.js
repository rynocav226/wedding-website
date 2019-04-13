const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    requests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Requests"
    }],
    username: {
        type: String,
        required: true,
        unique: true
    },
    // accesscode: {
    //     type: Number,
    //     required: true,
    //     unique: true
    // }
});

//allows us to use bcrypt before we save the password
userSchema.pre("save", async function (next) {
    try {
        if (!this.isModified("password")) {
            return next();
        }
        // 10 value adds salt value or extra padding
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    } catch (err) {
        return next(err);
    }
});

userSchema.methods.comparePassword = async function (candidatePassword, next) {
    try {
        let isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (err) {
        return next(err);
    }
}

//const User = mongoose.model("User", userSchema);

//module.exports = User;