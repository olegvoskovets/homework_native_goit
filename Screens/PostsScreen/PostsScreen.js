import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CurrentUser from "../../Components/CurrentUser/CurrentUser";
import Maps from "../../Maps/Maps";
import { useSelector } from "react-redux";
import { selectPosts } from "../../Redux/Posts/selectors";
import Post from "../../Components/Post/Post";

const PostsScreen = () => {
  const posts = useSelector(selectPosts);
  console.log("posts", posts);
  return (
    <View style={styles.posts}>
      <CurrentUser />
      <Text>PostsScreen</Text>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={posts}
          renderItem={({ item }) => <Post post={item} />}
          keyExtractor={(post) => post.pathUri}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  posts: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  container: {
    width: "100%",

    alignItems: "center",
    justifyContent: "center",
  },
});

export default PostsScreen;
