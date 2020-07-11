/*
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
*/
  const MongoClient = require('mongodb').MongoClient;
  const client = new MongoClient(process.env.MONGODB_URI || "mongodb://localhost/wedding", {
    useNewUrlParser: true
  });

  client.connect(err => {
    const collection = client.db("test").collection("devices");
    //perform actions on the collection object
    client.close();
  });

module.exports.Invitation = require("./invitation");
module.exports.Guest = require("./guest");
module.exports.SongRequests = require("./songRequests");
module.exports.Song = require("./songList");
