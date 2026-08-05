import { Router } from "express";
import {
  createBooking,
  getAllCreatives,
} from "../controllers/booking.controller";
import { protectAuth } from "../middlewares/auth.middleware";

const router = Router();

// CREATE
router.post("/", protectAuth, createBooking);
router.get("/", protectAuth, getAllCreatives);

export default router;
