import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailedScreens from "../screens/ListingDetailedScreens";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal " screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailedScreens} />
  </Stack.Navigator>
);

export default FeedNavigator;
