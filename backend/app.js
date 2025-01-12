import retailerRoutes from "./routes/retailer";
import userRoutes from "./routes/user";

app.use(express.json());
app.use(retailerRoutes);
app.use(userRoutes);
