"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardBody } from '@heroui/react';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { TreeAlgorithm } from '@/types/algorithms';

const treeAlgorithms: TreeAlgorithm[] = [
  {
    id: 'avl',
    name: 'AVL Tree Balancing',
    description: 'Self-balancing binary search tree with height difference of at most one',
    type: 'balancing',
    complexity: {
      time: 'O(log n)',
      space: 'O(n)'
    },
    implementation: '',
    visualizationType: 'tree'
  },
  {
    id: 'red-black',
    name: 'Red-Black Tree',
    description: 'Self-balancing binary search tree with color properties',
    type: 'balancing',
    complexity: {
      time: 'O(log n)',
      space: 'O(n)'
    },
    implementation: '',
    visualizationType: 'tree'
  },
  {
    id: 'b-tree',
    name: 'B-Tree Operations',
    description: 'Self-balancing tree data structure for databases and file systems',
    type: 'balancing',
    complexity: {
      time: 'O(log n)',
      space: 'O(n)'
    },
    implementation: '',
    visualizationType: 'tree'
  }
  // Add more tree algorithms here
];

export default function TreeAlgorithmsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tree Balancing Algorithms
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treeAlgorithms.map((algorithm, index) => (
          <motion.div
            key={algorithm.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">{algorithm.name}</h2>
                <span className="text-sm px-2 py-1 rounded bg-green-100 text-green-800">
                  {algorithm.type}
                </span>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 mb-4">{algorithm.description}</p>
                <div className="mb-4">
                  <p className="text-sm">Time Complexity: {algorithm.complexity.time}</p>
                  <p className="text-sm">Space Complexity: {algorithm.complexity.space}</p>
                </div>
                <Link href={`/algorithms/tree/${algorithm.id}`}>
                  <Button color="primary" className="w-full">
                    Learn & Visualize
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