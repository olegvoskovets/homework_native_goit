import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AddPhoto from "../AddPhoto/AddPhoto";
import { Fragment, useState } from "react";
import CustomTextInput from "../CustomTextInput/CustomTextInput";
import AuthButton from "../AuthButton/AuthButton";

const RegistrationScreen = ({ toggleUser }) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onPressButton = () => {
    console.log({ login, email, password });
    setLogin("");
    setPassword("");
    setEmail("");
  };

  return (
    <Fragment>
      <AddPhoto />
      <Text style={styles.title}>Реєстрація</Text>

      <View style={{ gap: 16, marginBottom: 43 }}>
        {/* <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          > */}
        <CustomTextInput
          placeholder="Логін"
          value={login}
          onChangeText={setLogin}
          autoFocus
        />
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
        {/* </KeyboardAvoidingView> */}
        <AuthButton title="Зареєструватися" onPress={onPressButton} />

        <View style={styles.account}>
          <Text style={styles.accountText}>
            Вже є акаунт?
            <Text
              style={{ marginLeft: 10 }}
              onPress={() => toggleUser((prev) => !prev)}
            >
              {" "}
              Увійти
            </Text>
          </Text>
        </View>
      </View>
    </Fragment>
  );
};
const styles = StyleSheet.create({
  title: {
    marginTop: 60,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 33,
  },
  input: {
    // height: 50,
    color: "#BDBDBD",
    padding: 16,
    paddingLeft: 16,
    paddingRight: 16,
    // borderColor: "#E8E8E8",
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "400",
  },
  visiblePassword: {
    color: "#1B4371",
    fontSize: 16,
    fontWeight: "400",
    position: "absolute",
    right: 16,
    top: 50 / 2 - 4,
  },
  buttonSave: {
    padding: 16,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
  },
  account: {
    fontSize: 16,
    marginLeft: "auto",
    marginRight: "auto",
  },
  accountText: {
    color: "#1B4371",
  },
});

export default RegistrationScreen;
