import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb://127.0.0.1:27017/biowasteDB";



  export const connectDB = async () => {

  try {

    await mongoose.connect(MONGODB_URI);

    console.log("MongoDB Connected");

  } catch (error) {

    console.log("MongoDB Connection Error");

  }

}