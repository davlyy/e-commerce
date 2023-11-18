import mongoose, { Schema } from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  rating: Number,
  image: Image,
});

export const Item = mongoose.model("Item", ItemSchema);
