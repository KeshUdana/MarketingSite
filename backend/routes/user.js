// Backend: Express (routes/users.js)
import express from "express";
import User from "../models/user.js";  // Ensure the correct path and file extension for your model

const router = express.Router(); // Use express.Router()

// POST route to handle form submission
router.post("/submit-waitlist", async (req, res) => {
  const { name, email } = req.body;

  try {
    // Save the user to the database
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ message: "User added to the waitlist!" });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Error saving user to the database" });
  }
});

export default router; // Export the router
