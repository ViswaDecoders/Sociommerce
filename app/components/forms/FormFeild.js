import React from "react";
import { useFormikContext } from "formik";
import AppTextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormFeild({ name, width, ...otherProps }) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        //   onChangeText={(text) => setEmail(text)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormFeild;
