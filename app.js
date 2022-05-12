const express = require("express");

app = express();

//port number
const port = 3000;

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

app.listen(port, (err) => {
  err ? console.error(err) : console.log(`go to the ${port}`);
});
