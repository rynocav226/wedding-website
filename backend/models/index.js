const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI  || "mongodb://localhost/wedding", {
  keepAlive: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  reconnectTries: 3
}).catch(err => { 
    console.log(err);
    process.exit(1);
  });

module.exports.Invitation = require("./invitation");
module.exports.Guest = require("./guest");
module.exports.SongRequests = require("./songRequests");
module.exports.Song = require("./songList");
