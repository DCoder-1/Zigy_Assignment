const express = require("express");
const router = express.Router();
const streamController = require("../controllers/stream");

router.route("/stream/:id").get(streamController.stream);
module.exports = router;
