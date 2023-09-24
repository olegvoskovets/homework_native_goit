import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CurrentUser from "../../Components/CurrentUser/CurrentUser";
import Maps from "../../Components/Maps/Maps";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../../Redux/Posts/selectors";
import Post from "../../Components/Post/Post";
import {
  deleteAllPostsThunk,
  getPostsThunk,
} from "../../Redux/Posts/operations";
import { deleteAllCommentsThunk } from "../../Redux/Comments/operations";
import { useEffect } from "react";

const PostsScreen = () => {
  const posts = useSelector(selectPosts);

  // console.log("POSTS", posts);
  const dispatch = useDispatch();
  const handleDeleteAllPosts = () => {
    dispatch(deleteAllPostsThunk());
    dispatch(deleteAllCommentsThunk());
  };
  useEffect(() => {
    dispatch(getPostsThunk());
  }, []);
  return (
    <View style={styles.posts}>
      <CurrentUser />
      {/* <Button
        title="Видалити всі пости"
        onPress={handleDeleteAllPosts}
      ></Button> */}
      {/* <ScrollView> */}
      <SafeAreaView>
        {/* <View style={styles.containerPosts}> */}

        <FlatList
          data={posts}
          keyExtractor={(post) => post.pathUri}
          contentContainerStyle={{
            gap: 32,
          }}
          renderItem={({ item }) => <Post post={item} />}
        />
        {/* </View> */}
      </SafeAreaView>
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  posts: {
    flex: 1,
    gap: 32,
    padding: 16,
    backgroundColor: "#fff",
  },

  // containerPosts: {
  //   width: "100%",

  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});

export default PostsScreen;
