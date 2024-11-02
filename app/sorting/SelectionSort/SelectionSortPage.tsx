// app/sorting/SelectionSortPage.tsx
"use client";

import { useState } from "react";
import ArrayControls from "@/components/controls/ArrayControls";
import SelectionSortVisualizer from "@/components/visualizer/sorting/SelectionSort";
export default function SelectionSortPage() {
  const [array, setArray] = useState<number[]>([]);

  const handleArrayChange = (newArray: number[]) => {
    setArray(newArray);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Selection Sort</h1>
      <ArrayControls onArrayChange={handleArrayChange} />
      <SelectionSortVisualizer array={array} />
    </div>
  );
}
