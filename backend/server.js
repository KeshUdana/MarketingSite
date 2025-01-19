import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.js"; // Import the user routes

dotenv.config();

const app = express();
let PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Routes
app.use("/api", userRoutes); // Mount the user routes under "/api"

// Function to start the server and handle port conflicts
const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

  // Handle port conflict error
  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log(`Port ${port} is in use. Trying port ${port + 1}...`);
      startServer(port + 1); // Increment port and try again
    } else {
      console.error("Server error:", err);
    }
  });
};

// Start the server
startServer(PORT);
