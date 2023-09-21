import { Image, StyleSheet, Text, View } from "react-native";
import MessageSvg from "../MessageSvg/MessageSvg";

const Post = ({ post }) => {
  console.log("post", post);
  return (
    <View style={styles.post}>
      <Image style={styles.imagePost} source={{ uri: post.pathUri }} />
      <Text> {post.inputName}</Text>
      <View style={styles.postInform}>
        <MessageSvg stroke="#BDBDBD" />
        <Text>0</Text>
        <Text>lokation</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    backgroundColor: "blue",
    width: 360,
    gap: 8,
  },
  imagePost: {
    backgroundColor: "green",
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  postInform: {
    flexDirection: "row",
  },
});

export default Post;
