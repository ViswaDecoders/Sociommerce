import React, { useState, useContext } from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormFeild, SubmitButton } from "../components/forms";
// import AppFormFeild from "../components/forms/AppFormFeild";
// import AppForm from "../components/forms/AppForm";
// import SubmitButton from "../components/forms/SubmitButton";
import authApi from "../api/auth";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const authContext = useContext(AuthContext);
  //   const [email, setEmail] = useState();
  //   const [pwd, setPwd] = useState();
  const handleSubmit = async ({ name, email, password }) => {
    const result = await authApi.register(name, email, password);
    console.log(result.data);
    // if (!result.ok || result.data[0] === null) return setLoginFailed(true);
    // setLoginFailed(false);
    authContext.setUser(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit} //to call server to pass the values
        validationSchema={validationSchema}
      >
        <AppFormFeild
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          keyboardType="default"
          name="name"
          placeholder="Name"
          textContentType="name" //only iOS
        />
        <AppFormFeild
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress" //only iOS
        />
        <AppFormFeild
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
