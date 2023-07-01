import express from "express";
import { getAllProducts } from "../services/ProductServices";
import { ResponseModel } from "../models/ResponseModel";

const ProductController = express.Router();

ProductController.get("/getAllProducts", async (req, res) => {
  try {
    let response: ResponseModel = {};
    let products = await getAllProducts();
    if (products.length > 0) {
      response.Status = true;
      response.Data = products;
    }
    res.send(response);
  } 
  catch (error) {
    res.status(400).send(error);
  }
});

export default ProductController;
