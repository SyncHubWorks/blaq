import "dotenv/config";

type ENVTYPES = {
  PORT?: string | number;
  NODE_ENV?: string | undefined;
  JWT_SECRET: string | undefined;
  FRONTEND_URL: string | undefined;
  MONGO_URI: string | undefined;
  PAYSTACK_BASE_URL: string | undefined;
  PAYSTACK_SECRET_KEY: string | undefined;
  PAYSTACK_PUBLIC_KEY: string | undefined;
  RESEND_API_KEY: string | undefined;
  EMAIL_FROM: string | undefined;
  EMAIL_FROM_NAME: string | undefined;
  // CLOUDINARY_CLOUD_NAME: string | undefined;
  // CLOUDINARY_API_KEY: string | undefined;
  // CLOUDINARY_API_SECRET: string | undefined;
  // GEMINI_API_KEY: string | undefined;
};

export const ENV: ENVTYPES = {
  PORT: process.env.PORT || 5050,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  FRONTEND_URL: process.env.FRONTEND_URL,
  MONGO_URI: process.env.MONGO_URI,
  PAYSTACK_BASE_URL: process.env.PAYSTACK_BASE_URL,
  PAYSTACK_SECRET_KEY: process.env.PAYSTACK_SECRET_KEY,
  PAYSTACK_PUBLIC_KEY: process.env.PAYSTACK_PUBLIC_KEY,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
  // CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  // CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  // CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  // GEMINI_API_KEY: process.env.GEMINI_API_KEY,
};

const requiredKeys: (keyof ENVTYPES)[] = [
  "MONGO_URI",
  "PAYSTACK_BASE_URL",
  "PAYSTACK_PUBLIC_KEY",
  "PAYSTACK_SECRET_KEY",
  "JWT_SECRET",
  "FRONTEND_URL",
  "RESEND_API_KEY",
  "EMAIL_FROM",
  "EMAIL_FROM_NAME",
  // "CLOUDINARY_CLOUD_NAME",
  // "CLOUDINARY_API_KEY",
  // "CLOUDINARY_API_SECRET",
  // "GEMINI_API_KEY",
];

for (const key of requiredKeys) {
  if (!ENV[key]) {
    throw new Error(`Missing key: ${key}`);
  }
}
