import { createRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useStore } from "../Context/UserContext";
import { TableEntry, TableEntryRef } from "./TableEntry";
import TableHeader from "./TableHeader";
import "../CSS/Leaderboard.css";

const Leaderboard = (props) => {
  const [{ auth, firestore }] = useStore();
  const [user] = useAuthState(auth);
  const entryRef = firestore.collection(String(props.gridSize));
  const query = entryRef.orderBy("score", "asc");
  const [allEntries] = useCollectionData(query, { idField: "uid" });
  //   useEffect(() => {}, [allEntries]);
  const [top, setTop] = useState(true);
  const topRef = createRef();
  const userRef = createRef();
  // const index = (allEntries, user) => {
  //   for (let index = 0; index < allEntries.length; index++) {
  //     const entry = allEntries[index];
  //     if (entry.uid === user.uid) {
  //       return index;
  //     }
  //   }
  //   return -1;
  // };
  return (
    user && (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <table className="table-container">
            <TableHeader />
            <tbody>
              {allEntries &&
                allEntries.map((entry, idx) => {
                  if (idx === 0) {
                    return (
                      <TableEntryRef
                        key={entry.uid}
                        document={entry}
                        rank={idx + 1}
                        ref={topRef}
                      />
                    );
                  }
                  if (entry.uid !== user.uid) {
                    return (
                      <TableEntry
                        key={entry.uid}
                        document={entry}
                        rank={idx + 1}
                      />
                    );
                  } else {
                    return (
                      <TableEntryRef
                        key={entry.uid}
                        document={entry}
                        rank={idx + 1}
                        ref={userRef}
                      />
                    );
                  }
                })}
            </tbody>
          </table>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={(e) => {
              if (top) {
                if (userRef.current !== null) {
                  userRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }
                setTop(false);
              } else {
                topRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
                setTop(true);
              }
            }}
          >
            {top ? "Scroll to you" : "Scroll to top"}
          </button>
        </div>
      </div>
    )
  );
};
export default Leaderboard;

// export default class Table extends Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         data: []
//       }
//       this.componentDidMount = this.componentDidMount.bind(this)
//       this.handleSort = this.handleSort.bind(this)
//     }

//     componentDidMount() {
//       fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
//         .then((response) => response.json())
//         .then((json) => this.setState({
//           data: json
//       }))
//     }

//     handleSort(attribute) {
//       this.setState({
//         data: this.state.data.sort(
//           (a,b) => parseInt(a[attribute], 10) > parseInt(b[attribute], 10) ? -1 : 1
//       )})
//     }

//     render() {
//       const rows = this.state.data.map((row, index) =>
//         <Tablerow
//           key={row.username}
//           position={index + 1}
//           username={row.username}
//           alltime={row.alltime}
//           recent={row.recent}
//           className={index % 2 === 0 ? 'pure-table-odd' : ''}
//         />)

//       return (
//         <table className="pure-table">
//           <Tablehead onChange={this.handleSort} />
//           <tbody>
//             { rows }
//           </tbody>
//         </table>
//       )
//     }
//   }
