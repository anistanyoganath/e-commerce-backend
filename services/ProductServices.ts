import { Products } from "../entities/Product";
import { ProductModel } from "../models/ProductModel";

export const getAllProducts = async () => {
  return await Products.find();
};

export const addNewProduct = async (productModel: ProductModel) => {
  return await Products.create({
    sku: productModel.sku
  });
};

export const updateProduct = async (productModel: ProductModel) => {
  return await Products.findOneAndUpdate(productModel);
};

export const deleteProduct = async (sku: number) => {
  return await Products.findByIdAndDelete(sku);
};
