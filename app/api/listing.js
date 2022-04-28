import client from "./client";
// import csrf from "./csrf";
import { create } from "apisauce";
import { useState } from "react";
import authApi from "../api/auth";
import useApi from "../hooks/useApi";

const endpoint = "/api";
// const getListings = (a, b, c) => client.get(endpoint);   if has params
const getListings = () => client.get(endpoint + "/products/");

// let csrfToken;
// async function getCsrfToken() {
//   const response = await authApi.csrfreq();
//   csrfToken = response.data.csrfToken;
// }

// const getCsrfToken = async () => {
//   const [csrf, setCsrf] = useState("");
//   const response = await create({
//     baseURL: "http://192.168.43.46:8000",
//   }).get("/api/csrf/");
//   // console.log("====================================");
//   // console.log(response.data.csrfToken);
//   // console.log("====================================");
//   setCsrf(response.data.csrfToken);
//   // return response.data.csrfToken;
// };

const addListing = async (listing, onUploadProgress) => {
  // getCsrfToken();
  // const data = {
  //   title: listing.title,
  //   unit_price: listing.price,
  //   collection: listing.category.value,
  //   description: listing.description,
  //   product_img: listing.images,
  // };
  const data = new FormData(); //set content-type automatically multipart/form-data , method apisouce
  data.append("title", listing.title);
  data.append("unit_price", listing.price);
  data.append("collection", listing.category.value);
  data.append("description", listing.description);
  data.append("product_img", {
    name: "image.jpg",
    type: "image/jpeg",
    uri: listing.images,
  });

  // listing.images.forEach((image, index) =>
  //   data.append("images", {
  //     name: "image" + index,
  //     type: "image/jpeg",
  //     uri: image,
  //   })
  // );

  // if (listing.location)
  //   data.append("location", JSON.stringify(listing.location));
  const response = await create({
    baseURL: "http://192.168.43.46:8000",
  }).get("/api/csrf/");

  return create({
    baseURL: "http://192.168.43.46:8000",
    headers: {
      // "Content-Type": "application/json",
      "Content-Type": "multipart/form-data",
      "X-CSRFToken": response.data.csrfToken,
    },
  }).post(endpoint + "/makeProduct/", data, {
    onUploadProgress: (progress) => {
      onUploadProgress(progress.loaded / progress.total);
    },
  });
};
export default {
  addListing, //all the methods
  getListings,
};
