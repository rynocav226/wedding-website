const db = require("../models");

exports.createSongRequest = async function (req, res, next) {
    try {
        let request = await db.SongRequests.create({
            likes: req.body.likes,
            dislikes: req.body.dislikes,
            invitation: req.params.id
        });
        let foundInvitation = await db.Invitation.findById(req.params.id);
        foundInvitation.requests = request.id;
        await foundInvitation.save();
        let foundRequest = await db.SongRequests.findById(request.id).populate("invitation", {
            code: true
        });
        return res.status(200).json(foundRequest);
    } catch (error) {
        return next(error);
    }
};

exports.updateSongRequest = async function (req, res, next) {
    try {
        let updateRequest = await db.SongRequests.findByIdAndUpdate(req.params.request_id, req.body, { new: true });
        return res.status(200).json(updateRequest);
    } catch (error) {
        return next(error);
    }
};

exports.getSongRequest = async function (req, res, next) {
    try {
        let request = await db.SongRequests.findById(req.params.request_id).populate("invitation", {
            code: true
        });
        return res.status(200).json(request);
    } catch (error) {
        return next(error);
    }
};

exports.getAllSongs = async function (req, res, next) {
    try {
        let request = await db.Song.find();
        return res.status(200).json(request);
    } catch (error) {
        return next(error);
    }
}

exports.deleteSongRequest = async function (req, res, next) {
    try {
        let foundRequest = await db.SongRequests.findById(req.params.request_id);
        await foundRequest.remove();
        return res.status(200).json(foundRequest);
    } catch (error) {
        return next(error);
    }
};