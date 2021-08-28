import { SignOut } from "../Context/AuthFunctions";
import Leaderboard from "./Leaderboard";
import "../CSS/Leaderboard.css";

const LeaderboardSignedIn = (props) => {
  return (
    <div className="leaderboard full">
      <div className="full">
        <div className="full">
          You are logged in as {props.user.displayName}
        </div>
        <SignOut />
      </div>

      <Leaderboard gridSize={props.gridSize} />
    </div>
  );
};
export default LeaderboardSignedIn;
