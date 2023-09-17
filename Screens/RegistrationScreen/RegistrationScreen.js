import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AddPhoto from "../../Components/AddPhoto/AddPhoto";
import { Fragment, useState } from "react";
import CustomTextInput from "../../Components/CustomTextInput/CustomTextInput";
import AuthButton from "../../Components/AuthButton/AuthButton";
import BackgroundAuth from "../../Components/BackgroundAuth/BackgroundAuth";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { registrationThunk } from "../../Redux/Auth/operations";
import { selectUsers } from "../../Redux/Users/selectors";
import { addUserThunk } from "../../Redux/Users/operations";

const RegistrationScreen = ({ toggleUser }) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const onPressButton = () => {
    dispatch(registrationThunk({ data: { login, email, password }, users }));
    dispatch(addUserThunk({ login, email, password }));
    setLogin("");
    setPassword("");
    setEmail("");
  };

  return (
    <BackgroundAuth>
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
              onPress={() => navigation.navigate("Login")}
            >
              {" "}
              Увійти
            </Text>
          </Text>
        </View>
      </View>
    </BackgroundAuth>
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
