const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/upload");

router.route("/upload").post(uploadController.upload);
module.exports = router;
