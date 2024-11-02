'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { bubbleSort } from "../../../utils/sortingAlgorithm"

interface BubbleSortVisualizerProps {
  array?: number[]
}

export default function Component({ array = [64, 34, 25, 12, 22, 11, 90] }: BubbleSortVisualizerProps) {
  const [steps, setSteps] = useState<{ array: number[], comparing: number[] }[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [isSorting, setIsSorting] = useState(false)

  useEffect(() => {
    const sortSteps = bubbleSort(array).map((step, index, steps) => ({
      array: step,
      comparing: index < steps.length - 1 ? [index % (step.length - 1), index % (step.length - 1) + 1] : []
    }))
    setSteps(sortSteps)
  }, [array])

  useEffect(() => {
    if (isSorting && currentStep < steps.length - 1) {
      const timer = setTimeout(() => setCurrentStep(currentStep + 1), 500)
      return () => clearTimeout(timer)
    } else if (currentStep === steps.length - 1) {
      setIsSorting(false)
    }
  }, [currentStep, steps, isSorting])

  const handleSort = () => {
    setCurrentStep(0)
    setIsSorting(true)
  }

  const handleReset = () => {
    setCurrentStep(0)
    setIsSorting(false)
  }

  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800">Bubble Sort Visualizer</h2>
      <div className="flex justify-center items-end gap-2 h-64 bg-white p-4 rounded-md shadow">
        {steps[currentStep]?.array.map((value, index) => (
          <motion.div
            key={index}
            className="w-8 rounded-t-md flex flex-col justify-end items-center"
            initial={{ height: 20 }}
            animate={{ height: value * 3 }}
            style={{
              backgroundColor: steps[currentStep].comparing.includes(index)
                ? "#FF6B6B"
                : "#4ECDC4",
            }}
          >
            <span className="text-xs text-white font-semibold mb-1">{value}</span>
          </motion.div>
        ))}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          className="bg-blue-600 h-2.5 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
      </div>
      <p className="text-gray-600" aria-live="polite">
        {isSorting
          ? `Comparing elements ${steps[currentStep].comparing.map(i => steps[currentStep].array[i]).join(" and ")}`
          : currentStep === steps.length - 1
          ? "Sorting complete!"
          : "Press 'Start Sorting' to begin"}
      </p>
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={handleSort}
          disabled={isSorting}
        >
          Start Sorting
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          onClick={handleReset}
          disabled={isSorting}
        >
          Reset
        </button>
      </div>
    </div>
  )
}