import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import fs from "fs";
import path from "path";

import { ENV } from "./config/env";
import connectDB from "./config/database";

import authRoutes from "./routes/auth.route";

const app = express();
const publicDir = path.join(process.cwd(), "public");
const { PORT, FRONTEND_URL } = ENV;

// WEBHOOKS
// app.use(
//   "/api/webhooks/paystack",
//   express.raw({ type: "application/json" }),
//   paystackWebhook,
// );

// MIDDLEWARES
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// HEALTH ROUTE
app.use("/health", (_req, res) => {
  res.status(200).json({ message: "Backend running" });
});

// API ENDPOINTS
app.use("/api/auth", authRoutes);

if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir));

  app.get("/{*any}", (_req, res, next) => {
    res.sendFile(path.join(publicDir, "index.html"), (err) => next(err));
  });
}

// CONNECT DB AND LISTEN TO PORT
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Backend running on PORT:${PORT}`);
  });
});
