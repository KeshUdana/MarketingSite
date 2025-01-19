import { Router } from "express";
import Retailer from "../models/retailer.js";  // Adjust based on your file structure

const router = Router();

// Add a new retailer
router.post("/api/retailers", async (req, res) => {
  try {
    const retailer = new Retailer(req.body);
    await retailer.save();
    res.status(201).json({ message: "Retailer added successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
