import mongoose, { Schema, model } from "mongoose";

const retailerSchema = new Schema({
  firstname: { 
    type: String, 
    required: [true, "First name is required"] 
  },
  lastname: { 
    type: String, 
    required: [true, "Last name is required"] 
  },
  mobile: { 
    type: String, 
    required: [true, "Mobile number is required"], 
    unique: true 
  },
  email: { 
    type: String, 
    required: [true, "Email is required"], 
    unique: true, 
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"] 
  },
  company: { 
    type: String, 
    required: [true, "Company name is required"] 
  },
  companyWebsite: { 
    type: String, 
    match: [/^https?:\/\/.+/, "Please use a valid website URL"] 
  },
  message: { 
    type: String 
  },
  annualRevenue: { 
    type: String 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
});

const Retailer=mongoose.model("Retailer", retailerSchema);
export default Retailer;