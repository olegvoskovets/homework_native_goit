import {
  ImageBackground,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import No_Photo from "../../assets/images_no.jpg";

import AddBtnSvg from "../AddBtnSvg/AddBtnSvg";
import { useState } from "react";
import MyCamera from "../MyCamera/MyCamera";
import { useNavigation } from "@react-navigation/native";
import { selectCurrentUserFirebase } from "../../Redux/Auth/selectors";
import { useSelector } from "react-redux";

const AddPhoto = () => {
  const { width: width_rec } = useWindowDimensions();
  const currentUser = useSelector(selectCurrentUserFirebase);

  const navigation = useNavigation();
  const styles = StyleSheet.create({
    image_container: {
      position: "absolute",
      top: -60,
      left: width_rec / 2 - 60,
      borderRadius: 16,
    },
    addPhoto: {
      overflow: "hidden",
      width: 120,
      height: 120,
      borderRadius: 16,
      marginLeft: "auto",
      marginRight: "auto",
    },
    addBtn: {
      position: "absolute",
      right: -18,
      bottom: 10,
      transform: [{ rotate: "45deg" }],
    },
  });

  const handleUploadAvatar = () => {
    // setUploadAvatar((prev) => !prev);
    navigation.navigate("PhotoScreen");
  };

  return (
    <View style={styles.image_container}>
      <ImageBackground
        source={currentUser.photoURL ? { uri: currentUser.photoURL } : No_Photo}
        style={styles.addPhoto}
        resizeMode="cover"
      ></ImageBackground>
      <AddBtnSvg
        fill_color="#FF6C00"
        width={37}
        style={styles.addBtn}
        onPress={handleUploadAvatar}
      />
    </View>
  );
};

export default AddPhoto;
