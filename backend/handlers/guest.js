const db = require("../models");

exports.createGuest = async function(req, res, next) {
  try {
    let guest = await db.Guest.create({
      adults: req.body.adults,
      children: req.body.children,
      daycare: req.body.daycare,
      responded: req.body.responded,
      invitation: req.params.id
    });
    let foundInvitation = await db.Invitation.findById(req.params.id);
    foundInvitation.guestInfo = guest.id;
    await foundInvitation.save();
    let foundGuest = await db.Guest.findById(guest.id).populate("invitation", {
      code: true,
      responded: true
    });
    return res.status(200).json(foundGuest);
  } catch (err) {
    return next(err);
  }
};

exports.getGuest = async function(req, res, next) {
  try {
    let guest = await db.Guest.findById(req.params.guest_id).populate("invitation", {
      code: true,
      responded: true
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
