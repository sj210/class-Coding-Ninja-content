const express = require("express");
const app = express();
const db = require("./config/mongoose");
const Post = require("./Model/Post");
const asynError = require("express-async-errors");
const { errorHandler } = require("./middleware");
app.use(express.json());

app.get("/hello", (req, res) => {
  return res.status(200).json({
    msg: "Hello world",
    data: req.query,
  });
});

app.use("/", require("./routes"));
app.use(errorHandler);

module.exports = app;
