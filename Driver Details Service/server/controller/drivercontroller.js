import express from "express";
import DriverData from "../models/drivermodel.js";
import mongoose from "mongoose";

const router = express.Router();

export const getDriverDatas = async (req, res) => {
  try {    
    const driverData = await DriverData.find({"creator":req.userId});
    res.status(200).json(driverData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createDriverData = async (req, res) => {
    const post = req.body;

    const {email} = post;
    const existingDriver = await DriverData.findOne({ email });  
    if (existingDriver)
    return res.status(400).json({ message: "Email already exist" });
  
    const newDriverData = new DriverData({
      ...post,
      creator: req.userId,
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

  if (!mongoose.Types.ObjectId.isValid(id)) // this check if the id is valid mongoose id or not
    return res.status(404).send("Invalid id");

    const deletedDriverData = await DriverData.findByIdAndRemove(id);

    if (!deletedDriverData)
    return res.status(404).send("No driver data with the given id");

    res.json({ message: "Driver data deleted successfully." });
};
  
export const updateDriverData = async (req, res) => {
  const { id } = req.params;
  const { name, email, contact } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { name, email, contact, _id: id };
  await DriverData.findByIdAndUpdate(id, updatedPost, { new: true });
  res.json(updatedPost);
};
  
export default router;
