"use client";

import { useState } from "react";
import ArrayControls from "@/components/controls/ArrayControls";
import MergeSortVisualizer from "@/components/visualizer/sorting/MergeSort";

export default function MergeSortPage() {
  const [array, setArray] = useState<number[]>([]);

  const handleArrayChange = (newArray: number[]) => {
    setArray(newArray);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Merge Sort</h1>
      <ArrayControls onArrayChange={handleArrayChange} />
      <MergeSortVisualizer array={array} />
    </div>
  );
}
