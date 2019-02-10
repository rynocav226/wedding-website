const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/wedding", {
  keepAlive: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

module.exports.Invitation = require("./invitation");
module.exports.Guest = require("./guest");
