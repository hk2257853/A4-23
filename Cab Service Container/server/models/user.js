import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String }, // TODO. mongodb vs something like uuid which will be better. if going with mongo send to fe
  utype: {type: String, required: true}
});

export default mongoose.model("User", userSchema);
