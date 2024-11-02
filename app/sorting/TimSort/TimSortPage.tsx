"use client";

import { useState } from "react";
import ArrayControls from "@/components/controls/ArrayControls";
import TimSortVisualizer from "@/components/visualizer/sorting/TimSort";

export default function TimSortPage() {
  const [array, setArray] = useState<number[]>([]);

  const handleArrayChange = (newArray: number[]) => {
    setArray(newArray);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Tim Sort</h1>
      <ArrayControls onArrayChange={handleArrayChange} />
      <TimSortVisualizer array={array} />
    </div>
  );
}
