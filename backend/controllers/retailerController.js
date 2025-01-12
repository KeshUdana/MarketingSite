const Retailer = require("../models/retailer");

const addRetailer = async (req, res) => {
  const { name, email, company } = req.body;
  try {
    const newRetailer = new Retailer({ name, email, company });
    await newRetailer.save();
    res.status(201).json({ message: "Retailer information submitted." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addRetailer };
