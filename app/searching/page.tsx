"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@heroui/react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const searchAlgorithmsInfo = [
  {
    name: "Linear Search",
    description:
      "A simple search algorithm that checks each element one by one.",
    route: "/searching/Linear-Search",
  },
  {
    name: "Binary Search",
    description:
      "An efficient algorithm for finding an item in a sorted list by repeatedly dividing the search interval in half.",
    route: "/searching/Binary-Search",
  },
  {
    name: "Depth-First Search (DFS)",
    description:
      "An algorithm for traversing or searching tree or graph data structures by exploring as far as possible along each branch.",
    route: "/searching/DFS",
  },
  {
    name: "Breadth-First Search (BFS)",
    description:
      "An algorithm for searching a tree or graph by exploring neighbors level by level.",
    route: "/searching/BFS",
  },
  {
    name: "Jump Search",
    description:
      "An algorithm for searching in a sorted array by jumping ahead fixed steps and then performing a linear search.",
    route: "/searching/Jump-Search",
  },
  {
    name: "Interpolation Search",
    description:
      "An improvement over Binary Search that works on uniformly distributed sorted data.",
    route: "/searching/Interpolation",
  },
  {
    name: "Exponential Search",
    description:
      "An algorithm that works particularly well on unbounded or infinite lists, doubling the search range exponentially.",
    route: "/searching/Exponential",
  },
  {
    name: "Best-First Search (Greedy Search)",
    description:
      "An algorithm that uses a priority queue to expand the most promising nodes first.",
    route: "/searching/Greedy",
  },
  {
    name: "A* Search",
    description:
      "A powerful search algorithm that combines heuristics and cost functions to find the optimal path in a graph.",
    route: "/searching/A-Star",
  },
  {
    name: "Fibonacci Search",
    description:
      "An algorithm similar to Binary Search but using Fibonacci numbers to divide the array.",
    route: "/searching/Fibonacci",
  },
];

export default function SearchVisualizerPage() {
  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 text-center"
      >
        <h2 className="text-3xl font-semibold mb-4 text-[#87CEEB]">
          What is Searching?
        </h2>
        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">
              Searching is the process of finding the location of a specific
              item in a collection of items. In computer science, searching
              algorithms are essential for retrieving information efficiently.
            </p>
            <p className="text-muted-foreground">
              In this visualizer, you can explore various searching algorithms,
              each with its unique method of finding elements in data. From
              basic ones like Linear Search to advanced methods like A* and
              Best-First Search, you’ll see how each works and what makes them
              effective.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <br />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#87CEEB]">
          Search Algorithm Visualizer
        </h1>
        <p className="mb-8 text-muted-foreground text-center max-w-2xl mx-auto">
          Discover and understand different search algorithms through
          interactive visualizations. Select an algorithm to see how it locates
          items step by step.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {searchAlgorithmsInfo.map((algorithm, index) => (
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
    </div>
  );
}
