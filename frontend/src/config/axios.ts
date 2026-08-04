import axios from "axios";

const API_URL =
  import.meta.env.MODE === "production"
    ? "https://blaq-oyi2.onrender.com/api"
    : "http://localhost:5050/api";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
