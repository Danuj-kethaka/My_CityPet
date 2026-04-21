import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "../backend/config/db.js";

import userRoutes from "../backend/routes/User.route.js";
import appointmentRoutes from "../backend/routes/Appointment.route.js";
import petprofileRoutes from "../backend/routes/PetProfile.route.js";
import PetAdoption from "../backend/routes/PetAdoption.route.js";
import adminRoutes from "../backend/routes/Admin.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/petprofile", petprofileRoutes);
app.use("/api/petadoption", PetAdoption);
app.use("/api/admin", adminRoutes);

// connect DB (important for serverless)
connectDB();

export default app;