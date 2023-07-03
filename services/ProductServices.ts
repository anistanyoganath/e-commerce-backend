import { Products } from "../entities/Product";
import { ProductModel } from "../models/ProductModel";

export const getAllProducts = async () => {
  return await Products.find();
};

export const addNewProduct = async (productModel: ProductModel) => {
  await Products.collection.insertOne(productModel);
};

export const updateProduct = async (productModel: ProductModel) => {
  await Products.findOneAndUpdate(productModel);
};

export const deleteProduct = async (sku: string) => {
  await Products.findOneAndDelete({
    sku: sku
  });
};
