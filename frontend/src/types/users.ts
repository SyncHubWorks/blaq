export interface IUser {
  _id: string;
  fullName: string;
  email: string;
  password?: string;
  role: "customer" | "creative" | "admin";
  isVerified: boolean;
}
