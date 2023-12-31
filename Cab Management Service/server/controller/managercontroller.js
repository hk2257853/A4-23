import express from "express";
import ManagerData from "../models/managermodel.js";
import mongoose from "mongoose";

const router = express.Router();

export const getManagerDatas = async (req, res) => {
  try {    
    const managerData = await ManagerData.find({"creator":req.userId});
    res.status(200).json(managerData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createManagerData = async (req, res) => {
    const post = req.body;

    // TODO: add the edge cases
  
    const newManagerData = new ManagerData({
      ...post,
      creator: req.userId,
    });
  
    try {
      await newManagerData.save();
      res.status(200).json(newManagerData);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
};

export const deleteManagerData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) // this check if the id is valid mongoose id or not
    return res.status(404).send("Invalid id");

    const deletedManagerData = await ManagerData.findByIdAndRemove(id);

    if (!deletedManagerData)
    return res.status(404).send("No manager data with the given id");

    res.json({ message: "Manager data deleted successfully." });
};
  
export default router;
