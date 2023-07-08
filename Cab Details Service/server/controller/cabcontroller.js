import express from "express";
import CabData from "../models/cabmodel.js";
import mongoose from "mongoose";

const router = express.Router();

export const getCabDatas = async (req, res) => {
  try {    
    const cabData = await CabData.find({"creator":req.userId});
    res.status(200).json(cabData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCabData = async (req, res) => { 
  // Note: In postman testing I always forget to select JSON in body->raw
  const post = req.body;

  const { regno } = post;
  const existingCab = await CabData.findOne({ regno });
  if (existingCab) {
    return res.status(400).json({ message: "Registration number already exists" });
  }

  const newCabData = new CabData({
    ...post,
    // creator: req.userId,
  });

  try {
    await newCabData.save();
    res.status(200).json({ message: "Cab data created successfully!" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteCabData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) // this check if the id is valid mongoose id or not
    return res.status(404).send("Invalid id");

    const deletedCabData = await CabData.findByIdAndRemove(id);

    if (!deletedCabData)
    return res.status(404).send("No cab data with the given id");

    res.json({ message: "Cab data deleted successfully." });
};
  
export const updateCabData = async (req, res) => {
  const { id } = req.params;
  const { regno, model, colour } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { regno, model, colour, _id: id };
  await CabData.findByIdAndUpdate(id, updatedPost, { new: true });
  res.json(updatedPost);
};
  
export default router;
