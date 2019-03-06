const mongoose = require("mongoose");

const invitationSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true
  },
  guests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guest"
    }
  ]
});

invitationSchema.pre("remove", async function(next) {
  try {
    const Guest = require("./guest");
    for (const guest of this.guests) {
      let foundGuest = await Guest.findById(guest);
      await foundGuest.remove();
    }
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model("Invitation", invitationSchema);
