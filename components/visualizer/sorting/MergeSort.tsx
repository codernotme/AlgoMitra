"use client";

import { useEffect, useState } from "react";
import { mergeSort } from "../../../utils/sortingAlgorithm";

interface MergeSortVisualizerProps {
  array: number[];
}

export default function MergeSortVisualizer({
  array,
}: MergeSortVisualizerProps) {
  const [currentStep, setCurrentStep] = useState<number[][]>([]);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const steps = mergeSort(array);
    setCurrentStep(steps);
    setStepIndex(0);
  }, [array]);

  useEffect(() => {
    if (stepIndex < currentStep.length - 1) {
      const timer = setTimeout(() => {
        setStepIndex((prev) => prev + 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [stepIndex, currentStep]);

  return (
    <div className="mt-4 flex gap-2">
      {currentStep[stepIndex]?.map((value, index) => (
        <div
          key={index}
          style={{ height: `${value * 5}px` }}
          className="bg-green-500 w-4"
        />
      ))}
    </div>
  );
}
