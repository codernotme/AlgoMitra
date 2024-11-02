// app/sorting/ShellSortPage.tsx
"use client";

import { useState } from "react";
import ArrayControls from "@/components/controls/ArrayControls";
import ShellSortVisualizer from "@/components/visualizer/sorting/ShellSort";

export default function ShellSortPage() {
  const [array, setArray] = useState<number[]>([]);

  const handleArrayChange = (newArray: number[]) => {
    setArray(newArray);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Shell Sort</h1>
      <ArrayControls onArrayChange={handleArrayChange} />
      <ShellSortVisualizer array={array} />
    </div>
  );
}
