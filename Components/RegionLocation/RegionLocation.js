import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
// import Constants from "expo-constants";

// You can import from local files
// import AssetExample from "./components/AssetExample";

let apiKey = "AIzaSyAIg7KidzYC_Ioh0_9yHS9hYFFxBueubik";

// or any pure javascript modules available in npm
// import { Card } from "react-native-paper";
import * as Location from "expo-location";

export default function RegionLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [getLocation, setGetLocation] = useState(false);

  //   useEffect(() => {
  //     (async () => {
  //       let { status } = await Location.requestForegroundPermissionsAsync();
  //       if (status !== "granted") {
  //         console.log("Permission to access location was denied");
  //       }

  //       let location = await Location.getCurrentPositionAsync({});
  //       const coords = {
  //         latitude: location.coords.latitude,
  //         longitude: location.coords.longitude,
  //       };
  //       // console.log("LOCATION: ", location);
  //       setLocation(coords);
  //     })();
  //   }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      Location.setGoogleApiKey(apiKey);

      console.log(status);

      let regionName = await Location.reverseGeocodeAsync({
        latitude: 49.2297402,
        longitude: 28.4181641,
      });

      setLocation(regionName);
      console.log(regionName, "nothing");

      // console.log();
    })();
  }, [getLocation]);
  console.log("location", location);

  return (
    <View style={styles.container}>
      <Text style={styles.big}>
        {!location ? "Waiting" : JSON.stringify(location[0]["city"])}
      </Text>
      {/* <TouchableOpacity onPress={() => setGetLocation(!getLocation)}>
        <View
          style={{
            height: 100,
            backgroundColor: "teal",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <Text style={styles.btnText}> GET LOCATION </Text>
        </View>
      </TouchableOpacity> */}
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
