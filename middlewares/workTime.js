const workTime = (req, res, next) => {
  const today = new Date();
  req.date = today;

  req.date.getDay() == 0 ||
  req.date.getDay() == 6 ||
  req.date.getHours() < 9 ||
  req.date.getHours() > 17
    ? res.send("<h1>OUT OF WORK TIME</h1>")
    : next();
};

module.exports = { workTime };
