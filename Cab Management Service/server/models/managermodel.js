import mongoose from "mongoose";

// TODO: make these required
const managerSchema = mongoose.Schema({
    email: String,
    drivername: String,
    regno: String,
    model: String,
    creator: String,
})

var Manager = mongoose.model("ManagerData", managerSchema);

export default Manager;
