import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import Profile from "../../Screens/Profile/Profile";
import LoginScreen from "../../Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "../../Screens/RegistrationScreen/RegistrationScreen";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Redux/Auth/selectors";
import Home from "../../Screens/Home/Home";
import CreatePostsScreen from "../../Screens/CreatePostsScreen/CreatePostsScreen";
import { Button, Text, View } from "react-native";

const MainStack = createNativeStackNavigator();

const MayNavigate = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={currentUser ? "Home" : "Login"}
        screenOptions={{
          headerStyle: {
            // height: 0,
          },
        }}
      >
        {currentUser ? (
          <>
            <MainStack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
                title: "Заголоворк який нам потрібен",

                headerLeft: () => (
                  <View>
                    <Text>AAA</Text>
                  </View>
                ),
                headerRight: () => (
                  <Button
                    onPress={() => alert("This is a button!")}
                    title="Press me"
                    color="red"
                  />
                ),
              }}
            />
            <MainStack.Screen
              name="CreatePostsScreen"
              component={CreatePostsScreen}
            />
            <MainStack.Screen name="Profile" component={Profile} />
          </>
        ) : (
          <>
            <MainStack.Screen name="Login" component={LoginScreen} />
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
            />
          </>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MayNavigate;
