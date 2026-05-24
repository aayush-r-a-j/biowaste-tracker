import mongoose from "mongoose";

const WasteSchema = new mongoose.Schema({

  hospital: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },

});



export default
  mongoose.models.Waste ||
  mongoose.model("Waste", WasteSchema);