"use client";
import { useState } from "react";

interface ArrayControlsProps {
  onArrayChange: (arr: number[]) => void;
}

export default function ArrayControls({ onArrayChange }: ArrayControlsProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleInputChange = () => {
    const arr = inputValue
      .split(",")
      .map((n) => n.trim()) // Trimming whitespace
      .map((n) => parseInt(n, 10))
      .filter((n) => !isNaN(n)); // Filter out invalid numbers

    // Validate the input array
    if (arr.length === 0 || arr.some(isNaN)) {
      setError("Please enter a valid list of numbers.");
    } else {
      setError(""); // Clear error message
      onArrayChange(arr);
      setInputValue(""); // Reset input field after setting array
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter numbers separated by commas"
          className="border border-gray-500 p-2 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyPress={(e) => {
            if (e.key === "Enter") handleInputChange();
          }}
        />
        <button
          onClick={handleInputChange}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Set Array
        </button>
      </div>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
