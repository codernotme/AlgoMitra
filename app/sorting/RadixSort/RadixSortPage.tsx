"use client";

import { useState } from "react";
import ArrayControls from "@/components/controls/ArrayControls";
import RadixSortVisualizer from "@/components/visualizer/sorting/RadixSort";

export default function RadixSortPage() {
  const [array, setArray] = useState<number[]>([]);

  const handleArrayChange = (newArray: number[]) => {
    setArray(newArray);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Radix Sort</h1>
      <ArrayControls onArrayChange={handleArrayChange} />
      <RadixSortVisualizer array={array} />
    </div>
  );
}
