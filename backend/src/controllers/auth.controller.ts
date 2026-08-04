import { Request, Response } from "express";

import validator from "validator";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import User from "../models/user.model";
import { genToken } from "../config/genToken";
import { AuthRequest } from "../middlewares/auth.middleware";
import { ENV } from "../config/env";
import {
  sendWelcomeEmail,
  sendResetEmail,
} from "../services/emails/emailHandler";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password, pushToken } = req.body;

  try {
    // validate inputs
    if (!email || !password) {
      return res.status(400).json({ message: "All fields must be filled" });
    }

    // check if email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Incorrect credentials" });
    }

    // match password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Incorrect credentials" });
    }

    // Update token & ensure no other user account holds this device token
    if (pushToken) {
      await User.updateMany(
        { expoPushToken: pushToken, _id: { $ne: user._id } },
        { expoPushToken: null },
      );
      user.expoPushToken = pushToken;
      await user.save();
    }

    // generate token
    const token = genToken(res, String(user._id));

    // return the user
    res.status(200).json({
      message: "User logged in successfully",
      user,
      token,
    });
  } catch (error) {
    console.log("Error in loginUser", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const signupUser = async (req: Request, res: Response) => {
  const { fullName, email, password, role, pushToken } = req.body;

  try {
    // Validations
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields must be filled" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({ message: "Password is not strong enough" });
    }

    // check if email exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Ensure no other account retains this push token
    if (pushToken) {
      await User.updateMany(
        { expoPushToken: pushToken },
        { expoPushToken: null },
      );
    }

    // generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create a new user
    const user = new User({
      fullName,
      email,
      role,
      password: hashedPassword,
      expoPushToken: pushToken || null,
    });

    // generate token
    const token = genToken(res, String(user._id));

    // save user to the DB
    await user.save();

    try {
      await sendWelcomeEmail(email, fullName, ENV.FRONTEND_URL!);
    } catch (error) {
      console.log(error);
    }

    res.status(201).json({
      message: "Account registered successfully",
      user,
      token,
    });
  } catch (error) {
    console.log("Error in signupUser", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logoutUser = async (_req: Request, res: Response) => {
  try {
    res.cookie("token", "", { maxAge: 0 });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in loginUser", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const checkAuth = async (req: AuthRequest, res: Response) => {
  try {
    res.status(200).json({
      message: "user is logged in",
      user: req.user,
    });
  } catch (error) {
    console.log("Error in loginUser", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const requestPasswordReset = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // generate token
    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = new Date(Date.now() + 15 * 60 * 1000);
    await user.save();

    const resetUrl = `${ENV.FRONTEND_URL}/reset-password?token=${resetToken}`;

    await sendResetEmail(user.email, user.fullName, resetUrl);

    res.json({
      message: "Password reset link sent",
    });
  } catch (error) {
    console.error("Error in requestPasswordReset", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  const { token, newPassword } = req.body;

  try {
    if (!validator.isStrongPassword(newPassword)) {
      return res.status(400).json({ message: "Password not strong enough" });
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!user)
      return res.status(400).json({ message: "Invalid or expired token" });

    // hash new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    // clear reset fields
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error in resetPassword", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
