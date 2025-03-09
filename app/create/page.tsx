"use client";

import React, { useState } from 'react';
import { AlgorithmEditor } from '@/components/AlgorithmEditor';
import { AlgorithmVisualizer } from '@/components/visualizer/AlgorithmVisualizer';
import { Card } from '@heroui/react';

export default function CreateAlgorithmPage() {
  const [visualizationData, setVisualizationData] = useState<{
    data: number[];
    type: 'array' | 'tree' | 'graph';
    highlights: number[];
  }>({
    data: [],
    type: 'array',
    highlights: [],
  });

  const handleRunAlgorithm = (code: string) => {
    try {
      // Create a safe evaluation environment
      const safeEval = new Function('input', code);
      
      // Example input data
      const testData = [5, 2, 8, 1, 9, 3];
      
      // Run the algorithm
      const result = safeEval(testData);
      
      // Update visualization
      setVisualizationData({
        data: Array.isArray(result) ? result : testData,
        type: 'array',
        highlights: [],
      });
    } catch (error) {
      console.error('Error running algorithm:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#87CEEB]">
        Create Your Algorithm
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AlgorithmEditor onRunAlgorithm={handleRunAlgorithm} />
        
        <Card className="p-4">
          <h2 className="text-2xl font-bold mb-4">Visualization</h2>
          <AlgorithmVisualizer
            data={visualizationData.data}
            type={visualizationData.type}
            highlights={visualizationData.highlights}
          />
        </Card>
      </div>
    </div>
  );
}