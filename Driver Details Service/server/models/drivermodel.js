import mongoose from "mongoose";

const driverSchema = mongoose.Schema({
    name: String,
    email: String,
    contact: Number
})

var Driver = mongoose.model("DriverData", driverSchema);

export default Driver;
