import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "../config";
import { collection, addDoc, getDocs } from "firebase/firestore";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const authStateChanged = async (onChange = () => {}) => {
  onAuthStateChanged((user) => {
    onChange(user);
    return user;
  });
};

export const registerDB = async ({ email, password, displayName }) => {
  // console.log("registerDBUser", { email, password, displayName });
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      displayName
    );

    const newUser = await updateUserProfile({ displayName });

    return newUser;
  } catch (error) {
    console.log("registerDBERROR", error);
    throw error;
  }
};

export const loginDB = async ({ email, password }) => {
  // console.log("loginDB_User-Auth ", auth);
  // console.log("loginDB- ", { email, password });
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    // console.log("USER", user);
    return {
      email: user.email,
      displayName: user.displayName,
      uid: user.uid,
      photoURL: user.photoURL,
    };
  } catch (error) {
    console.log("loginDBERROR", error);
    throw error;
  }
};

export const updateUserProfile = async (update) => {
  const user = auth.currentUser;

  // якщо такий користувач знайдений
  if (user) {
    // оновлюємо його профайл
    try {
      await updateProfile(user, update);
      // const userUpdate = auth.currentUser;

      const { email, displayName, uid, photoURL } = user;
      console.log("user", { email, displayName, uid, photoURL });
      return { email, displayName, uid, photoURL };
    } catch (error) {
      throw error;
    }
  }
};

export const Login = (data) => {
  const users = data.users;
  // console.log("auth- ", auth);
  const user = users.find((item) => item.email === data.data.email);

  if (!user) {
    return null;
  }
  if (String(data.data.password) !== String(user.password)) {
    return null;
  }

  return { email: user.email, login: user.login, url: user.url };
};

export const LogOut = () => {
  return null;
};
export const Registration = (data) => {
  const users = data.users;

  const user = users.find((item) => item.email === data.data.email);
  if (user) {
    //такий користувач вже є його не будемо реєструвати
    return null;
  }
  return data.data;
};

export const addUser = (data) => {
  return data;
};

export const addPost = async (data) => {
  const { id, currentUser, locationImage, inputName, pathUri } = data;
  // console.log("addPost", addPost);
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      id,
      currentUser,
      locationImage,
      inputName,
      pathUri,
    });

    // console.log("Document written with docRef: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }

  return data;
};
export const deleteAllPosts = () => {
  return null;
};

// { message: "login або password не відповідають дійсності !!!" };
export const getPostId = (id) => {
  return id;
};

export const addComments = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "comments"), data);

    console.log("Document written with docRef: ", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }

  return data;
};
export const deleteAllComments = () => {
  return null;
};

export const getPostsDB = async () => {
  try {
    const snapshot = await getDocs(collection(db, "posts"));
    // Перевіряємо у консолі отримані дані
    // console.log("getPostsDB", snapshot);
    let posts = [];
    snapshot.forEach((doc) => posts.push(doc.data()));
    // Повертаємо масив обʼєктів у довільній формі
    return posts;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
export const getCommentsDB = async () => {
  try {
    const snapshot = await getDocs(collection(db, "comments"));
    // Перевіряємо у консолі отримані дані
    // console.log("getPostsDB", snapshot);
    let comments = [];
    snapshot.forEach((doc) => comments.push(doc.data()));
    // Повертаємо масив обʼєктів у довільній формі
    // console.log("getCommentsDB", comments);
    return comments;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const uploadImage = async (uri, name) => {
  try {
    // const { uid } = auth.currentUser;
    // if (!uid) throw new Error("unauthorized");
    const filename = name || uri.split("/").pop();
    console.log("uploadAvatar filename", filename);
    const response = await fetch(uri);
    const file = await response.blob();
    const avatarRef = ref(storage, `images/${filename}`);
    await uploadBytes(avatarRef, file);
    return await getDownloadURL(avatarRef);
  } catch (error) {
    console.log(error);
  }
};

export const uploadAvatar = async (uri, name) => {
  try {
    // const { uid } = auth.currentUser;
    // if (!uid) throw new Error("unauthorized");
    const filename = name || uri.split("/").pop();
    console.log("uploadAvatar filename", filename);
    const response = await fetch(uri);
    const file = await response.blob();
    const avatarRef = ref(storage, `avatar/${filename}`);
    await uploadBytes(avatarRef, file);
    return await getDownloadURL(avatarRef);
  } catch (error) {
    console.log(error);
  }
};
