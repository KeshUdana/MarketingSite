import { Schema, model } from "mongoose";

import mongoose from 'mongoose';  // Add this line to import mongoose

const userSchema = new Schema({
  email: { 
    type: String, 
    required: [true, "Email is required"], 
    unique: true, 
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"] 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
});

const User = mongoose.model("User", userSchema);

// Default export
export default User;
