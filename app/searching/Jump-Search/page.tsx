import React from "react";
import JumpVisualizer from "../../../components/visualizer/searching/Jump";

const JumpPage = () => {
  const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  const target = 7;

  return (
    <div>
      <h1>Jump Algorithm</h1>
      <JumpVisualizer array={array} target={target} />
    </div>
  );
};

export default JumpPage;
