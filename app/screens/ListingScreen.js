import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/Text";
import Button from "../components/Button";
import Card from "../components/Cards";
import colors from "../config/colors";
import listingsApi from "../api/listing";
import ListItemSeperatorComponent from "../components/list/ListItemSeperator";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";

//hardcoded
// const listings = [
//   {
//     id: 1,
//     title: "OneOdio premium wired Headphones",
//     price: 35.99,
//     image: require("../assets/headphones.jpg"),
//   },
//   {
//     id: 2,
//     title: "Red Couch",
//     price: 1000,
//     image: require("../assets/couch.jpg"),
//   },
// ];

// function ListingScreen({ navigation }) {
//   const {
//     data: listings,
//     error,
//     loading,
//     request: loadListings,
//   } = useApi(listingsApi.getListings);

//   useEffect(() => {
//     loadListings();
//   }, []);

//   return (
//     <Screen style={styles.screen}>
//       {error && (
//         <>
//           <AppText>Couldn't recieve the listings</AppText>
//           <Button title="Retry" onPress={loadListings} />
//         </>
//       )}
//       <ActivityIndicator visible={loading} />
//       <FlatList
//         data={listings}
//         keyExtractor={(listing) => listing.id.toString()}
//         renderItem={({ item }) => (
//           <Card
//             title={item.title}
//             subTitle={"$" + item.price}
//             imageUrl={item.image}
//             // imageUrl={item.images[0].url}}
//             onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
//           />
//         )}
//         ItemSeparatorComponent={ListItemSeperatorComponent}
//       />
//     </Screen>
//   );
// }

function ListingScreen({ navigation }) {
  const getListingApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingApi.request();
    // getListingApi.request(1,2,3);       //if has params
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingApi.error && (
        <>
          <AppText>Couldn't recieve the listings</AppText>
          <Button title="Retry" onPress={getListingApi.request} />
        </>
      )}
      <ActivityIndicator visible={getListingApi.loading} />
      <FlatList
        data={getListingApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.unit_price}
            imageUrl={item.product_img}
            // imageUrl={item.images[0].url}}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeperatorComponent}
        refreshing={false}
        onRefresh={() => {
          getListingApi.request();
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.lightgrey,
  },
});

export default ListingScreen;
