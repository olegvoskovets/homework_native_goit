import { useState } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import RegistrationScreen from "./Components/RegistrationScreen/RegistrationScreen";
import BackgroundAuth from "./Components/BackgroundAuth/BackgroundAuth";
import LoginScreen from "./Components/LoginScreen/LoginScreen";

const Logo = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalViseble, setIsModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(true);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <BackgroundAuth>
        {currentUser ? (
          <LoginScreen toggleUser={setCurrentUser} />
        ) : (
          <RegistrationScreen toggleUser={setCurrentUser} />
        )}
      </BackgroundAuth>
      {/* <Button title="PressOnModal" onPress={() => setIsModalVisible(true)} />
      <ActivityIndicator size="large" color="midnightblue" animating={true} />
      <RegistrationScreen />
      <ScrollView>
        <Pressable onPress={() => console.log("Image press")}>
          <Image source={Logo} style={{ width: 300, height: 300 }} />
        </Pressable>
        <Pressable onPress={() => console.log("Text press")}>
          <Text style={{ padding: 40, fontSize: 24, color: "blue" }}>
            Это приложение OCR предназначено для извлечения текста из
            скриншотов, позволяя вам копировать текст с веб-сайтов или любой
            другой текст, который находится на экране. Это приложение OCR
            предназначено для извлечения текста из скриншотов, позволяя вам
            копировать текст с веб-сайтов или любой другой текст, который
            находится на экране. Это приложение OCR предназначено для извлечения
            текста из скриншотов, позволяя вам копировать текст с веб-сайтов или
            любой другой текст, который находится на экране. Это приложение OCR
            предназначено для извлечения текста из скриншотов, позволяя вам
            копировать текст с веб-сайтов или любой другой текст, который
            находится на экране. Это приложение OCR предназначено для извлечения
            текста из скриншотов, позволяя вам копировать текст с веб-сайтов или
            любой другой текст, который находится на экране. Это приложение OCR
            предназначено для извлечения текста из скриншотов, позволяя вам
            копировать текст с веб-сайтов или любой другой текст, который
            находится на экране. Viewv Это приложение OCR предназначено для
            извлечения текста из скриншотов, позволяя вам копировать текст с
            веб-сайтов или любой другой текст, который находится на экране.
          </Text>
        </Pressable>
      </ScrollView>
      <Modal
        visible={isModalViseble}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="fade"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 30 }}>
          <Text>Modal Content</Text>
          <Button
            title="Close modal"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal> */}
      <StatusBar />
    </SafeAreaView>
  );
}
