"use client";
import { useState } from "react";
import ArrayControls from "@/components/controls/ArrayControls";
import HeapSortVisualizer from "@/components/visualizer/sorting/HeapSort";

export default function HeapSortPage() {
  const [array, setArray] = useState<number[]>([]);

  const handleArrayChange = (newArray: number[]) => {
    setArray(newArray);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Heap Sort</h1>
      <ArrayControls onArrayChange={handleArrayChange} />
      <HeapSortVisualizer array={array} />
    </div>
  );
}
