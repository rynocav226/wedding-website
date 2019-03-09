const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI  || "mongodb://localhost/wedding", {
  keepAlive: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

module.exports.Invitation = require("./invitation");
module.exports.Guest = require("./guest");
module.exports.SongRequests = require("./songRequests");
module.exports.Song = require("./songList");
module.exports.User = require("./user");