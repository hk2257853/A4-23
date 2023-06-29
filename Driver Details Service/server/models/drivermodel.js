import mongoose from "mongoose";

const driverSchema = mongoose.Schema({
    name: String,
    email: String,
    contact: String
})

var Driver = mongoose.model("DriverData", driverSchema);

export default Driver;
