import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import userPhoto from "../../assets/user2.jpg";
import guestPhoto from "../../assets/no_photo.png";

const Comment = ({ post, guest }) => {
  console.log("чий post", guest);
  const styles = StyleSheet.create({
    block: {
      alignSelf: guest ? "flex-end" : "flex-start",
      flexDirection: !guest ? "row-reverse" : "row",
      gap: 16,
    },
    comment: {
      backgroundColor: "rgba(0, 0, 0, 0.06)",
      borderBottomRightRadius: 6,
      borderBottomLeftRadius: 6,
      borderTopLeftRadius: guest ? 6 : 0,
      borderTopRightRadius: !guest ? 6 : 0,
      padding: 16,
    },
    user: {
      width: 28,
      height: 28,
      borderRadius: 100,
    },
  });
  return (
    <View>
      <View style={styles.block}>
        <Text style={styles.comment}>{post.comment}</Text>
        <Image style={styles.user} source={!guest ? guestPhoto : userPhoto} />
      </View>
    </View>
  );
};

export default Comment;