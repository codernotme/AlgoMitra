"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardBody } from '@heroui/react';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { GraphAlgorithm } from '@/types/algorithms';

const graphAlgorithms: GraphAlgorithm[] = [
  {
    id: 'dijkstra',
    name: "Dijkstra's Algorithm",
    description: 'Find the shortest path between nodes in a weighted graph',
    type: 'pathfinding',
    complexity: {
      time: 'O((V + E) log V)',
      space: 'O(V)'
    },
    implementation: '',
    visualizationType: 'graph'
  },
  {
    id: 'a-star',
    name: 'A* Search Algorithm',
    description: 'Find the shortest path using heuristic search',
    type: 'pathfinding',
    complexity: {
      time: 'O(E)',
      space: 'O(V)'
    },
    implementation: '',
    visualizationType: 'graph'
  },
  {
    id: 'kruskal',
    name: "Kruskal's Algorithm",
    description: 'Find the minimum spanning tree of a weighted graph',
    type: 'spanning-tree',
    complexity: {
      time: 'O(E log E)',
      space: 'O(V)'
    },
    implementation: '',
    visualizationType: 'graph'
  }
  // Add more graph algorithms here
];

export default function GraphAlgorithmsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Advanced Graph Algorithms
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {graphAlgorithms.map((algorithm, index) => (
          <motion.div
            key={algorithm.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">{algorithm.name}</h2>
                <span className="text-sm px-2 py-1 rounded bg-blue-100 text-blue-800">
                  {algorithm.type}
                </span>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 mb-4">{algorithm.description}</p>
                <div className="mb-4">
                  <p className="text-sm">Time Complexity: {algorithm.complexity.time}</p>
                  <p className="text-sm">Space Complexity: {algorithm.complexity.space}</p>
                </div>
                <Link href={`/algorithms/graph/${algorithm.id}`}>
                  <Button color="primary" className="w-full">
                    Visualize
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}