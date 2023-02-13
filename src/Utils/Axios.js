import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL || "http://127.0.0.1:8000/api",
});
api.defaults.headers.common["Accept"] = "application/json";
api.defaults.headers.common["Content-Type"] = "application/json";
export default api;
