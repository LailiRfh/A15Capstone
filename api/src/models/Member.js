import mongoose from "mongoose";
const { Schema } = mongoose;

const memberSchema = new mongoose.Schema({
  // niu: {
  //   type: String,
  //   required: true,
  // },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },

  isAdmin: {
    type: Boolean,
    default: true,
  }
},
  {timestamps:true}
);

export default mongoose.model("Member", memberSchema);
