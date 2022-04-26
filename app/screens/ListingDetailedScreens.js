import React, { useContext } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import AppText from "../components/Text";
import colors from "../config/colors";
import ListItem from "../components/list/ListItem";
import AuthContext from "../auth/context";

function ListingDetailedScreens({ route }) {
  const { user, setUser } = useContext(AuthContext);
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={{ uri: listing.product_img }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.unit_price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/message3.jpg")}
            title={user.name}
            subTitle="5 Listing"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailedScreens;
