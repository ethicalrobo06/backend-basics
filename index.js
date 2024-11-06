const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Expressjs!");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.get("/profile", (req, res) => {
  res.send("<h1>Profile</h1>");
});

app.listen(3000);
