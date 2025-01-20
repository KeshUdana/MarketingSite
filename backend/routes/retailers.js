import express from "express";
import Retailer from "../models/retailer.js";  // Ensure correct path

const router = express.Router();
console.log("Retiler router log eka")


// Add a new retailer
router.post("/demo", async (req, res) => {
  console.log("Retailer route hit for /submit-demo");
  console.log("Request body:", req.body);
  const { name, email, company, title, mobile } = req.body;
  


  try {
    const newRetailer = new Retailer({
      name,
      email,
      company,
      title,
      mobile
    });

    await newRetailer.save();
    res.status(201).json({ message: "Retailer added successfully!" });
  } catch (error) {
    console.error("Error adding retailer:", error);
    res.status(500).json({ message: "Error saving retailer to the database" });
  }
    
});

export default router;
