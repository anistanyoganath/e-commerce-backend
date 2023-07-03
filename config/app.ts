import express from "express";
import bodyParser from "body-parser";
import connectDatabase from "./db";
import { config } from "dotenv";
import ProductController from "../controllers/ProductController";
import { Authorize } from "./authorize";
import cors from "cors";

config();
connectDatabase();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: "*",
  })
);
app.use("/", ProductController);

export default app;
