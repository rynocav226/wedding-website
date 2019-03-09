const express = require("express");
const router = express.Router({ mergeParams: true });

const {
    createSongRequest,
    getSongRequest,
    updateSongRequest,
    deleteSongRequest
} = require("../handlers/SongRequests");

//prefix - /api/users/:id/SongRequest
router.route("/").post(createSongRequest)
    .put(updateSongRequest)
    .get(getSongRequest)

// prefix - /api/users/:id/SongRequests/:SongRequest_id
router
    .route("/:SongRequest_id")
    .get(getSongRequest)
    .delete(deleteSongRequest);


module.exports = router;
