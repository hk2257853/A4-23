import mongoose from "mongoose";

// TODO: make these required, add assigned driver field
const cabSchema = mongoose.Schema({
    regno: String,
    model: String,
    colour: String,
    creator: String,
})

var Cab = mongoose.model("CabData", cabSchema);

export default Cab;
