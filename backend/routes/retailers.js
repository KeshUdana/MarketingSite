const express = require("express");
const { addRetailer } = require("../controllers/retailerController");
const router = express.Router();

router.post("/", addRetailer);

module.exports = router;
