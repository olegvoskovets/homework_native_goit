import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import BackgroundImage from "../../assets/photo_bg.png";

const BackgroundAuth = ({ children }) => {
  return (
    <ImageBackground style={styles.backgroundImage} source={BackgroundImage}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.auth}>{children}</View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  auth: {
    backgroundColor: "white",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    paddingTop: 32,
    paddingLeft: 16,
    paddingBottom: 45,
    paddingRight: 16,
  },
});

export default BackgroundAuth;
