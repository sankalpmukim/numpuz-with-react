import LeaderboardSignedIn from "./LeaderboardSignedIn";
import { SignIn } from "./AuthFunctions";
import { useStore } from "./UserContext";
import { useAuthState } from "react-firebase-hooks/auth";

const LeaderboardMenu = (props) => {
  const [{ auth }] = useStore();
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? (
        <LeaderboardSignedIn user={user} gridSize={props.gridSize} />
      ) : (
        <SignIn />
      )}
    </div>
  );
};
export default LeaderboardMenu;
