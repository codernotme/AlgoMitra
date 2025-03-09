"use client";

import React from 'react';
import { TutorialCard } from '@/components/learning/TutorialCard';
import { Card } from '@heroui/react';
import { motion } from 'framer-motion';

const tutorials = [
  {
    id: 'bubble-sort',
    title: 'Bubble Sort',
    description: 'Learn how the bubble sort algorithm works through interactive visualization',
    difficulty: 'beginner' as 'beginner' | 'intermediate' | 'advanced',
    category: 'sorting',
    steps: [],
    timeComplexity: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)',
      space: 'O(1)',
    },
    realWorldApplications: [
      'Educational purposes',
      'Small datasets',
      'Nearly sorted data',
    ],
    quiz: {
      id: 'bubble-sort-quiz',
      questions: [],
    },
  },
  // Add more tutorials here
];

export default function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#87CEEB]">
          Learn Algorithms
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <TutorialCard tutorial={tutorial} progress={0} />
            </motion.div>
          ))}
        </div>

        <Card className="mt-12 p-6">
          <h2 className="text-2xl font-bold mb-4">Your Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-white">
              <h3 className="text-lg font-semibold">Completed Tutorials</h3>
              <p className="text-3xl font-bold">0</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white">
              <h3 className="text-lg font-semibold">Achievements</h3>
              <p className="text-3xl font-bold">0</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white">
              <h3 className="text-lg font-semibold">Quiz Score</h3>
              <p className="text-3xl font-bold">0%</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}