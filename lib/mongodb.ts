import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI!
let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "cowfarm",
    });

    isConnected = true;
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Error:", error);
    throw error;
  }
};