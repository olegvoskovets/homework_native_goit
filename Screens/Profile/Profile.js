import { StyleSheet, Text, View } from "react-native";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <Text>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

export default Profile;
