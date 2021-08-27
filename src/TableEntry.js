import { useStore } from "./UserContext";

const TableEntry = (props) => {
  const [{ auth }] = useStore();
  const currUid = auth.currentUser.uid;
  const { userName, score, photoUrl, uid } = props.document;
  const className = currUid === uid ? "same-user" : "someone-else";
  return (
    <tr className={className}>
      <td>{props.rank}</td>
      <td>
        <img src={photoUrl} alt={userName + "'s photo."} />
      </td>
      <td>{userName}</td>
      <td>{score}</td>
    </tr>
  );
};
export default TableEntry;
