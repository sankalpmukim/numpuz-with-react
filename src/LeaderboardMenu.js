import Leaderboard from "./Leaderboard";
import { SignIn } from "./AuthFunctions";
import { useStore } from "./UserContext";
import { useAuthState } from "react-firebase-hooks/auth";

const LeaderboardMenu = (props) => {
  const [{ auth }] = useStore();
  const [user] = useAuthState(auth);
  return <div>{user ? <Leaderboard user={user} /> : <SignIn />}</div>;
};
export default LeaderboardMenu;
