const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  const sql =
    "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], err => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
});

module.exports = router;
