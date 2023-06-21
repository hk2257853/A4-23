import express from "express";
import { createDriverData, getDriverDatas, deleteDriverData, updateDriverData } from "../controller/drivercontroller.js";

const router = express.Router();

router.post("/", createDriverData);
router.get("/", getDriverDatas); 
router.delete("/:id", deleteDriverData);
router.patch("/:id", updateDriverData);

export default router;
