import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const CustomTextInput = (props) => {
  const [inputBorderColor, setInputBorderColor] = useState("#E8E8E8");
  const [inputBackgroundColor, setinputBackgroundColor] = useState("#E8E8E8");

  const customOnFocus = () => {
    // props?.onFocus;
    setInputBorderColor("#FF6C00");
    setinputBackgroundColor("#FFF");
  };

  const customOnBlur = () => {
    // props?.onBlur;
    setInputBorderColor("#E8E8E8");
    setinputBackgroundColor("#E8E8E8");
  };
  return (
    <TextInput
      style={[
        styles.input,
        {
          borderColor: inputBorderColor,
          backgroundColor: inputBackgroundColor,
        },
      ]}
      onFocus={customOnFocus}
      onBlur={customOnBlur}
      {...props}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    // height: 50,
    color: "#212121",
    padding: 16,
    paddingLeft: 16,
    paddingRight: 16,
    // borderColor: "#E8E8E8",
    borderWidth: 1,
    // backgroundColor: "#F6F6F6",
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "400",
  },
});

export default CustomTextInput;
