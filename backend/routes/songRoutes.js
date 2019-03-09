const express = require("express");
const router = express.Router({ mergeParams: true });

const {
    getAllSongs
} = require("../handlers/songRequests");

//prefix - /api/songs
router.route("/").get(getAllSongs)


module.exports = router;
