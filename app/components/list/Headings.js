import React from "react";
import { Text, StyleSheet } from "react-native";

function Headings({ children, style }) {
  return <Text style={[styles.head, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  head: {
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "normal",
  },
});

export default Headings;
