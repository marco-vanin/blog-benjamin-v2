import mongoose from "mongoose";

export async function connectToDatabase(url: string) {
  try {
    await mongoose.connect(url);
    console.log("Successfully connected to MongoDB Atlas!");
  } catch (error) {
    console.error("Connection to MongoDB Atlas failed!", error);
    process.exit(1);
  }
}
