import mongoose, { Document, Schema } from "mongoose";

export interface IBooking extends Document {
  creativeId: mongoose.Types.ObjectId; // Creative being booked
  customerId: mongoose.Types.ObjectId; // Customer making the booking
  serviceType: string; // e.g. "Haircut", "Custom Suit"
  description?: string; // Optional service details
  price: number; // Price at booking time
  duration?: number; // Duration in minutes
  status: "pending" | "confirmed" | "completed" | "cancelled";
  scheduledAt: Date; // When the booking happens
  notes?: string; // Optional customer notes
  paymentRef?: string; // Paystack/Stripe reference
}

const bookingSchema = new Schema<IBooking>(
  {
    creativeId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    customerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    serviceType: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    duration: {
      type: Number,
      default: 30,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "pending",
    },
    scheduledAt: {
      type: Date,
      required: true,
    },
    notes: { type: String },
    paymentRef: { type: String },
  },
  { timestamps: true },
);

const Booking = mongoose.model<IBooking>("Booking", bookingSchema);

export default Booking;
