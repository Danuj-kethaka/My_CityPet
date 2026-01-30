import express from "express"
const router = express.Router();
export default router;
import { createAppointment,getAppointments ,updateAppointment} from "../controllers/Appointment.Controller.js";
import { protect } from "../middleware/auth.middleware.js";

router.post("/",protect,createAppointment);
router.get("/",getAppointments);
router.put("/:id/status",updateAppointment);