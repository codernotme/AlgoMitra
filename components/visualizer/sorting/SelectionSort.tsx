"use client";

import { useEffect, useState } from "react";
import { selectionSort } from "../../../utils/sortingAlgorithm";

interface SelectionSortVisualizerProps {
  array: number[];
}

export default function SelectionSortVisualizer({
  array,
}: SelectionSortVisualizerProps) {
  const [currentStep, setCurrentStep] = useState<number[][]>([]);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const steps = selectionSort(array);
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
          className="bg-purple-500 w-4"
        />
      ))}
    </div>
  );
}
