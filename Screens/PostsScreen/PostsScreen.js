import { StyleSheet, Text, View } from "react-native";
import CurrentUser from "../../Components/CurrentUser/CurrentUser";
import Maps from "../../Maps/Maps";

const PostsScreen = () => {
  return (
    <View style={styles.post}>
      <CurrentUser />
      <Text>PostsScreen</Text>

      <Maps />
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PostsScreen;
