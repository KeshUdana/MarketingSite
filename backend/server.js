import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.js"; // Import routes from user.js
import retRoutes from "./routes/retailers.js"; // Import routes from retailers.js

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration
const corsOptions = {
  origin: [
    "https://marketing-site-g5p4rbled-keshudanas-projects.vercel.app", // Frontend domain without trailing slash
    "http://localhost:3000", // Allow localhost for development
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Explicitly allow OPTIONS
  allowedHeaders: ["Content-Type", "Authorization"], // Allow necessary headers
  credentials: true, // Allow cookies if needed
};

// Middleware
app.use(cors(corsOptions)); // Use CORS with specified options
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 30000, // Wait up to 30 seconds for MongoDB to respond
    socketTimeoutMS: 45000, // Wait up to 45 seconds for socket inactivity
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit if unable to connect to the database
  });

// Preflight request handler for CORS
app.options("*", cors(corsOptions)); // Handle preflight requests for all routes

// Mount routes on '/api'
app.use("/api", userRoutes);
console.log("Server.js, mounted the user API path");

app.use("/api", retRoutes);
console.log("Server.js, mounted the retailer API path");

// Start the server with dynamic port handling (simplified for Render)
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
