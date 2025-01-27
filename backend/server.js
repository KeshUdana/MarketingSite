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
  origin: "*", // Allow all origins
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Allow credentials if cookies/auth are used
};

// Middleware
app.use(cors(corsOptions)); // Apply CORS globally
app.use(express.json());

// Preflight request handler
app.options("*", cors(corsOptions)); // Handle preflight requests

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
