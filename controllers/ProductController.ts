import express from "express";
import {
  addNewProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../services/ProductServices";
import { ResponseModel } from "../models/ResponseModel";
import { ProductModel } from "../models/ProductModel";

const ProductController = express.Router();

ProductController.get("/getAllProducts", async (req, res) => {
  try {
    let response: ResponseModel = {};
    let products = await getAllProducts();
    if (products.length > 0) {
      response.Status = true;
      response.Data = products;
    } else {
      response.Message = "No record found!!";
    }
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

ProductController.post("/addProduct", async (req, res) => {
  try {
    let response: ResponseModel = {};
    let productModel = req.body as ProductModel;
    if (productModel) {
      let result = await addNewProduct(productModel);
    }
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

ProductController.put("/updateProduct", async (req, res) => {
  try {
    let response: ResponseModel = {};
    let productModel = req.body as ProductModel;
    if (productModel) {
      let result = await updateProduct(productModel);
    }
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

ProductController.delete("/deleteProduct", async (req, res) => {
  try {
    let response: ResponseModel = {};
    let sku = req.body as number;
    if (sku) {
      let result = await deleteProduct(sku);
    }
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default ProductController;
