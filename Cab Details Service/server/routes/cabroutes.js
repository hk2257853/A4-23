import express from "express";
import { createCabData, getCabDatas, deleteCabData, updateCabData } from "../controller/cabcontroller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createCabData);
router.get("/", auth, getCabDatas); 
router.delete("/:id", auth, deleteCabData);
router.patch("/:id", auth, updateCabData);

export default router;
