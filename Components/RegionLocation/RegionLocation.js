import { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
// import Constants from "expo-constants";

// You can import from local files
// import AssetExample from "./components/AssetExample";

let apiKey = "AIzaSyAIg7KidzYC_Ioh0_9yHS9hYFFxBueubik";

// or any pure javascript modules available in npm
// import { Card } from "react-native-paper";
import * as Location from "expo-location";

export default function RegionLocation({ locationImage }) {

  const { latitude, longitude } = locationImage;

  const [location, setLocation] = useState(null);
  

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      // Location.setGoogleApiKey(apiKey);

      // let currentLocation = await Location.getCurrentPositionAsync({});

      let regionName = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      setLocation(regionName);

      // console.log(regionName, "nothing");

      // console.log();
    })();
  }, []);

  const returnLocationString = () => {
    return location
      ? `${location[0]["city"] ? location[0]["city"] : ""} ${
          location[0]["country"] ? location[0]["country"] : ""
        } ${location[0]["region"] ? location[0]["region"] : ""}`
      : "Данні на цей час відсутні";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.big}>
        {!location ? "Waiting" : returnLocationString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  big: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
  },
});
