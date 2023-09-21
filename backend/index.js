import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routers/auth.js";
import cartRouter from "./routers/cart.js";
import categoryRouter from "./routers/category.js";
import productRouter from "./routers/product.js";
import orderRouter from "./routers/order.js";
import userRouter from "./routers/user.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import swaggerUI from "swagger-ui-express";
import swaggerOption from './swagger.js';


const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerOption))

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(5000, () => {
  connect();
  console.log("Connected to backend.");
  console.log("http://localhost:5000/swagger")
});