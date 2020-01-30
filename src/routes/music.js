const express = require("express");

const router = express.Router();
const connection = require("../config");

/* RETREIVE ALL MUSIC */
router.get("/", (req, res) => {
    connection.query("SELECT * FROM music", (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving categories");
      } else {
        res.json(results);
      }
    });
  });



module.exports = router;
