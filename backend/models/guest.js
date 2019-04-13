const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  adults: [
    {
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
      }
    }
  ],
  children: {
    type: Number,
    default: 0
  },
  daycare: {
    type: Number,
    default: 0
  },
  responded: {
    type: Boolean,
    default: false
  },
  invitation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Invitation",
    default: null
  }
});

guestSchema.pre("remove", async function(next) {
  try {
    const Invitation = require("./invitation");
    let invitation = await Invitation.findById(this.invitation);
    invitation.guestInfo = null;
    await invitation.save();
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model("Guest", guestSchema);
