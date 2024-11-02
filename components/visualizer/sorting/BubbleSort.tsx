import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { bubbleSort } from "../../../utils/sortingAlgorithm";

interface BubbleSortVisualizerProps {
  array: number[];
}

export default function BubbleSortVisualizer({
  array,
}: BubbleSortVisualizerProps) {
  const [steps, setSteps] = useState<number[][]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const steps = bubbleSort(array);
    setSteps(steps);
  }, [array]);

  useEffect(() => {
    if (currentStep < steps.length - 1) {
      const timer = setTimeout(() => setCurrentStep(currentStep + 1), 500);
      return () => clearTimeout(timer);
    }
  }, [currentStep, steps]);

  return (
    <div className="flex justify-center gap-2">
      {steps[currentStep]?.map((value, index) => (
        <motion.div
          key={index}
          className="w-6"
          initial={{ height: 20 }}
          animate={{ height: value * 5 }}
          style={{
            backgroundColor: "#FF6B6B",
          }}
        />
      ))}
    </div>
  );
}
