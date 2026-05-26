import axios from "axios";

// This creates a reusable instance with the base URL of your Flask backend
const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
