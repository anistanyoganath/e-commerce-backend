import { Products } from "../entities/Product";

export const getAllProducts = async () => {
  return await Products.find();
};
