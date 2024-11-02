"use client";

import { useState } from "react";
import ArrayControls from "@/components/controls/ArrayControls";
import BucketSortVisualizer from "@/components/visualizer/sorting/BucketSort";

export default function BucketSortPage() {
  const [array, setArray] = useState<number[]>([]);

  const handleArrayChange = (newArray: number[]) => {
    setArray(newArray);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Bucket Sort</h1>
      <ArrayControls onArrayChange={handleArrayChange} />
      <BucketSortVisualizer array={array} />
    </div>
  );
}
