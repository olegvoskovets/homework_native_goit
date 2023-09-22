import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AuthButton = ({ title, onPress, style, disabled = false }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonSave, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={{
          // color: style.color,
          fontSize: 16,
          fontWeight: 400,
          fontFamily: "Roboto-Black",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonSave: {
    padding: 16,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
  },
});
export default AuthButton;
