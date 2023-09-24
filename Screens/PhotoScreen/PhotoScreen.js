import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MyCamera from "../../Components/MyCamera/MyCamera";
import { useState } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import PhotoSvg from "../../Components/PhotoSvg/PhotoSvg";
import AddBtn from "../../Components/AddBtn/AddBtn";
import DeleteBtn from "../../Components/DeleteBtn/DeleteBtn";
import { selectAvatarImage } from "../../Redux/Auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { imageAvatarReducer } from "../../Redux/Auth/slice";
import { uploadAvatar } from "../../servicesApi/Api";
import { updateUserProfileThunk } from "../../Redux/Auth/operations";
import { useNavigation } from "@react-navigation/native";

const PhotoScreen = () => {
  const pathUri = useSelector(selectAvatarImage);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 24,
      gap: 10,
      backgroundColor: "#fff",
    },
    camera: { width: "100%", height: "75%" },
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
    btnSave: {
      width: "100%",
      height: "none",
      paddingTop: 16,
      paddingBottom: 16,
      backgroundColor: pathUri ? "#FF6C00" : "rgba(0, 0, 0, 0.03)",
      color: pathUri ? "white" : "#BDBDBD",
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

  const nandleDelete = () => {
    pathUri && dispatch(imageAvatarReducer(null));
  };
  const handleAddAvatar = async () => {
    const path_uri = await uploadAvatar(pathUri.uri);
    dispatch(updateUserProfileThunk({ photoURL: path_uri }));
    nandleDelete();
    navigation.navigate("Profile");
  };
  return (
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
                  // console.log("asset", asset);

                  //   const location_image = await LocationImage();
                  // console.log("asset.uri", asset.uri);

                  // const path_uri = await uploadImage(asset.uri);
                  dispatch(
                    imageAvatarReducer({
                      uri,
                    })
                  );

                  // setPath(asset.uri);
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
          style={{ width: "100%", height: "75%" }}
          source={{ uri: pathUri.uri }}
        />
      )}
      <AddBtn
        title={"Зберегти"}
        style={styles.btnSave}
        disabled={!pathUri}
        onPress={handleAddAvatar}
      />
      <View
        style={{
          width: 70,
          height: 40,
          backgroundColor: pathUri ? "#FF6C00" : "#F6F6F6",
          alignItems: "center",
          justifyContent: "center",

          marginTop: 50,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 100,
        }}
      >
        <DeleteBtn fill="#BDBDBD" stroke="#BDBDBD" onPress={nandleDelete} />
      </View>
    </View>
  );
};

export default PhotoScreen;
