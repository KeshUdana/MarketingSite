import mongoose from "mongoose";
const { Schema, model } = mongoose;

const retailerSchema = new Schema({
  name: { 
    type: String, 
    required:true, 
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
  title:{
    type:String,
    required:[true,"Job is required"]
  },
  mobile: { 
    type: String, 
    required: [true, "Mobile number is required"], 
    unique: true 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Retailer=model("Retailer", retailerSchema);
export default Retailer;