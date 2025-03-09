"use client";
import React, { useState } from "react";
import { Card } from "@heroui/react";
import { Button } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader } from "lucide-react";

const generateData = () => [
  {
    label: "Sorting",
    value: Math.floor(Math.random() * 100) + 1,
    color: "#87CEEB",
  },
  {
    label: "Search",
    value: Math.floor(Math.random() * 100) + 1,
    color: "#FF6B6B",
  },
  {
    label: "Trees",
    value: Math.floor(Math.random() * 100) + 1,
    color: "#FFD93D",
  },
  {
    label: "Graphs",
    value: Math.floor(Math.random() * 100) + 1,
    color: "#4CAF50",
  },
  {
    label: "Dynamic",
    value: Math.floor(Math.random() * 100) + 1,
    color: "#FF69B4",
  },
];

const GraphCard: React.FC = () => {
  const [data, setData] = useState(generateData());
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleUpdateData = () => setData(generateData());
  const maxValue = 100;
  const chartHeight = 200;
  const chartWidth = 500;

  return (
    <Card className="p-6 max-w-lg mx-auto bg-background border shadow-lg rounded-xl">
      <div className="relative h-64 w-full flex justify-center items-center">
        <svg
          className="w-full h-full overflow-visible"
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        >
          {data.map((item, index) => {
            if (index === data.length - 1) return null;
            const nextItem = data[index + 1];

            return (
              <motion.line
                key={`line-${index}`}
                x1={(index / (data.length - 1)) * chartWidth}
                x2={((index + 1) / (data.length - 1)) * chartWidth}
                y1={chartHeight - (item.value / maxValue) * chartHeight}
                y2={chartHeight - (nextItem.value / maxValue) * chartHeight}
                stroke={item.color}
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            );
          })}
          {data.map((item, index) => (
            <motion.circle
              key={item.label}
              cx={(index / (data.length - 1)) * chartWidth}
              cy={chartHeight - (item.value / maxValue) * chartHeight}
              r={hoveredIndex === index ? 10 : 6}
              fill={item.color}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              aria-label={`${item.label}: ${item.value}%`}
              tabIndex={0}
            />
          ))}
        </svg>
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-lg bg-gray-800 text-white text-xs font-semibold shadow-lg"
              style={{ left: `${(hoveredIndex / (data.length - 1)) * 100}%` }}
            >
              {data[hoveredIndex].label}: {data[hoveredIndex].value}%
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="mt-8 w-full flex justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          className="py-2 px-4 rounded-lg font-medium shadow-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center gap-2"
          onClick={handleUpdateData}
          variant="ghost"
        >
          <Loader size={16} />
          Refresh Data
        </Button>
      </motion.div>
    </Card>
  );
};

export default GraphCard;
