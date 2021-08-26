import { SignOut } from "./AuthFunctions";

const Leaderboard = (props) => {
  return (
    <div>
      <div>This is the Leaderboard</div>
      <div>You are logged in as {props.user.displayName}</div>
      <SignOut />
    </div>
  );
};
export default Leaderboard;
