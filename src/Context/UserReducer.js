import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
export const LOGIN = "APP/AUTH/LOGIN";
export const LOGOUT = "APP/AUTH/LOGOUT";
export const AUTH = "APP/AUTH/ADD_AUTH";
export const FIRESTORE = "APP/AUTH/ADD_FIRESTORE";
const auth = firebase.auth();
const firestore = firebase.firestore();
export const initialState = {
  user: null,
  auth: auth,
  firestore: firestore,
};

export const login = (user) => ({
  type: LOGIN,
  payload: user,
});
export const logout = () => ({
  type: LOGOUT,
});
// export const auth = (auth) => ({
//   type: AUTH,
//   auth: auth,
// });
// export const firestore = (firestore) => ({
//   type: FIRESTORE,
//   firestore: firestore,
// });

export const userReducer = (state = initialState, action) => {
  let data = {};
  switch (action.type) {
    case LOGIN:
      data = {
        ...state,
        user: action.payload,
      };
      break;
    case LOGOUT:
      data = {
        ...state,
        user: null,
      };
      break;
    // case AUTH:
    //   data = {
    //     ...state,
    //     auth: action.payload,
    //   };
    //   break;
    default:
      throw new Error("Invalid Dispatch operation");
  }
  return data;
};
