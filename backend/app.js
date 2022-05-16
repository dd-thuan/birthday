const express = require("express");
const app = express();
const path = require("path");



app.use(express.static(path.join(__dirname, "../FE/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../FE/build/index.html"));
})



module.exports = app;
