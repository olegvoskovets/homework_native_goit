import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AddBtn = ({ title, style, onPress, children }) => {
  return (
    <TouchableOpacity style={[styles.buttonSave, style]} onPress={onPress}>
      <Text
        style={{
          color: "white",
          fontSize: 26,
          fontWeight: 400,
        }}
      >
        {title}
      </Text>
      {/* {children} */}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonSave: {
    width: 70,
    height: 40,
    borderRadius: 100,
    alignItems: "center",
    backgroundColor: "#FF6C00",
  },
});
export default AddBtn;
