import mongoose from "mongoose";
import { ENV } from "./env";

const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI!);

    console.log("DB connected successfully!!");
  } catch (error) {
    console.error("Error connecting to DB", error);
    process.exit(1);
  }
};

export default connectDB;
