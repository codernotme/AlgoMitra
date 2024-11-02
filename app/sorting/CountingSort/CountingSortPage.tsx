"use client";

import { useState } from "react";
import ArrayControls from "@/components/controls/ArrayControls";
import CountingSortVisualizer from "@/components/visualizer/sorting/CountingSort";

export default function CountingSortPage() {
  const [array, setArray] = useState<number[]>([]);

  const handleArrayChange = (newArray: number[]) => {
    setArray(newArray);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Counting Sort</h1>
      <ArrayControls onArrayChange={handleArrayChange} />
      <CountingSortVisualizer array={array} />
    </div>
  );
}
