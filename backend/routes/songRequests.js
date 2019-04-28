const express = require("express");
const router = express.Router({ mergeParams: true });

const {
    createSongRequest,
    getSongRequest,
    updateSongRequest,
    deleteSongRequest
} = require("../handlers/songRequests");

//prefix - /api/invitation/:id/SongRequest
router.route("/")
    .post(createSongRequest);

// prefix - /api/invitation/:id/SongRequests/:request_id
router.route("/:request_id")
    .get(getSongRequest)
    .delete(deleteSongRequest)
    .put(updateSongRequest);

module.exports = router;
