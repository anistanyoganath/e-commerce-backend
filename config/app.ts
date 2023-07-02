import express from "express";
import bodyParser from "body-parser";
import connectDatabase from "./db";
import ProductController from "../controllers/ProductController";
import { Authorize } from "./authorize";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Authorize, ProductController);
connectDatabase();

export default app;
