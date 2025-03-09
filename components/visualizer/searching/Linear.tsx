"use client";
import React, { useState } from 'react';
import { linearSearch, SearchResult } from "@/utils/SearchingControl";
import { Input } from '@heroui/react';
import { Button } from '@heroui/react';
const LinearSearchVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [target, setTarget] = useState<number>(0);
  const [result, setResult] = useState<SearchResult | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(-1);

  const handleArrayInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.split(',').map(Number);
    setArray(input);
    setResult(null);
    setCurrentStep(-1);
  };

  const handleTargetInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(Number(e.target.value));
    setResult(null);
    setCurrentStep(-1);
  };

  const startLinearSearch = () => {
    let steps = 0;
    let foundIndex = -1;
    for (let i = 0; i < array.length; i++) {
      steps++;
      setCurrentStep(i); // Highlight the current index
      if (array[i] === target) {
        foundIndex = i;
        break;
      }
    }
    setResult({ index: foundIndex, steps });
  };

  return (
    <div>
      <h2>Linear Search Visualizer</h2>
      <Input
        type="text"
        placeholder="Enter array, e.g., 1,2,3,4"
        onChange={handleArrayInput}
      />
      <Input
        type="number"
        placeholder="Enter target number"
        onChange={handleTargetInput}
      />
      <Button onClick={startLinearSearch}>Start Search</Button>

      <div style={{ marginTop: '20px' }}>
        <p>Array: {JSON.stringify(array)}</p>
        <p>Target: {target}</p>
        <p>Current Index: {currentStep}</p>
        {result && (
          <>
            <p>Index Found: {result.index !== -1 ? result.index : 'Not Found'}</p>
            <p>Steps Taken: {result.steps}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default LinearSearchVisualizer;
