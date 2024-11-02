"use client";

import { useState } from "react";
import ArrayControls from "@/components/controls/ArrayControls";
import QuickSortVisualizer from "../../../components/visualizer/sorting/QuickSort";

export default function QuickSortPage() {
  const [array, setArray] = useState<number[]>([]);

  const handleArrayChange = (newArray: number[]) => {
    setArray(newArray);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Quick Sort</h1>
      <ArrayControls onArrayChange={handleArrayChange} />
      <QuickSortVisualizer array={array} />
    </div>
  );
}
