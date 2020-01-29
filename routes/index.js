const express = require("express");
const products = require("./products");
const categories = require("./categories");
const users = require("./users");
const profile = require("./profile/profile");
const basket = require("./basket");

const router = express.Router();

router.use("/products", products);
router.use("/categories", categories);
router.use("/users", users);
router.use("/profile", profile);
router.use("/basket", basket);

module.exports = router;