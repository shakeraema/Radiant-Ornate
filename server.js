// require("events").EventEmitter.defaultMaxListeners = 20;

import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/database.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
// import activityLogRoutes from "./routes/activityLogRoutes";



//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();
// const cors = require("cors");

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/activity-log", activityLogRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/payment", paymentRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Radiant-Ornate</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
