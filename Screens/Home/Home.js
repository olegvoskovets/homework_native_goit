import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Button,
  StyleSheet,
  Text,
  TextComponent,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import Profile from "../Profile/Profile";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import {} from "@expo/vector-icons";
import AddBtn from "../../Components/AddBtn/AddBtn";
import { useNavigation } from "@react-navigation/native";

import ArrowLeftSvg from "../../Components/ArrowLeftSvg/ArrowLeftSvg.js";
import ExitSvg from "../../Components/ExitSvg/ExitSvg";
import { useDispatch } from "react-redux";
import { logOutThunk } from "../../Redux/Auth/operations";

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleClickGoBack = () => {
    navigation.goBack();
  };

  const handleClose = () => {
    dispatch(logOutThunk());
  };
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      backBehavior="initialRoute"
      tabBarVisible="false"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 60,
          width: "100%",

          alignItems: "center",
        },

        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Posts") {
            let color;
            color = focused ? "blue" : "black";
            return <AntDesign name="appstore-o" size={24} color={color} />;
          } else if (route.name === "Profile") {
            let color;
            color = focused ? "blue" : "black";
            return <AntDesign name="user" size={24} color={color} />;
          } else if (route.name === "CreatePost") {
            return (
              <AddBtn
                title="+"
                onPress={() => navigation.navigate("CreatePost")}
              />
            );
          }
        },
        tabBarShowLabel: false,
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerStyle: {
            borderColor: "rgba(0, 0, 0, 0.30)",
            borderBottomWidth: 1,
            shadowColor: "#000",
            shadowOpacity: 0.3,
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: "500",
            fontFamily: "Roboto-Black",
          },

          title: "Публікації",
          headerRight: () => <ExitSvg stroke="#BDBDBD" onPress={handleClose} />,
          headerRightContainerStyle: {
            paddingRight: 16,
          },
        }}
      />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          tabBarVisible: false,

          header: ({ navigator, route, options }) => {
            const title = "Створити публікацію";
            return (
              <View style={styles.textBorder}>
                <ArrowLeftSvg
                  style={styles.svgPosition}
                  onPress={handleClickGoBack}
                />

                <Text style={styles.titleText}>{title}</Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigator, route, options }) => {
            const title = "Profile";
            return (
              <View style={styles.textBorder}>
                <ArrowLeftSvg
                  style={styles.svgPosition}
                  onPress={handleClickGoBack}
                />

                <Text style={styles.titleText}>{title}</Text>
              </View>
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};
const styles = StyleSheet.create({
  textBorder: {
    height: 50,
    justifyContent: "center",
    // borderColor: 'red',
    borderWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.30);",
    shadowColor: "rgba(0, 0, 0, 0.30)",
    fontFamily: "Roboto-Black",

    // padding: 16,
  },
  svgPosition: {
    position: "absolute",
    zIndex: 1,
  },
  titleText: {
    fontSize: 17,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: "Roboto-Black",
    // lineHeight: 1.2,
  },
});

export default Home;
