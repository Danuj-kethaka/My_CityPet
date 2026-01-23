import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/User.route.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

//User Routes
app.use("/api/users", userRoutes);
app.use("/api/users/login", userRoutes);



app.use("/api/admin", userRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
