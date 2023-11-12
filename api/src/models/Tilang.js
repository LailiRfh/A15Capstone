import mongoose from "mongoose";
const { Schema } = mongoose;

const tilangSchema = new mongoose.Schema({
  // ID: {
  //   type: String,
  //   required: true,
  // },

  nomorKendaraan: {
    type: String,
    required: true,
  },
  tanggal: {
    type: String,
    required: true,
  },
  lokasi: {
    type: String,
    required: true,
  },
  keterangan: {
    type: String,
    required: true,
  },
  // riderId:{
  //   type: mongoose.Types.ObjectId,
  //   required: false,
  // }
});

export default mongoose.model("Tilang", tilangSchema);
