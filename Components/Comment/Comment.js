import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import userPhoto from "../../assets/user2.jpg";
import guestPhoto from "../../assets/no_photo.png";
import { useSelector } from "react-redux";
import { selectCurrentUserFirebase } from "../../Redux/Auth/selectors";

const Comment = ({ post, guest }) => {
  const currentUser = useSelector(selectCurrentUserFirebase);
  const styles = StyleSheet.create({
    block: {
      alignSelf: guest ? "flex-end" : "flex-start",
      flexDirection: !guest ? "row-reverse" : "row",
      gap: 16,
    },
    comment: {
      backgroundColor: "rgba(0, 0, 0, 0.03)",
      borderBottomRightRadius: 6,
      borderBottomLeftRadius: 6,
      borderTopLeftRadius: guest ? 6 : 0,
      borderTopRightRadius: !guest ? 6 : 0,
      padding: 16,
      gap: 8,
    },
    user: {
      width: 28,
      height: 28,
      borderRadius: 100,
    },
    textComment: {
      fontSize: 13,
      color: "#212121",
    },
    textDate: {
      fontSize: 10,
      color: "#BDBDBD",
      alignSelf: !guest ? "flex-end" : "flex-start",
    },
  });
  return (
    <View>
      <View style={styles.block}>
        <View style={styles.comment}>
          <Text style={styles.textComment}>{post.comment}</Text>
          <Text style={styles.textDate}>{post.date} </Text>
        </View>

        <Image
          style={styles.user}
          source={guest ? { uri: currentUser.photoURL } : userPhoto}
        />
      </View>
    </View>
  );
};

export default Comment;
