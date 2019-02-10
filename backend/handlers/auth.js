const db = require("../models");

exports.login = async function(req, res, next) {
  try {
    let invitation = await db.Invitation.findOne({
      code: req.body.code
    }.populate("guests", {
      lastName: true,
      firstName: true,
      attending: true,
      isChild: true
    }));
    return res.status(200).json(invitation);
  } catch (err) {
    return next({
      status: 400,
      message: "Invalid Invitation Code."
    });
  }
};

module.exports = exports;
