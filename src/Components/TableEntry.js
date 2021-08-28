import { forwardRef } from "react";
import { useStore } from "../Context/UserContext";
import Time from "./Time";

export const TableEntry = (props) => {
  const [{ auth }] = useStore();
  const currUid = auth.currentUser.uid;
  const { userName, score, photoUrl, uid } = props.document;
  const className = currUid === uid ? "current-user" : "";
  return (
    <tr className={className}>
      <td colSpan="1">{props.rank}</td>
      <td
        colSpan="1"
        style={{
          width: "4rem",
        }}
      >
        <img src={photoUrl} alt={userName + "'s photo."} className="image" />
      </td>
      <td colSpan="1">{userName}</td>
      <Time time={score} />
    </tr>
  );
};
export const TableEntryRef = forwardRef((props, ref) => {
  const [{ auth }] = useStore();
  const currUid = auth.currentUser.uid;
  const { userName, score, photoUrl, uid } = props.document;
  const className = currUid === uid ? "current-user" : "";
  return (
    <tr ref={ref} className={className}>
      <td colSpan="1">{props.rank}</td>
      <td
        colSpan="1"
        style={{
          width: "4rem",
        }}
      >
        <img src={photoUrl} alt={userName + "'s photo."} className="image" />
      </td>
      <td colSpan="1">{userName}</td>
      <Time time={score} />
    </tr>
  );
});
