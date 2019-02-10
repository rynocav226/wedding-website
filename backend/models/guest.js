const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  lastName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  attending: {
    type: String,
    enum: ["yes", "no", "null"],
    default: "null",
  },
  isChild: {
    type: Boolean,
    default: false
  },
  invitation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Invitation"
  }
});

guestSchema.pre("remove", async function(next) {
  try {
    const Invitation = require("./invitation");
    let invitation = await Invitation.findById(this.invitation);
    invitation.guests.remove(this.id);
    await invitation.save();
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model("Guest", guestSchema);
