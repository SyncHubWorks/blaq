import mongoose, { Document, Schema } from "mongoose";

type UserRoles = "customer" | "creative" | "admin";

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  role?: UserRoles;
  expoPushToken?: string;
  isVerified?: boolean;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
}

const userSchema = new Schema<IUser>(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["customer", "creative", "admin"],
      default: "student",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    expoPushToken: {
      type: String,
      default: null,
    },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
  },
  { timestamps: true },
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
