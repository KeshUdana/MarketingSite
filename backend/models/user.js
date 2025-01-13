const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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

module.exports = mongoose.model("User", userSchema);
