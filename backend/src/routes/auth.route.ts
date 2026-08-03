import express from "express";
import {
  checkAuth,
  loginUser,
  logoutUser,
  requestPasswordReset,
  resetPassword,
  signupUser,
} from "../controllers/auth.controller";
import { protectAuth } from "../middlewares/auth.middleware";

const router = express.Router();

// PUBLIC ROUTES
router.post("/register", signupUser);
router.post("/login", loginUser);
router.post("/forgot-password", requestPasswordReset);
router.post("/reset-password", resetPassword);

// PROTECTE ROUTES
router.get("/check", protectAuth, checkAuth);
router.post("/logout", protectAuth, logoutUser);

export default router;
