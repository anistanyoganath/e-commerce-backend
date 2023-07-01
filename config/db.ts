import { config } from "dotenv";
import mongoose from "mongoose";

config();

export default function connectDatabase() {
  mongoose.connect(process.env.CONNECTION_STRING!);
  const database = mongoose.connection;
  database.on("error", (error) => {
    console.log(error);
  });

  database.once("connected", () => {
    console.log("Database Connected");
  });
}
