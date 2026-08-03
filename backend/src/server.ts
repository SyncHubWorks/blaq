import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import { ENV } from "./config/env";
import connectDB from "./config/database";

import authRoutes from "./routes/auth.route";

const app = express();
const { PORT } = ENV;

// WEBHOOKS
// app.use(
//   "/api/webhooks/paystack",
//   express.raw({ type: "application/json" }),
//   paystackWebhook,
// );

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan("dev"));

// HEALTH ROUTE
app.use("/health", (_req, res) => {
  res.status(200).json({ message: "Backend running" });
});

// API ENDPOINTS
app.use("/api/auth", authRoutes);

// CONNECT DB AND LISTEN TO PORT
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Backend running on PORT:${PORT}`);
  });
});
