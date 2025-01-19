import express from "express";
import User from "../models/user.js";
console.log("mounted 1");
const router = express.Router();  


router.post("/submit-waitlist", async (req, res) => {
  console.log("mounted 2");
  const { name, email } = req.body;

  try {
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ message: "User added to the waitlist!" });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Error saving user to the database" });
  }
});


export default router;
