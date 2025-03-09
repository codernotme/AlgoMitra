"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardBody } from '@heroui/react';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { StringMatchingAlgorithm } from '@/types/algorithms';

const stringAlgorithms: StringMatchingAlgorithm[] = [
  {
    id: 'kmp',
    name: 'KMP Algorithm',
    description: 'Knuth-Morris-Pratt string matching algorithm',
    complexity: {
      time: 'O(n + m)',
      space: 'O(m)'
    },
    implementation: '',
    visualizationType: 'table'
  },
  {
    id: 'rabin-karp',
    name: 'Rabin-Karp Algorithm',
    description: 'String matching using rolling hash function',
    complexity: {
      time: 'O(n + m)',
      space: 'O(1)'
    },
    implementation: '',
    visualizationType: 'table'
  },
  {
    id: 'boyer-moore',
    name: 'Boyer-Moore Algorithm',
    description: 'Efficient string search algorithm',
    complexity: {
      time: 'O(n + m)',
      space: 'O(k)'
    },
    implementation: '',
    visualizationType: 'table'
  }
  // Add more string matching algorithms here
];

export default function StringMatchingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        String Matching Algorithms
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stringAlgorithms.map((algorithm, index) => (
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
                <Link href={`/algorithms/string-matching/${algorithm.id}`}>
                  <Button color="primary" className="w-full">
                    Try Algorithm
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