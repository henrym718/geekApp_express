import mongoose from "mongoose";
import { env } from "../config/env.js";

const mongoConnect = async () => {
  mongoose.connect(env.MONGO_DEV, { useNewUrlParser: true, useUnifiedTopology: true });
  const mongo = await mongoose.connection;
  mongo.on("error", (err) => console.log(err));
  mongo.on("open", () => console.log("connected to MongoDB Atlas"));
  mongo.on("close", () => console.log("closed to MongoDB Atlas"));
};

export default mongoConnect;
