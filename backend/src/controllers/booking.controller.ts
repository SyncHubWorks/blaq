import { Response } from "express";
import Booking from "../models/booking.model";
import User from "../models/user.model";
import { AuthRequest } from "../middlewares/auth.middleware";

export const createBooking = async (req: AuthRequest, res: Response) => {
  try {
    const customerId = req.user?._id;
    if (!customerId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const {
      creativeId,
      serviceType,
      description,
      price,
      duration,
      scheduledAt,
      notes,
    } = req.body;

    // Basic validation
    if (!creativeId || !serviceType || !price || !scheduledAt) {
      return res
        .status(400)
        .json({ message: "Missing required booking fields" });
    }

    const isCreative = await User.findOne({ _id: creativeId });
    if (!isCreative) {
      return res.status(400).json({ message: "Creative not found" });
    }

    if (isCreative.role !== "creative") {
      return res.status(400).json({ message: "You can only book creatives" });
    }

    // Prevent booking yourself
    if (customerId.toString() === creativeId.toString()) {
      return res.status(400).json({ message: "You cannot book yourself" });
    }

    const booking = new Booking({
      customerId,
      creativeId,
      serviceType,
      description,
      price,
      duration,
      scheduledAt,
      notes,
      status: "pending",
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error });
  }
};

export const getAllCreatives = async (_req: Request, res: Response) => {
  try {
    const creatives = await User.find({ role: "creative" }).select(
      "fullName email createdAt",
    );

    if (!creatives || creatives.length === 0) {
      return res.status(404).json({ message: "No creatives found" });
    }

    res.status(200).json(creatives);
  } catch (error) {
    res.status(500).json({ message: "Error fetching creatives", error });
  }
};
