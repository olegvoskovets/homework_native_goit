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
import store from "./Redux/store";
import { selectCurrentUser } from "./Redux/Auth/selectors";
import MayNavigate from "./Components/MayNavigate/MayNavigate";
import { PersistGate } from "redux-persist/integration/react";
import { useFonts } from "expo-font";

const Logo = require("./assets/adaptive-icon.png");

const MainStack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
          <StatusBar style="auto" />
          <MayNavigate />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
//VwLGp78TfYZ!3K5
