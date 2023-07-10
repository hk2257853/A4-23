import express from "express";
import { createManagerData, getManagerDatas, deleteManagerData, updateManagerData } from "../controller/managercontroller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createManagerData);
router.get("/", auth, getManagerDatas); 
router.delete("/:id", auth, deleteManagerData);
router.patch("/:id", auth, updateManagerData);

export default router;
