import "../CSS/Leaderboard.css";

const Time = (props) => {
  return (
    <td>
      <span className="time score">
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="time score">
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
      </span>
      <span className="time mili-sec score">
        {("0" + ((props.time / 10) % 100)).slice(-2)}
      </span>
    </td>
  );
};
export default Time;
