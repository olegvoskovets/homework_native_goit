import { StyleSheet, Text, View } from "react-native";

const CreatePostsScreen = () => {
  return (
    <View style={styles.createPost}>
      <Text>CreatePostsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  createPost: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default CreatePostsScreen;
