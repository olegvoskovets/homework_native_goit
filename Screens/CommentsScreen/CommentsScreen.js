import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setPostIdThunk } from "../../Redux/Posts/operations";
import { selectCurrentPostId, selectPosts } from "../../Redux/Posts/selectors";
import SendCommentSvg from "../../Components/SendCommentSvg/SendCommentSvg";
import { addCommentsThunk } from "../../Redux/Comments/operations";
import { useNavigation } from "@react-navigation/native";
import { selectComments } from "../../Redux/Comments/selectors";
import Comment from "../../Components/Comment/Comment";
import { selectCurrentUserFirebase } from "../../Redux/Auth/selectors";

const CommentsScreen = (props) => {
  const dispatch = useDispatch();
  const { postId } = props.route.params;
  const navigation = useNavigation();

  const [textInput, setTextInput] = useState(null);

  const posts = useSelector(selectPosts);
  const currentUser = useSelector(selectCurrentUserFirebase);

  const comments = useSelector(selectComments);

  const currentCommentsPost = comments.filter(
    (comment) => comment.postId === postId
  );

  // console.log("posts", posts);
  // useEffect(() => {
  //   dispatch(setPostIdThunk(postId));
  // }, []);
  const currentPost = posts.find((post) => post.id === postId);
  // console.log("currentCommentsPost", currentCommentsPost);
  const handleSave = () => {
    const comment = {
      comment: textInput,
      user: currentUser.uid,
      postId,
      date: formatDate(new Date()),
    };
    if (textInput) {
      dispatch(addCommentsThunk(comment));
      setTextInput(null);
      navigation.navigate("Posts");
    }
  };

  const formatDate = (date) => {
    const monthString = {
      "01": "січ",
      "02": "лют",
      "03": "бур",
      "04": "квіт",
      "05": "трав",
      "06": "черв",
      "07": "лип",
      "08": "сер",
      "09": "жов",
      11: "лис",
      12: "груд",
    };

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day} ${monthString[month]}, ${year} | ${hours}:${minutes}`;
  };

  return (
    <View style={styles.comments}>
      <View style={styles.photo}>
        <Image
          style={{ width: "100%", height: 240 }}
          source={{ uri: currentPost.pathUri }}
        />
      </View>

      <FlatList
        data={currentCommentsPost}
        keyExtractor={(item) => item.date}
        contentContainerStyle={{
          gap: 24,
        }}
        renderItem={({ item }) => (
          <Comment post={item} guest={item.user === currentUser.uid} />
        )}
      />
      <View
        style={{
          position: "relative",
        }}
      >
        <View style={styles.sendSvg}>
          <SendCommentSvg onPress={handleSave} />
        </View>
        <TextInput
          style={styles.textComment}
          multiline={true}
          numberOfLines={10}
          placeholderTextColor="#bdbdbd"
          placeholder="Комметувати ..."
          onChangeText={setTextInput}
          value={textInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  comments: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    borderTopEndRadius: 8,
    overflow: "hidden",
    justifyContent: "space-between",
  },
  photo: {
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
    overflow: "hidden",
    marginBottom: 32,
  },
  textComment: {
    // width: "100%",
    height: 50,
    backgroundColor: "rgba(246,246,246,1)",
    borderRadius: 100,
    padding: 16,
    fontSize: 16,
  },
  sendSvg: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 8,
    top: 8,
    zIndex: 1,
  },
});

export default CommentsScreen;
