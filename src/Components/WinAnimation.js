import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export const WinAnimation = () => {
  const { width, height } = useWindowSize();
  return <Confetti width={width - 1} height={height - 1} />;
};
