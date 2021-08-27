import { SignOut } from "../Context/AuthFunctions";
import Leaderboard from "./Leaderboard";

const LeaderboardSignedIn = (props) => {
  return (
    <div>
      <div>This is the Leaderboard</div>
      <div>You are logged in as {props.user.displayName}</div>
      <SignOut />
      <Leaderboard gridSize={props.gridSize} />
    </div>
  );
};
export default LeaderboardSignedIn;
