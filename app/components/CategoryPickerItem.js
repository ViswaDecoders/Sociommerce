import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./Text";
import Icon from "./Icon";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <Icon
            backgroundColor={item.backgroundColor}
            name={item.icon}
            size={70}
          />
          <AppText style={styles.label}>{item.label} </AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingVertical: 15,
    alignItems: "center",
    width: "34%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
