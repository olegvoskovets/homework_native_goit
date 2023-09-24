import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectCurrentUserFirebase,
} from "../../Redux/Auth/selectors";
// import curImage from "../../assets/user1.jpg";
import User2 from "../../assets/user2.jpg";
import { auth } from "../../config";

const CurrentUser = () => {
  const currentUser = useSelector(selectCurrentUserFirebase);
  // const { url } = curremtUser;
  // console.log("curremtUser", curremtUser);
  // console.log("authcurremtUser", auth);
  return (
    currentUser && (
      <View style={styles.currentUser}>
        <Image style={styles.currentImage} source={User2} />
        <View>
          <Text style={styles.textUser}>{currentUser.displayName}</Text>
          <Text style={styles.textEmail}>{currentUser.email}</Text>
        </View>
      </View>
    )
  );
};
const styles = StyleSheet.create({
  currentUser: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  currentImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  textUser: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#212121",
    fontFamily: "Roboto-Black",
  },
  textEmail: {
    fontSize: 11,
    fontFamily: "Roboto-Black",
    color: "rgba(33, 33, 33, 0.80)",
  },
});

export default CurrentUser;
