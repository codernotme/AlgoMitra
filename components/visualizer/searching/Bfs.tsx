"use client";
import React, { useState } from "react";
import { Input } from "@heroui/react";
import { Button } from "@heroui/react";

import { breadthFirstSearch, SearchResult } from "@/utils/SearchingControl";

type AdjacencyList = number[][];

const BFSVisualizer: React.FC = () => {
  const [graph, setGraph] = useState<AdjacencyList>([]);
  const [startNode, setStartNode] = useState<number>(0);
  const [targetNode, setTargetNode] = useState<number>(0);
  const [result, setResult] = useState<SearchResult | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(-1);

  const handleGraphInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target.value
      .split("\n")
      .map((row) => row.split(",").map(Number));
    setGraph(input);
    setResult(null);
    setCurrentStep(-1);
  };

  const handleStartNodeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartNode(Number(e.target.value));
    setResult(null);
  };

  const handleTargetNodeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetNode(Number(e.target.value));
    setResult(null);
  };

  const startBFS = () => {
    const bfsResult = breadthFirstSearch(graph, startNode, targetNode);
    setResult(bfsResult);
  };

  return (
    <div>
      <h2>Breadth-First Search (BFS) Visualizer</h2>
      <textarea
        placeholder="Enter adjacency list, e.g., 0,1\n1,2\n2,3,0"
        onChange={handleGraphInput}
      />
      <Input
        type="number"
        placeholder="Enter start node"
        onChange={handleStartNodeInput}
      />
      <Input
        type="number"
        placeholder="Enter target node"
        onChange={handleTargetNodeInput}
      />
      <Button onClick={startBFS}>Start BFS</Button>

      <div style={{ marginTop: "20px" }}>
        <p>Graph (Adjacency List): {JSON.stringify(graph)}</p>
        <p>Start Node: {startNode}</p>
        <p>Target Node: {targetNode}</p>
        {result && (
          <>
            <p>
              Found Index: {result.index !== -1 ? result.index : "Not Found"}
            </p>
            <p>Steps Taken: {result.steps}</p>
            <p>Path: {result.path ? result.path.join(" -> ") : "N/A"}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default BFSVisualizer;
