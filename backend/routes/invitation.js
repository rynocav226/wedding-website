const express = require("express");
const router = express.Router();
const handlers = require("../handlers/invitation");

router.route("/")
  .post(handlers.createInvitation)
  .get(handlers.getInvitations);

router.route("/:invitation_id")
  .get(handlers.getInvitation)
  .delete(handlers.deleteInvitation)
  .put(handlers.updateInvitation);

module.exports = router;
