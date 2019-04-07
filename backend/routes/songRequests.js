const express = require("express");
const router = express.Router({ mergeParams: true });

const {
    createSongRequest,
    getSongRequest,
    updateSongRequest,
    deleteSongRequest
} = require("../handlers/songRequests");

//prefix - /api/invitation/:id/SongRequest
router.route("/").post(createSongRequest)
    .put(updateSongRequest)
    .get(getSongRequest)

// prefix - /api/invitation/:id/SongRequests/:SongRequest_id
router
    .route("/:SongRequest_id")
    .get(getSongRequest)
    .delete(deleteSongRequest);


module.exports = router;
