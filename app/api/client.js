import { create } from "apisauce";

const apiClient = create({
  credentials: "include",
  // baseURL: "https://fakestoreapi.com", //url to add with backend in json file may be
  baseURL: "http://192.168.43.46:8000",
  headers: {
    "Content-Type": "application/json",
    // "X-CSRFToken": csrf,
  },
});

export default apiClient;
