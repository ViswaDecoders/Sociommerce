import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";
import ImageInput from "../ImageInput";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  // console.log(imageUris);

  // const handleAdd = (uri) => {
  //   setFieldValue(name, [...imageUris, uri]);
  // };

  const handleAdd = (uri) => {
    setFieldValue(name, uri);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri != uri)
    );
  };
  return (
    <>
      {/* <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      /> */}
      <ImageInput imageUri={imageUris} onChangeImage={handleAdd} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
