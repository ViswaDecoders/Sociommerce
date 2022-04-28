import React, { useState, useContext } from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormFeild,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
// import AppFormFeild from "../components/forms/AppFormFeild";
// import AppForm from "../components/forms/AppForm";
// import SubmitButton from "../components/forms/SubmitButton";
import authApi from "../api/auth";
import AuthContext from "../auth/context";
import useApi from "../hooks/useApi";
import authStorage from "../auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  //   const [email, setEmail] = useState();
  //   const [pwd, setPwd] = useState();
  const [loginFailed, setLoginFailed] = useState();
  const authContext = useContext(AuthContext);

  const handleSubmit = async ({ email, password }) => {
    // console.log("Click!!!");
    const result = await authApi.login(email, password);
    console.log(result.data);
    if (!result.ok || result.data[0] === null) return setLoginFailed(true);
    setLoginFailed(false);
    authContext.setUser(result.data);
    authStorage.storeToken(result.data);
    // const user = jwtDecode(result.data);
  };

  // const handleSubmit = () => {
  //   const getListingUsers = useApi(authApi.getUsers);

  //   useEffect(() => {
  //     getListingUsers.request();
  //   }, []);

  // console.log(getListingUsers.data);
  // const result = await authApi.login();
  // if (!result.ok) return setLoginFailed(true);
  // setLoginFailed(false);
  // // console.log(result.data);
  // const user = jwtDecode(result.data);
  // // console.log(user);
  // authContext.setUser(user);
  // };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit} //to call server to pass the values
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
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
        <SubmitButton title="Login" />
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
