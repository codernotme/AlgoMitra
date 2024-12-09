import React, { useState } from "react";
import { visualizeJumpSearch } from "../../../utils/SearchingControl";

const JumpVisualizer = ({ array, target }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [steps, setSteps] = useState(0);

  const handleVisualize = () => {
    visualizeJumpSearch(array, target, (index, steps) => {
      setCurrentIndex(index);
      setSteps(steps);
    });
  };

  return (
    <div>
      <button onClick={handleVisualize}>Visualize Jump Search</button>
      <div>Steps: {steps}</div>
      <div>
        {array.map((value, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              margin: "2px",
              backgroundColor: index === currentIndex ? "red" : "lightgray",
            }}
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JumpVisualizer;
