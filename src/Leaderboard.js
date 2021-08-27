// import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useStore } from "./UserContext";
import TableEntry from "./TableEntry";
import TableHeader from "./TableHeader";

const Leaderboard = (props) => {
  const [{ auth, firestore }] = useStore();
  const [user] = useAuthState(auth);
  const entryRef = firestore.collection(String(props.gridSize));
  const query = entryRef.orderBy("score", "asc");
  const [allEntries] = useCollectionData(query, { idField: "uid" });
  //   useEffect(() => {}, [allEntries]);
  return (
    user && (
      <table>
        {/* <div>This is going to be the whole Leaderboard</div> */}
        <TableHeader />
        <tbody>
          {allEntries &&
            allEntries.map((entry, idx) => {
              return (
                <TableEntry key={entry.uid} document={entry} rank={idx + 1} />
              );
            })}
        </tbody>
      </table>
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
