import { create } from "apisauce";

const apiClient = create({
  // baseURL: "https://fakestoreapi.com", //url to add with backend in json file may be
  baseURL: "http://192.168.43.46:8000",
});

// apiClient.get("/listing").then((response) => {
//   if (!response) console.log(response.problem);
// });

export default apiClient;
