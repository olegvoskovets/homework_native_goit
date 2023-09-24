import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import BackgroundAuth from "../../Components/BackgroundAuth/BackgroundAuth";
import AddPhoto from "../../Components/AddPhoto/AddPhoto";
import ExitSvg from "../../Components/ExitSvg/ExitSvg";
import { useDispatch, useSelector } from "react-redux";
import { logOutThunk } from "../../Redux/Auth/operations";
import { auth } from "../../config";
import { selectCurrentUserFirebase } from "../../Redux/Auth/selectors";
import { selectPosts } from "../../Redux/Posts/selectors";
import Post from "../../Components/Post/Post";
import { selectComments } from "../../Redux/Comments/selectors";

const Profile = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(logOutThunk());
  };

  // const currentUser = auth.currentUser;

  const currentUser = useSelector(selectCurrentUserFirebase);
  const posts = useSelector(selectPosts);
  // const comments = useSelector(selectComments);
  const currentUserPosts = () => {
    return posts.filter((post) => post.currentUser.uid === currentUser.uid);
  };
  // console.log("posts", posts);
  // console.log("currentUser", currentUser);

  const currentPoststUser = currentUserPosts();
  // console.log("currentPoststUser", currentPoststUser);
  return (
    <ScrollView>
      <View style={{}}>
        <BackgroundAuth>
          <AddPhoto />
          <View style={{ paddingLeft: 16, paddingRight: 16 }}>
            <Text style={styles.title}>{currentUser.displayName}</Text>
            <ExitSvg
              style={styles.exitSvg}
              stroke="#BDBDBD"
              onPress={handleClose}
            />
            <FlatList
              data={currentPoststUser}
              keyExtractor={(post) => post.pathUri}
              contentContainerStyle={{
                gap: 32,
              }}
              renderItem={({ item }) => <Post post={item} />}
            />
          </View>
        </BackgroundAuth>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 60,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 33,
    fontFamily: "Roboto-Black",
  },
  exitSvg: {
    position: "absolute",
    right: 16,
    top: 16,
  },
});

export default Profile;
