import LeaderboardSignedIn from "./LeaderboardSignedIn";
import { SignIn } from "../Context/AuthFunctions";
import { useStore } from "../Context/UserContext";
import { useAuthState } from "react-firebase-hooks/auth";
import "../CSS/Leaderboard.css";

const LeaderboardMenu = (props) => {
  const [{ auth }] = useStore();
  const [user] = useAuthState(auth);
  return user ? (
    <LeaderboardSignedIn user={user} gridSize={props.gridSize} />
  ) : (
    <SignIn />
  );
};
export default LeaderboardMenu;
