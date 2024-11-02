"use client";

import { useState } from "react";
import ArrayControls from "@/components/controls/ArrayControls";
import InsertionSortVisualizer from "@/components/visualizer/sorting/InsertionSort";

export default function InsertionSortPage() {
  const [array, setArray] = useState<number[]>([]);

  const handleArrayChange = (newArray: number[]) => {
    setArray(newArray);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Insertion Sort</h1>
      <ArrayControls onArrayChange={handleArrayChange} />
      <InsertionSortVisualizer array={array} />
    </div>
  );
}
