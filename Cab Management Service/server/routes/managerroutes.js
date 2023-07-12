import express from "express";
import { createManagerData, getManagerDatas, deleteManagerData } from "../controller/managercontroller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createManagerData);
router.get("/", auth, getManagerDatas); 
router.delete("/:id", auth, deleteManagerData);

export default router;
