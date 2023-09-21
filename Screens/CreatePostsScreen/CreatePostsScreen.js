import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  ScrollView,
} from "react-native";
import MyCamera from "../../Components/MyCamera/MyCamera";
import { useEffect, useState } from "react";
import AuthButton from "../../Components/AuthButton/AuthButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import DeleteBtn from "../../Components/DeleteBtn/DeleteBtn";
import { selectImageCurrent } from "../../Redux/Auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { imageCurrentReducer } from "../../Redux/Auth/slice";
import RegionLocation from "../../Components/RegionLocation/RegionLocation";

const CreatePostsScreen = () => {
  const [isCamera, setIsCamera] = useState(null);
  const pathUri = useSelector(selectImageCurrent);
  const [inputName, setInputName] = useState("");
  const [inputLocale, setInputLocale] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setIsCamera(true);
  }, []);

  // console.log("</Keyboard.dismiss>=", Keyboard._currentlyShowing, "");
  const nandleDelete = () => {
    //видаляємо фото яке нам не подобається , поки з альбому не видаляємо
    dispatch(imageCurrentReducer(null));
  };
  const inputPlaceholder = () => {};
  return (
    <View style={styles.createPost}>
      <ScrollView>
        <View style={styles.camera}>
          <MyCamera />
        </View>

        <View>
          <Text style={styles.textUpload_a_photo}>
            {pathUri ? "Редагувати фото" : "Завантажте фото"}
          </Text>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                value={inputName}
                style={styles.inputName}
                placeholder="Назва ..."
                placeholderTextColor="rgba(189,189,189,0.3)"
                onChangeText={setInputName}
              />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                value={inputLocale}
                style={styles.inputName}
                placeholder="Місцевість ..."
                placeholderTextColor="rgba(189,189,189,0.3)"
                onChangeText={setInputLocale}
              />
              <RegionLocation />
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.btn}>
          <AuthButton
            title="Опублікувати"
            style={{
              backgroundColor: pathUri ? "#FF6C00" : "#F6F6F6",
              color: pathUri ? "#fff" : "#BDBDBD",
            }}
          />
        </View>
        <View
          style={{
            width: 70,
            height: 40,
            backgroundColor: pathUri ? "#FF6C00" : "#F6F6F6",
            alignItems: "center",
            justifyContent: "center",

            marginTop: 50,
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 100,
          }}
        >
          <DeleteBtn fill="#BDBDBD" stroke="#BDBDBD" onPress={nandleDelete} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  createPost: {
    flex: 1,
    padding: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  camera: {
    width: "100%",
    height: 240,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
    overflow: "hidden",
  },
  textUpload_a_photo: {
    color: "#BDBDBD",
    fontSize: 16,
    marginTop: 8,
    fontFamily: "Roboto-Black",
  },
  inputName: {
    marginTop: 32,
    height: 50,
    borderBottomColor: "#e8e8e8",
    borderBottomWidth: 1,
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 16,
    color: "#212121",
    fontWeight: "500",
  },
  btn: {
    marginTop: 32,
  },
});
export default CreatePostsScreen;
