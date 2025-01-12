const mongoose = require("mongoose");

const retailerSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  mobile:{type:String,required:true,unique:true},
  email: { type: String, required: true, unique: true },
  company: { type: String,required:true },
  companyWebsite:{type:String},
  message:{type:String},
  anualRevenue:{type:String},
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Retailer", retailerSchema);
