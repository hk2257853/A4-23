import mongoose from "mongoose";

// TODO: make these required
const managerSchema = mongoose.Schema({
    drivername: String,
    model: String,
    colour: String,
    creator: String,
})

var Manager = mongoose.model("ManagerData", managerSchema);

export default Manager;
