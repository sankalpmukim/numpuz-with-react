import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useStore } from "./UserContext";
import { login, logout } from "./UserReducer";

export const SignIn = () => {
  const [{ auth }, dispatch] = useStore();
  const [user] = useAuthState(auth);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    dispatch(login(user));
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </>
  );
};
export const SignOut = () => {
  const [{ auth }, dispatch] = useStore();
  return (
    auth.currentUser && (
      <button
        className="sign-out"
        onClick={() => {
          dispatch(logout());
          auth.signOut();
        }}
      >
        Sign Out
      </button>
    )
  );
};
