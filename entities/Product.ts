import mongoose from "mongoose";
import { ProductModel } from "../models/ProductModel";
const Schema = mongoose.Schema;

const productSchema = new Schema(ProductModel);

export const Products = mongoose.model("Products", productSchema);
