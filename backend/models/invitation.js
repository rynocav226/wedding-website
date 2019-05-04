const mongoose = require("mongoose");

const invitationSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true
  },
  guestInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Guest",
    default: null
  },
  requests: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SongRequest",
    default: null
  }
});

invitationSchema.pre("remove", async function(next) {
  try {
    const Guest = require("./guest");
    let foundGuest = await Guest.findById(this.guestInfo);
    await foundGuest.remove();
    const SongRequests = require("./songRequests");
    let foundRequest = await SongRequests.findById(this.requests);
    await foundRequest.remove();
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model("Invitation", invitationSchema);
