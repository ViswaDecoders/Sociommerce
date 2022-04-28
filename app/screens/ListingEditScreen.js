import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormFeild as FormFeild, //alias
  SubmitButton,
  AppFormPicker as Picker,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Headings from "../components/list/Headings";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingApi from "../api/listing";
import Screen from "../components/Screen";
import UploadScreen from "./UploadScreen";
import ImageInput from "../components/ImageInput";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  // images: Yup.array().min(1, "Please select atleast ine image.  "),
  images: Yup.string()
    .required()
    .nullable()
    .min(1, "Please select atleast ine image.  "),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "tomato",
    icon: "floor-lamp",
  },
  { label: "Cars", value: 2, backgroundColor: "darkorange", icon: "car" },
  { label: "Camera", value: 3, backgroundColor: "gold", icon: "camera" },
  {
    label: "Games",
    value: 4,
    backgroundColor: "limegreen",
    icon: "gamepad-variant",
  },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "turquoise",
    icon: "tshirt-crew",
  },
  {
    label: "Sports",
    value: 6,
    backgroundColor: "steelblue",
    icon: "basketball",
  },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "dodgerblue",
    icon: "headphones",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "salmon",
    icon: "book-open-variant",
  },
  {
    label: "Others",
    value: 9,
    backgroundColor: "dimgrey",
    icon: "application",
  },
];

function ListingEditScreen(props) {
  const location = useLocation();

  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    console.log("====================================");
    console.log(result.data);
    console.log("====================================");

    if (!result.ok) {
      setUploadVisible(false);
      return alert("couldn't save the listing.");
    }
    // alert("Success");
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <Headings style={{ color: "dodgerblue", padding: 10 }}>New Post</Headings>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          categoty: null,
          images: null,
          // images:[],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormFeild maxLength={255} name="title" placeholder="Title" />
        <FormFeild
          keyboardType="numeric"
          maxLength={8} //10000.99
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          placeholder="Category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          width="50%"
        />
        <FormFeild
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
export default ListingEditScreen;
