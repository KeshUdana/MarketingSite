import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.js";  // Import routes from user.js
import retRoutes from "./routes/retailers.js"; 
dotenv.config();

const app = express();
let PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,       // Use the new URL string parser
  useUnifiedTopology: true,   // Use the new server discovery and monitoring engine
  serverSelectionTimeoutMS: 30000, // Wait up to 30 seconds for MongoDB to respond
  socketTimeoutMS: 45000,     // Wait up to 45 seconds for socket inactivity
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Mount routes on '/api'
app.use("/api", userRoutes);  
console.log("Server.js,mounted the user api path")


app.use("/api/retailers", retRoutes);
console.log("Server.js,mounted the retailer api path")

const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log(`Port ${port} is in use. Trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error("Server error:", err);
    }
  });
};

startServer(PORT);
