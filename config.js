// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCyRf7K8bW3-IWrm-d1bPKvXSjHyt_TxGQ",
//   authDomain: "native-image-location.firebaseapp.com",
//   projectId: "native-image-location",
//   storageBucket: "native-image-location.appspot.com",
//   messagingSenderId: "880740516980",
//   appId: "1:880740516980:web:ec463fbff7248ca992bd21",
//   measurementId: "G-4Z0W57306G",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDYMqI_xwcvpi7H37ud_iUq1eey29B9A4s",
  authDomain: "image-native-project.firebaseapp.com",
  projectId: "image-native-project",
  storageBucket: "image-native-project.appspot.com",
  messagingSenderId: "883348581762",
  appId: "1:883348581762:web:c02b4e8bc3d762c65c739b",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCk0bFOqtPQHNaKFK7evD1At2SRAHMWdp0",
//   authDomain: "projectimagelocationnative.firebaseapp.com",
//   projectId: "projectimagelocationnative",
//   storageBucket: "projectimagelocationnative.appspot.com",
//   messagingSenderId: "252630066972",
//   appId: "1:252630066972:web:1e7a8e3d9c4bb327f2fcd9",
// };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// export const uploadAvatar = async (uri, name) => {
//   try {
//     const { uid } = auth.currentUser;
//     if (!uid) throw new Error("unauthorized");
//     const filename =
//       name || [uid, uri.split("/").pop().split(".").pop()].join(".");
//     console.log("uploadAvatar filename", filename);
//     const response = await fetch(uri);
//     const file = await response.blob();
//     const avatarRef = ref(storage, `avatars/${filename}`);
//     await uploadBytes(avatarRef, file);
//     return await getDownloadURL(avatarRef);
//   } catch (error) {
//     console.log(error);
//   }
// };
