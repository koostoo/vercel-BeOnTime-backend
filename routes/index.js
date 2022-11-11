var express = require("express");
var router = express.Router();

router.get("/date", (req, res) => {
  const date = new Date();
  res.json({ now: date.toLocaleString() });
});

module.exports = router;
