import express from "express";
import { createDriverData, getDriverDatas, deleteDriverData, updateDriverData } from "../controller/drivercontroller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createDriverData);
router.get("/", auth, getDriverDatas); 
router.delete("/:id", auth, deleteDriverData);
router.patch("/:id", auth, updateDriverData);

export default router;
