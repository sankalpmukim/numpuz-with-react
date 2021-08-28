import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useStore } from "./UserContext";
import { login, logout } from "./UserReducer";
import "../CSS/Leaderboard.css";

export const SignIn = () => {
  const [{ auth }, dispatch] = useStore();
  const [user] = useAuthState(auth);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    dispatch(login(user));
  };

  return (
    <div className="leaderboard full">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button className="sign-in" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>

      <p>
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </div>
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
