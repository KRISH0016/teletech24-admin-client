import axios from "axios";
export const api = axios.create({
  baseURL: "https://teletech24-admin.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
