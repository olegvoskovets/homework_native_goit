import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import BackgroundAuth from "./Components/BackgroundAuth/BackgroundAuth";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Screens/Home/Home";
import CreatePostsScreen from "./Screens/CreatePostsScreen/CreatePostsScreen";
import Profile from "./Screens/Profile/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import { store } from "./Redux/store";
import { selectCurrentUser } from "./Redux/Auth/selectors";
import MayNavigate from "./Components/MayNavigate/MayNavigate";

const Logo = require("./assets/adaptive-icon.png");

const MainStack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar style="auto" />
        <MayNavigate />
      </SafeAreaView>
    </Provider>
  );
}
