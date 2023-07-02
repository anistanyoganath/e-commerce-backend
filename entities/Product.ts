import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
  sku: Number,
  name: String,
  description: String,
  price: Number,
});

export const Products = mongoose.model("Products", productSchema);
