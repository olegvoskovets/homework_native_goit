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

export const registerDB = async ({ email, password }) => {
  // console.log("email", email);
  try {
    // console.log("registerDB- ", auth?.currentUser.email);
    await createUserWithEmailAndPassword(auth, email, password);
    const {
      user: { email: userEmail, displayName, uid, photoURL },
    } = auth.currentUser;

    // console.log("DATAREGISTR", data);
    return { email: userEmail, displayName, uid, photoURL };
  } catch (error) {
    console.log("registerDBERROR", error);
    throw error;
  }
};

export const loginDB = async ({ email, password }) => {
  // console.log("loginDB_User-Auth ", auth?.currentUser);
  // console.log("loginDB- ", { email, password });
  try {
    const {
      user: { email: userEmail, displayName, uid, photoURL },
    } = await signInWithEmailAndPassword(auth, email, password);
    // console.log("loginDBcredentials", credentials);
    return { email: userEmail, displayName, uid, photoURL };
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

// { message: "login або password не відповідають дійсності !!!" };
