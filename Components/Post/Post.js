import { Image, StyleSheet, Text, View } from "react-native";
import MessageSvg from "../MessageSvg/MessageSvg";
import RegionLocation from "../RegionLocation/RegionLocation";
import { useNavigation } from "@react-navigation/native";
import MapPinSvg from "../MapPinSvg/MapPinSvg";

const Post = ({ post }) => {
  console.log("post", post);
  const navigation = useNavigation();
  return (
    <View style={styles.post}>
      <Image style={styles.imagePost} source={{ uri: post.pathUri }} />
      <Text> {post.inputName}</Text>
      <View style={styles.postInform}>
        <View style={styles.mapsStiles}>
          <MessageSvg
            stroke="#BDBDBD"
            onPress={() => navigation.navigate("Comments", { postId: post.id })}
          />
          <Text>0</Text>
        </View>
        <View style={styles.locationStiles}>
          <MapPinSvg
            stroke="#BDBDBD"
            onPress={() =>
              navigation.navigate("Maps", { location: post.locationImage })
            }
          />
          <RegionLocation locationImage={post.locationImage} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    gap: 8,
  },
  imagePost: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  postInform: {
    flexDirection: "row",
    gap: 30,
  },
  mapsStiles: {
    flexDirection: "row",
  },
  locationStiles: {
    flexDirection: "row",
    // width: ,
    flex: 1,
  },
});

export default Post;
