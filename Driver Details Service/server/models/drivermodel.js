import mongoose from "mongoose";

// TODO: make these required
const driverSchema = mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    creator: String,
})

var Driver = mongoose.model("DriverData", driverSchema);

export default Driver;
