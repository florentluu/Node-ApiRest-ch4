const express = require("express");
const music = require("./music");
const fashion = require("./fashion");
const artists = require("./artists");


const router = express.Router();

router.use("/music", music);
router.use("/fashion", fashion);
router.use("/artists", artists);


module.exports = router;