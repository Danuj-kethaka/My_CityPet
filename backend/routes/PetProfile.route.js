import express from "express"
const router = express.Router();
export default router;
import {createPetProfile} from "../controllers/Petprofile.Controller.js";
import { protect } from "../middleware/auth.middleware.js";

router.post("/",createPetProfile);