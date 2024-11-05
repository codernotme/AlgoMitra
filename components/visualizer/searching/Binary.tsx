"use client";
import React, { useState } from 'react';
import { binarySearch, SearchResult } from '@/components/controls/SearchingControl';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';

const BinarySearchVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [target, setTarget] = useState<number>(0);
  const [result, setResult] = useState<SearchResult | null>(null);
  const [left, setLeft] = useState<number>(0);
  const [right, setRight] = useState<number>(-1);
  const [mid, setMid] = useState<number | null>(null);

  const handleArrayInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.split(',').map(Number).sort((a, b) => a - b);
    setArray(input);
    setResult(null);
    setLeft(0);
    setRight(input.length - 1);
    setMid(null);
  };

  const handleTargetInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(Number(e.target.value));
    setResult(null);
  };

  const startBinarySearch = () => {
    let steps = 0;
    let l = 0;
    let r = array.length - 1;
    let foundIndex = -1;

    while (l <= r) {
      steps++;
      const m = Math.floor((l + r) / 2);
      setLeft(l);
      setRight(r);
      setMid(m);

      if (array[m] === target) {
        foundIndex = m;
        break;
      } else if (array[m] < target) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
    setResult({ index: foundIndex, steps });
  };

  return (
    <div>
      <h2>Binary Search Visualizer</h2>
      <input
        type="text"
        placeholder="Enter sorted array, e.g., 1,2,3,4"
        onChange={handleArrayInput}
      />
      <Input
        type="number"
        placeholder="Enter target number"
        onChange={handleTargetInput}
      />
      <Button onClick={startBinarySearch}>Start Search</Button>

      <div style={{ marginTop: '20px' }}>
        <p>Array: {JSON.stringify(array)}</p>
        <p>Target: {target}</p>
        <p>Left: {left}</p>
        <p>Right: {right}</p>
        <p>Mid: {mid !== null ? mid : 'N/A'}</p>
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

export default BinarySearchVisualizer;
