const User = require("../models/user");

const addUser = async (req, res) => {
  const { email } = req.body;
  try {
    const newUser = new User({ email });
    await newUser.save();
    res.status(201).json({ message: "User added to the waitlist." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addUser };
