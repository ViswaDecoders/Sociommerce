import {
  View,
  Text,
  Card,
  TextInput,
  Switch,
  Button,
  Image,
  LogBox,
} from "react-native";
import { AppLoading } from "expo";
import React, { useState, useEffect } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/Text";
import Headings from "./app/components/list/Headings";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/components/Button";
import Cards from "./app/components/Cards";
import ListingDetailedScreens from "./app/screens/ListingDetailedScreens";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/list/ListItem";
import colors from "./app/config/colors";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/TextInput";
import AppPicker from "./app/components/Picker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";

// Note :  @react-navigation/stack and /native should be same version to run the app

LogBox.ignoreLogs([
  "It appears that you are using old version of react-navigation library",
]); //ignore specific warning only
// LogBox.ignoreAllLogs(); //ignore all logs

export default function App() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  // if (!isReady) return <AppLoading onFinish={() => setIsReady(true)} />;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
        {user != null ? <AppNavigator /> : <AuthNavigator />}
        {/* <AppNavigator /> */}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
