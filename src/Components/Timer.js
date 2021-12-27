import { useState, useEffect } from "react";
import "../index.css";

const Timer = ({
  won,
  user,
  gridSize,
  isActive,
  reset,
  setReset,
  firestore,
  firebase,
}) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    if (reset) {
      setReset(false);
      setTime(0);
    }
  }, [reset, setReset]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 100);
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  useEffect(() => {
    if (won && user) {
      console.log(user.uid);
      if (localStorage.getItem(gridSize) !== null) {
        console.log("won");
        if (
          typeof JSON.parse(localStorage.getItem(gridSize))[user.uid] ===
            "undefined" ||
          (typeof JSON.parse(localStorage.getItem(gridSize))[user.uid] !==
            "undefined" &&
            JSON.parse(localStorage.getItem(gridSize))[user.uid] > time)
        ) {
          const data = {
            ...JSON.parse(localStorage.getItem(gridSize)),
          };
          data[user.uid] = time;
          localStorage.setItem(gridSize, JSON.stringify(data));
        }
      } else {
        const data = {};
        data[user.uid] = time;
        localStorage.setItem(gridSize, JSON.stringify(data));
      }
    }
  }, [won, user, time, gridSize]);

  useEffect(() => {
    // console.log("in on change won");
    if (won && user) {
      console.log(user.uid);
      const leaderboardRef = firestore
        .collection(String(gridSize))
        .doc(user.uid);
      leaderboardRef.get().then((doc) => {
        if (!doc.exists) {
          leaderboardRef.set({
            uid: user.uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            userName: user.displayName,
            photoUrl: user.photoURL,
            score: time,
          });
        } else {
          const { score } = doc.data();
          if (score > time) {
            leaderboardRef.update({
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              score: time,
            });
          }
        }
      });
      if (localStorage.getItem(gridSize) !== null) {
        console.log("won");
        if (
          typeof JSON.parse(localStorage.getItem(gridSize))[user.uid] ===
            "undefined" ||
          (typeof JSON.parse(localStorage.getItem(gridSize))[user.uid] !==
            "undefined" &&
            JSON.parse(localStorage.getItem(gridSize))[user.uid] > time)
        ) {
          const data = {
            ...JSON.parse(localStorage.getItem(gridSize)),
          };
          data[user.uid] = time;
          localStorage.setItem(gridSize, JSON.stringify(data));
        }
      } else {
        const data = {};
        data[user.uid] = time;
        localStorage.setItem(gridSize, JSON.stringify(data));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [won, user, time, gridSize, firestore]);
  return (
    <div className="timer">
      <span className="digits">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
      </span>
      <span className="digits mili-sec">
        {("0" + ((time / 10) % 100)).slice(-2)}
      </span>
    </div>
  );
};
export default Timer;
