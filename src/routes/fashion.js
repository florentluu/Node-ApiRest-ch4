const express = require("express");

const router = express.Router();
const connection = require("../config");

/* RETREIVE ALL fashion */
router.get("/", (req, res) => {
    connection.query("SELECT * FROM fashion", (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving categories");
      } else {
        res.json(results);
      }
    });
  });



module.exports = router;