const db = require("../models");

exports.createGuest = async function(req, res, next) {
  try {
    let guest = await db.Guest.create({
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      isChild: req.body.isChild,
      invitation: req.params.id
    });
    let foundInvitation = await db.Invitation.findById(req.params.id);
    foundInvitation.guests.push(guest.id);
    await foundInvitation.save();
    let foundGuest = await db.Guest.findById(guest.id).populate("invitation", {
      code: true
    });
    return res.status(200).json(foundGuest);
  } catch (err) {
    return next(err);
  }
};

exports.getGuests = async function(req, res, next) {
  try {
    let guests = await db.Guest.find().populate("invitation", {
      code: true
    });
    return res.status(200).json(guests);
  } catch (err) {
    return next(err);
  }
};

exports.getGuest = async function(req, res, next) {
  try {
    let guest = await db.Guest.findById(req.params.guest_id).populate("invitation", {
      code: true
    });
    return res.status(200).json(guest);
  } catch (err) {
    return next(err);
  }
};

exports.deleteGuest = async function(req, res, next) {
  try {
    let foundGuest = await db.Guest.findById(req.params.guest_id);
    await foundGuest.remove();
    return res.status(200).json(foundGuest);
  } catch (err) {
    return next(err);
  }
};

exports.updateGuest = async function(req, res, next) {
  try {
    let updateGuest = await db.Guest.findByIdAndUpdate(req.params.guest_id, req.body, { new: true });
    return res.status(200).json(updateGuest);
  } catch (err) {
    return next(err);
  }
};

module.exports = exports;
