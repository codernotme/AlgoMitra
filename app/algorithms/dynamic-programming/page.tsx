"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardBody } from '@heroui/react';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { DynamicProgrammingProblem } from '@/types/algorithms';

const dpProblems: DynamicProgrammingProblem[] = [
  {
    id: 'fibonacci',
    name: 'Fibonacci Sequence',
    description: 'Calculate the nth Fibonacci number using dynamic programming',
    difficulty: 'beginner',
    implementation: '',
    visualizationType: 'table',
    testCases: [
      { input: 5, output: 5 },
      { input: 6, output: 8 }
    ]
  },
  {
    id: 'knapsack',
    name: '0/1 Knapsack',
    description: 'Solve the classic knapsack problem using dynamic programming',
    difficulty: 'intermediate',
    implementation: '',
    visualizationType: 'table',
    testCases: [
      { 
        input: {
          weights: [1, 2, 3],
          values: [6, 10, 12],
          capacity: 5
        },
        output: 22
      }
    ]
  },
  // Add more DP problems here
];

export default function DynamicProgrammingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Dynamic Programming Algorithms
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dpProblems.map((problem, index) => (
          <motion.div
            key={problem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">{problem.name}</h2>
                <span className={`text-sm px-2 py-1 rounded ${
                  problem.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                  problem.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {problem.difficulty}
                </span>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 mb-4">{problem.description}</p>
                <Link href={`/algorithms/dynamic-programming/${problem.id}`}>
                  <Button color="primary" className="w-full">
                    Start Learning
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