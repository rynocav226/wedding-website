const db = require("../models");

exports.createInvitation = async function(req, res, next) {
  try {
    let invitation = await db.Invitation.create({
      code: req.body.code
    });
    return res.status(200).json(invitation);
  } catch (err) {
    if (err.code === 11000) {
      err.message = "Invitation Code is taken.";
    }
    return next({
      status: 400,
      message: err.message
    });
  }
};

exports.getInvitations = async function(req, res, next) {
  try {
    let invitations = await db.Invitation.find().populate("guestInfo", {
      adults: true,
      children: true,
      daycare: true,
      responded: true
    });
    return res.status(200).json(invitations);
  } catch (err) {
    return next(err);
  }
};

exports.getInvitation = async function(req, res, next) {
  try {
    let invitation = await db.Invitation.findById(req.params.invitation_id).populate("guestInfo", {
      adults: true,
      children: true,
      daycare: true,
      responded: true
    });
    return res.status(200).json(invitation);
  } catch (err) {
    return next(err);
  }
};

exports.deleteInvitations = async function(req, res, next) {
  try {
    let invitations = await db.Invitation.find();
    for (const invitation of invitations) {
      await invitation.remove();
    }
    return res.status(200).json({"message" : "All invitations deleted."});
  } catch (err) {
    return next(err);
  }
}

exports.deleteInvitation = async function(req, res, next) {
  try {
    let foundInvitation = await db.Invitation.findById(req.params.invitation_id);
    await foundInvitation.remove();
    return res.status(200).json(foundInvitation);
  } catch (err) {
    return next(err);
  }
};

exports.updateInvitation = async function(req, res, next) {
  try {
    let updateInvitation = await db.Invitation.findByIdAndUpdate(req.params.invitation_id, req.body, { new: true });
    return res.status(200).json(updateInvitation);
  } catch (err) {
    return next(err);
  }
};

module.exports = exports;
