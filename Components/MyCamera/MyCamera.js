import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import PhotoSvg from "../PhotoSvg/PhotoSvg";
import { useDispatch, useSelector } from "react-redux";
import { selectImageCurrent } from "../../Redux/Auth/selectors";
import { imageCurrentReducer } from "../../Redux/Auth/slice";

export default function MyCamera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const dispatch = useDispatch();

  const pathUri = useSelector(selectImageCurrent);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <View style={styles.container}>
        {!pathUri ? (
          <Camera style={styles.camera} type={type} ref={setCameraRef}>
            <View style={styles.photoView}>
              <TouchableOpacity
                style={styles.flipContainer}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <View style={{ width: 25, height: 25, backgroundColor: "red" }}>
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                  >
                    Flip
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                  if (cameraRef) {
                    const { uri } = await cameraRef.takePictureAsync();

                    const asset = await MediaLibrary.createAssetAsync(uri);
                    console.log("asset", asset);

                    dispatch(imageCurrentReducer(asset.uri));
                    setPath(asset.uri);
                  }
                }}
              >
                <View style={styles.takePhotoInner}>
                  <PhotoSvg fill="white" />
                </View>
              </TouchableOpacity>
            </View>
          </Camera>
        ) : (
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{ uri: pathUri }}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", height: "100%" },
  camera: { width: "100%", height: "100%" },
  photoView: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },

  flipContainer: {
    // flex: 0.1,
    position: "absolute",
    alignSelf: "flex-end",
  },

  button: {
    alignSelf: "center",
    marginBottom: "auto",
    marginTop: "auto",
  },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  takePhotoInner: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
