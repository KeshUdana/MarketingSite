import { Router } from "express";
import User from "./models/user";
const router = Router();

// Add a new user
router.post("/api/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User added successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
