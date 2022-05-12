const express = require("express");

app = express();

//handle the work hours
const today = new Date();

app.use((req, res, next) => {
  today.getDay() == 0 ||
  today.getDay() == 6 ||
  today.getHours() < 9 ||
  today.getHours() > 17
    ? res.send("<h1>OUT OF WORK</h1>")
    : next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/home.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/pages/contact.html");
});

app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/pages/services.html");
});

app.listen(3000, () => console.log("server is runing on port 3000"));
