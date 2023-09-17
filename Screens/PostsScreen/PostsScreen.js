import { StyleSheet, Text, View } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.post}>
      <Text>PostsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default PostsScreen;
