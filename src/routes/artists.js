const express = require("express");

const router = express.Router();
const connection = require("../config");

/* RETREIVE ALL ARTISTS */
router.get("/", (req, res) => {
    connection.query("SELECT * FROM artists", (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving categories");
      } else {
        res.json(results);
      }
    });
  });



module.exports = router;
