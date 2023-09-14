import {
  ImageBackground,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import No_Photo from "../../assets/images_no.jpg";

import AddBtn from "../AddBtn/AddBtn";

const AddPhoto = () => {
  const { width: width_rec } = useWindowDimensions();

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

  return (
    <View style={styles.image_container}>
      <ImageBackground
        source={No_Photo}
        style={styles.addPhoto}
        resizeMode="cover"
      ></ImageBackground>
      <AddBtn fill_color="#FF6C00" width={37} style={styles.addBtn} />
    </View>
  );
};

export default AddPhoto;
