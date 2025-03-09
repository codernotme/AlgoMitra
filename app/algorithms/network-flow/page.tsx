"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardBody } from '@heroui/react';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { NetworkFlowAlgorithm } from '@/types/algorithms';

const networkFlowAlgorithms: NetworkFlowAlgorithm[] = [
  {
    id: 'ford-fulkerson',
    name: 'Ford-Fulkerson Algorithm',
    description: 'Find the maximum flow in a flow network',
    complexity: {
      time: 'O(VE²)',
      space: 'O(V + E)'
    },
    implementation: '',
    visualizationType: 'graph'
  },
  {
    id: 'edmonds-karp',
    name: 'Edmonds-Karp Algorithm',
    description: 'Implementation of Ford-Fulkerson using BFS',
    complexity: {
      time: 'O(VE²)',
      space: 'O(V + E)'
    },
    implementation: '',
    visualizationType: 'graph'
  },
  {
    id: 'dinic',
    name: "Dinic's Algorithm",
    description: 'Strongly polynomial maximum flow algorithm',
    complexity: {
      time: 'O(V²E)',
      space: 'O(V + E)'
    },
    implementation: '',
    visualizationType: 'graph'
  }
  // Add more network flow algorithms here
];

export default function NetworkFlowPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Network Flow Algorithms
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {networkFlowAlgorithms.map((algorithm, index) => (
          <motion.div
            key={algorithm.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">{algorithm.name}</h2>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 mb-4">{algorithm.description}</p>
                <div className="mb-4">
                  <p className="text-sm">Time Complexity: {algorithm.complexity.time}</p>
                  <p className="text-sm">Space Complexity: {algorithm.complexity.space}</p>
                </div>
                <Link href={`/algorithms/network-flow/${algorithm.id}`}>
                  <Button color="primary" className="w-full">
                    Visualize Flow
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