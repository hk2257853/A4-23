import express from "express";
import DriverData from "../models/drivermodel.js";
import mongoose from "mongoose";

const router = express.Router();

export const getDriverDatas = async (req, res) => {
  try {    
    const driverData = await DriverData.find({}); // all drivers should be able to see all skills
    res.status(200).json(driverData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createDriverData = async (req, res) => {
    const post = req.body;

    // TODO: handle duplications
    // const {skill} = post;
    // const existingSkill = await DriverData.findOne({ skill });  
    // if (existingSkill)
    // return res.status(400).json({ message: "Driver already exist" });
  
    const newDriverData = new DriverData({
      ...post,
      // creator: req.userId,
    });
  
    try {
      await newDriverData.save();
      res.status(200).json({ message: "Driver data created successfully!" });
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
};

export const deleteDriverData = async (req, res) => {
  const { id } = req.params;

  // TODO: fix no post with id (I think this logic is wrong)
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await DriverData.findByIdAndRemove(id);

  res.json({ message: "Driver data deleted successfully." });
};
  
export const updateDriverData = async (req, res) => {
  const { id } = req.params;
  const { name, email, contact } = req.body;

  // TODO: fix no post with id (I think this logic is wrong)
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { name, email, contact, _id: id };
  await DriverData.findByIdAndUpdate(id, updatedPost, { new: true });
  res.json(updatedPost);
};
  
export default router;
