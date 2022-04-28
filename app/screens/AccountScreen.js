import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AuthContext from "../auth/context";
import Icon from "../components/Icon";
import ListItem from "../components/list/ListItem";
import ListItemSeperatorComponent from "../components/list/ListItemSeperator";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import authApi from "../api/auth";
import authStorage from "../auth/storage";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);

  const handleLogOut = () => {
    authApi.logout();
    setUser(null);
    authStorage.removeToken();
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/user.jpeg")}
        />
        {/* <ListItem
          title="Alex Garfin"
          subTitle="alexander.g45k25@gmail.com"
          image={require("../assets/user.jpeg")}
        /> */}
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeperatorComponent}
        />
      </View>
      <ListItem
        title="logout"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={handleLogOut}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.lightgrey,
  },
});
export default AccountScreen;
