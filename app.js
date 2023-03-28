const express = require("express");
const app = express();
const upload = require("./routes/upload");
const stream = require("./routes/stream");
const download = require("./routes/download");

app.use(express.urlencoded({ extended: true }));

app.use("/api", upload);
app.use("/api", stream);
app.use("/api", download);

module.exports = app;
