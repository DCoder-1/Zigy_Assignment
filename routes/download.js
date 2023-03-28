const express = require("express");
const router = express.Router();
const downloadController = require("../controllers/download");

router.route("/download/:id").get(downloadController.download);
module.exports = router;
