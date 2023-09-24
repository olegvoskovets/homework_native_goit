import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AddBtn = ({ title, style, onPress, children, disabled = false }) => {
  const styles = StyleSheet.create({
    buttonSave: {
      width: 70,
      height: 40,
      borderRadius: 100,
      alignItems: "center",
      backgroundColor: "#FF6C00",
      alignSelf: "center",
    },
    textBtn: {
      // width: "50%",
      color: style ? style.color : "white",
      fontSize: 26,
      fontWeight: 400,
    },
  });
  return (
    <TouchableOpacity
      style={[styles.buttonSave, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.textBtn]}>{title}</Text>
      {/* {children} */}
    </TouchableOpacity>
  );
};

export default AddBtn;
