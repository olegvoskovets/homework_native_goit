// import users from "../mocApiData.json";

// import { useSelector } from "react-redux";
// import { selectUsers } from "../Redux/Users/selectors";

//

export const Login = (data) => {
  //const users1 = useSelector(selectUsers);
  // console.log("users1", users1);
  const users = data.users;
  const user = users.find((item) => item.email === data.data.email);
  if (!user) {
    return null;
  }
  if (String(data.data.password) !== String(user.password)) {
    return null;
  }
  return { email: user.email, login: user.login };
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

// { message: "login або password не відповідають дійсності !!!" };
