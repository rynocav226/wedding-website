const db = require("../models");

exports.createSongRequest = async function (req, res, next) {
    //5c154d170c26da3bec966861
    console.log("Create Message");
    try {
        console.log(`id is ${req.params.id}`)
        console.log(req.body)
        //create the initial song requests
        let request = await db.SongRequests.create({
            song1: req.body.song1,
            song2: req.body.song2,
            song3: req.body.song3,
            song4: req.body.song4,
            song5: req.body.song5,
            user: req.params.id
        });
        if(request)
            console.log("create song success")

        return res.status(200);//.json(foundMessage);
    } catch (error) {
        console.log(`Log error of ${error}`)
        return next(error);
    }
};

exports.updateSongRequest = async function (req, res, next) {
    //5c154d170c26da3bec966861
    console.log("Update Message");
    try {
        console.log(`id is ${req.params.id}`)
        console.log(req.body)

        var query = { 'user': req.params.id }
        let request = { "song1": req.body.song1, "song2": req.body.song2, "song3": req.body.song3, "song4": req.body.song4, "song5": req.body.song5, "user": req.params.id }

        db.SongRequests.findOneAndUpdate(query, request, { upsert: true }, function (err, doc) {
            if (err) {
                console.log(`Update error ${err}`)
            }
        })

        console.log(request)

        let foundUser = await db.Invitation.findByIdAndUpdate(req.params.id, request, function (err, foundReq) {
            if (err) {
                console.log(`Update err ${err}`)
            } else {
                console.log("Update went well")
            }
        })
        await foundUser.save();

        console.log(`Next step`)
        return res.status(200);
    } catch (error) {
        console.log(`Log error of ${error}`)
        return next(error);
    }
};

exports.getSongRequest = async function (req, res, next) {
    console.log("Get request");
    try {
        let request = await db.SongRequests.find();
        return res.status(200).json(request);
    } catch (error) {
        return next(error);
    }
};

exports.getAllSongs = async function (req, res, next) {
    try {
        console.log("Getting songs")
        let request = await db.Song.find();
        return res.status(200).json(request);
    } catch (error) {
        return next(error);
    }
}

exports.deleteSongRequest = async function (req, res, next) {
    console.log(`delete request ${req.params.request_id}`);
    try {
        let foundRequest = await db.SongRequests.findById(req.params.request_id);
        await foundRequest.remove();
        return res.status(200).json(foundRequest);
    } catch (error) {
        return next(error);
    }
};