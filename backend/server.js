const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")
require("dotenv").config();

const app =express();
const PORT=process.env.PORT||5000

//MiddelWare here bn
app.use(cors());
app.use(bodyParser.json())

//Import Routes
const userRoutes=require("./routes/user");
const retailerRoutes=require("./rotues/retailer");

app.use("/api/users",userRoutes);
app.use("/api/retailers",retailerRoutes);

//MongoDB connection
mongoose
    .connect.log(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("Connected to Mongo DB")
        app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
    })
    .catch((error)=>console.log(error.message));