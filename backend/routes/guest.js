const express = require("express");
const router = express.Router({ mergeParams: true });
const handlers = require("../handlers/guest");

router.route("/")
  .post(handlers.createGuest);

router.route("/:guest_id")
  .get(handlers.getGuest)
  .delete(handlers.deleteGuest)
  .put(handlers.updateGuest);

module.exports = router;
