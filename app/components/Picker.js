import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./Text";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({
  icon,
  items,
  numberOfColumns = 1,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  width = "100%",
}) {
  const [modalVisiible, setModalVisiible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisiible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={27}
              color={defaultStyles.colors.grey}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={27}
            color={defaultStyles.colors.grey}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisiible} animationType="slide">
        <Screen>
          <Button
            title="close"
            onPress={() => setModalVisiible(false)}
            // color="white"
            style={styles.closebutton}
          />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisiible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightgrey,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  closebutton: {
    backgroundColor: "green",
  },
  placeholder: {
    color: defaultStyles.colors.placeholdercol,
    flex: 1,
  },
  text: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppPicker;
