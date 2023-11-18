import * as dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
let isConnected = false; //track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    isConnected = true;
    return console.log("Successfully Connected to the database");
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};
