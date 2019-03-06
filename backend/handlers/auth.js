const db = require("../models");

exports.login = async function(req, res, next) {
  try {
    let invitation = await db.Invitation.findOne({
      code: req.body.code
    });
    if (invitation) {
      return res.status(200).json(invitation);
    }
    return next({status: 400, message: "Invitation Code not found."});
  } catch (err) {
    return next(err);
  }
};

module.exports = exports;
