import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/User.route.js";
import appointmentRoutes from "./routes/Appointment.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

//User Routes
app.use("/api/users", userRoutes);

//Appointment Routes
app.use("/api/appointments",appointmentRoutes);

//Admin create Route
app.use("/api/admin", userRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
