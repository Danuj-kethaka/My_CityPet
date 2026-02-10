import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/User.route.js";
import appointmentRoutes from "./routes/Appointment.route.js"
import petprofileRoutes from "./routes/PetProfile.route.js"
import PetAdoption from "./routes/PetAdoption.route.js"
import adminRoutes from "./routes/Admin.route.js"
import { fileURLToPath } from 'url';
import path from "path"

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cookieParser());

//User Routes
app.use("/api/users", userRoutes);

//Appointment Routes
app.use("/api/appointments",appointmentRoutes);

//Pet Profile Routes
app.use("/api/petprofile",petprofileRoutes)

//Pet Adoption Routes
app.use("/api/petadoption",PetAdoption);

//Admin create Route
app.use("/api/admin", adminRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
