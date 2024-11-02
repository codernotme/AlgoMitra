"use client";
import { useState } from "react";

interface ArrayControlsProps {
  onArrayChange: (arr: number[]) => void;
}

export default function ArrayControls({ onArrayChange }: ArrayControlsProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = () => {
    const arr = inputValue.split(",").map((n) => parseInt(n, 10));
    onArrayChange(arr);
  };

  return (
    <div className="flex gap-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter numbers separated by commas"
        className="border border-gray-500 p-2 rounded-md"
      />
      <button
        onClick={handleInputChange}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Set Array
      </button>
    </div>
  );
}
