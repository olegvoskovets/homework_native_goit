import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config";

export const authStateChanged = async (onChange = () => {}) => {
  onAuthStateChanged((user) => {
    onChange(user);
    return user;
  });
};

export const registerDB = async ({ email, password, displayName }) => {
  // console.log("email", { email, password, displayName });
  try {
    // console.log("registerDB- ", auth);
    await createUserWithEmailAndPassword(auth, email, password);
    // const {
    //   user: { email: userEmail, displayName, uid, photoURL },
    // } = auth.currentUser;

    // console.log("DATAREGISTRauth.currentUser", auth.currentUser);
    return { email, displayName, photoURL: auth.photoURL };
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

      const { email: userEmail, displayName, uid, photoURL } = auth.user;
      return { email: userEmail, displayName, uid, photoURL };
    } catch (error) {
      throw error;
    }
  }
};

export const Login = (data) => {
  const users = data.users;
  console.log("auth- ", auth);
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

export const addPost = (data) => {
  return data;
};
export const deleteAllPosts = () => {
  return null;
};

// { message: "login або password не відповідають дійсності !!!" };
export const getPostId = (id) => {
  return id;
};

export const addComments = (data) => {
  return data;
};
