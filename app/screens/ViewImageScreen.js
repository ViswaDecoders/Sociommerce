import React from "react";
import { Image, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeicon}>
        <MaterialCommunityIcons
          name="close"
          size={35}
          color="white"
        ></MaterialCommunityIcons>
      </View>
      <View style={styles.deleteicon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color="white"
        ></MaterialCommunityIcons>
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/headphones.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    top: 45,
    width: "100%",
    height: "100%",
  },
  deleteicon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  closeicon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
});

export default ViewImageScreen;
