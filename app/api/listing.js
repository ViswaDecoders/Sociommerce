import client from "./client";

const endpoint = "/api";
// const getListings = (a, b, c) => client.get(endpoint);   if has params
const getListings = () => client.get(endpoint+"/products/");

const addListing = (listing, onUploadProgress) => {
  const data = new FormData(); //set content-type automatically multipart/form-data , method apisouce
  data.append("title", listing.title);
  data.append("unit_price", listing.price);
  data.append("collection", listing.category.value);
  data.append("description", listing.description);
  data.append("product_img", listing.images);

  // listing.images.forEach((image, index) =>
  //   data.append("images", {
  //     name: "image" + index,
  //     type: "image/jpeg",
  //     uri: image,
  //   })
  // );

  // if (listing.location)
  //   data.append("location", JSON.stringify(listing.location));

  return client.post(endpoint + "/makeProduct/", data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};
export default {
  addListing, //all the methods
  getListings,
};
