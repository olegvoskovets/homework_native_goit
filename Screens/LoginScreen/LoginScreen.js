import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomTextInput from "../../Components/CustomTextInput/CustomTextInput";
import AuthButton from "../../Components/AuthButton/AuthButton";
import BackgroundAuth from "../../Components/BackgroundAuth/BackgroundAuth";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { selectUsers } from "../../Redux/Users/selectors";
import { loginFirebaseThunk } from "../../Redux/Auth/operations";

const LoginScreen = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const onPressButton = () => {
    // dispatch(loginThunk({ data: { email, password }, users }));
    // console.log("emeilPass", email, password);
    dispatch(loginFirebaseThunk({ email, password }));

    setPassword("");
    setEmail("");
  };

  return (
    <BackgroundAuth>
      <Text style={styles.title}>Увійти</Text>
      <View style={{ gap: 16, marginBottom: 43 }}>
        <CustomTextInput
          placeholder="Адреса електонної пошти"
          value={email}
          // name="email"
          onChangeText={setEmail}
        />
        <View style={{ position: "relative" }}>
          <CustomTextInput
            placeholder="Пароль"
            secureTextEntry={isVisiblePassword}
            value={password}
            onChangeText={setPassword}
          />

          <Text
            style={styles.visiblePassword}
            onPress={() => setIsVisiblePassword(!isVisiblePassword)}
          >
            {isVisiblePassword ? "Показати" : "Скрити"}
          </Text>
        </View>
      </View>
      <AuthButton
        style={{ marginBottom: 16 }}
        title="Увійти"
        onPress={onPressButton}
      />
      <View style={styles.account}>
        <Text style={styles.accountText}>
          Немає акаунту?
          <Text
            style={{ marginLeft: 10 }}
            onPress={() => navigation.navigate("Registration")}
          >
            {" "}
            Зареєструватись
          </Text>
        </Text>
      </View>
    </BackgroundAuth>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 33,
    fontFamily: "Roboto-Black",
  },
  visiblePassword: {
    color: "#1B4371",
    fontSize: 16,
    fontWeight: "400",
    position: "absolute",
    right: 16,
    top: 50 / 2 - 4,
  },
  account: {
    fontSize: 16,
    marginLeft: "auto",
    marginRight: "auto",
  },
  accountText: {
    color: "#1B4371",
    marginBottom: 25,
    fontFamily: "Roboto-Black",
  },
});
export default LoginScreen;
