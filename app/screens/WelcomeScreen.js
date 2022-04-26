import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  img,
} from "react-native";
import Button from "../components/Button";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Where social media meets E-Commerce</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="login" onPress={() => navigation.navigate("Login")} />
        <Button
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 10,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 10,
    textTransform: "capitalize",
    textAlign: "center",
    fontFamily: "sans-serif-thin" || "sans-serif-light",
  },
});

export default WelcomeScreen;
