"use client";
import { useState } from "react";
import ArrayControls from "@/components/controls/ArrayControls";
import BubbleSortVisualizer from "@/components/visualizer/sorting/BubbleSort";

export default function BubbleSortPage() {
  const [array, setArray] = useState<number[]>([5, 3, 8, 4, 2]);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl text-center font-bold text-white mb-8">
        Bubble Sort Visualization
      </h1>
      <ArrayControls onArrayChange={setArray} />
      <BubbleSortVisualizer array={array} />
    </div>
  );
}
