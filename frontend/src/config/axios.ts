import axios from "axios";

const API_URL = "http://localhost:5050/api";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
