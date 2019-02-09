const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const invitationSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true
  },
  guests: [
    {
      surname: {
        type: String,
        required: true
      },
      firstname: {
        type: String,
        required: true
      },
      attending: {
        type: Boolean
      },
      isChild: {
        type: Boolean
      }
    }
  ]
});

const Invitation = mongoose.model("Invitation", invitationSchema);

module.exports = Invitation;
