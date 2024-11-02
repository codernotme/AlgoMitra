"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const sortingAlgorithmsInfo = [
  {
    name: "Bubble Sort",
    description:
      "A simple comparison-based algorithm where elements are repeatedly swapped to sort the array.",
    route: "/sorting/BubbleSort",
  },
  {
    name: "Selection Sort",
    description:
      "An in-place comparison sorting algorithm that selects the smallest element and moves it to the beginning.",
    route: "/sorting/SelectionSort",
  },
  {
    name: "Insertion Sort",
    description:
      "A simple algorithm that builds the final sorted array one item at a time.",
    route: "/sorting/InsertionSort",
  },
  {
    name: "Merge Sort",
    description:
      "A divide-and-conquer algorithm that divides the array, sorts each half, and merges them back together.",
    route: "/sorting/MergeSort",
  },
  {
    name: "Quick Sort",
    description:
      "An efficient, divide-and-conquer algorithm that sorts by partitioning an array into smaller sub-arrays.",
    route: "/sorting/QuickSort",
  },
  {
    name: "Heap Sort",
    description:
      "A comparison-based algorithm that uses a binary heap data structure to sort elements.",
    route: "/sorting/HeapSort",
  },
  {
    name: "Shell Sort",
    description:
      "An optimization over Insertion Sort that allows elements to move farther apart, reducing the total number of swaps.",
    route: "/sorting/ShellSort",
  },
  {
    name: "Counting Sort",
    description:
      "A non-comparison sorting algorithm that sorts integers by counting occurrences of each value.",
    route: "/sorting/CountingSort",
  },
  {
    name: "Radix Sort",
    description:
      "A non-comparison sorting algorithm that sorts numbers by their individual digits.",
    route: "/sorting/RadixSort",
  },
  {
    name: "Tim Sort",
    description:
      "An optimized hybrid sorting algorithm derived from Merge Sort and Insertion Sort, used in Python's sort.",
    route: "/sorting/TimSort",
  },
  {
    name: "Bucket Sort",
    description:
      "A sorting algorithm that distributes elements into buckets, which are then sorted individually.",
    route: "/sorting/BucketSort",
  },
];

export default function SortingVisualizerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#87CEEB]">
          Sorting Algorithm Visualizer
        </h1>
        <p className="mb-8 text-muted-foreground text-center max-w-2xl mx-auto">
          Explore and understand various sorting algorithms through interactive
          visualizations. Select an algorithm to see how it sorts a list of
          numbers step by step.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sortingAlgorithmsInfo.map((algorithm, index) => (
          <motion.div
            key={algorithm.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#FF6B6B]">
                  {algorithm.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-2">
                  {algorithm.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                <Link href={algorithm.route} passHref>
                  <Button className="w-full mt-4" variant="ghost">
                    Visualize
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <h2 className="text-3xl font-semibold mb-4 text-[#87CEEB]">
          What is Sorting?
        </h2>
        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">
              Sorting is the process of arranging items in a specific order,
              typically ascending or descending. Sorting algorithms are crucial
              in computer science for organizing data, enabling efficient data
              retrieval, and optimizing other operations. They vary in
              complexity, speed, and suitability for different data types and
              sizes.
            </p>
            <p className="text-muted-foreground">
              In this visualizer, you can explore various sorting algorithms,
              each with its own approach to sorting data. From basic ones like
              Bubble Sort and Selection Sort to more advanced algorithms like
              Merge Sort, Quick Sort, and Tim Sort, you&apos;ll see how each one
              works and what makes them unique.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
