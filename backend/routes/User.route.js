import express from "express";
const router = express.Router();
export default router;
import { createUser, loginUser } from "../controllers/User.Controller.js";
import { getUsers, updateUser } from "../controllers/User.Controller.js";
import { deleteUser } from "../controllers/User.Controller.js";
import { createAdmin } from "../controllers/Admin.Controller.js";
import User from "../models/User.Model.js";
import mongoose from "mongoose";

//user routes
router.post("/", createUser);
router.get("/", getUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

//login routes
router.post("/login", loginUser);

//create admin route
router.post("/admin", createAdmin);
