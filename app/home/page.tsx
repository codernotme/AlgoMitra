"use client";

import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Sorting Algorithms",
    description: "Master various sorting techniques",
    color: "#87CEEB",
    link: "/sorting",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <path d="M3 3h18v18H3zM8 12h8M8 16h8M8 8h8" />
      </svg>
    ),
  },
  {
    title: "Search Algorithms",
    description: "Explore efficient search methods",
    color: "#FF6B6B",
    link: "/searching",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: "Operating Systems",
    description: "Understand OS concepts",
    color: "#FFD93D",
    link: "/os",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M15 4v4M4 15h4M20 15h-4" />
      </svg>
    ),
  },
  {
    title: "Linked Lists",
    description: "Master linked data structures",
    color: "#4CAF50",
    link: "/linked-list",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <path d="M8 12h8M12 16h8M8 8h8" />
        <circle cx="4" cy="12" r="2" />
        <circle cx="20" cy="8" r="2" />
        <circle cx="20" cy="16" r="2" />
      </svg>
    ),
  },
  {
    title: "Stack & Queue",
    description: "Learn LIFO and FIFO structures",
    color: "#FF69B4",
    link: "/stack-queue",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <path d="M4 19h16M4 15h16M4 11h16M4 7h16" />
      </svg>
    ),
  },
  {
    title: "Graph Algorithms",
    description: "Explore complex graph problems",
    color: "#A569BD",
    link: "/graphs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <circle cx="5" cy="5" r="3" />
        <circle cx="19" cy="5" r="3" />
        <circle cx="5" cy="19" r="3" />
        <circle cx="19" cy="19" r="3" />
        <path d="M5 8v8M8 5h8M16 19h-8M19 8v8" />
      </svg>
    ),
  },
];

export default function EnhancedHomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_70%)] pointer-events-none" />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-12 space-y-24 relative">
        <section className="text-center space-y-8 relative">
          <motion.div
            className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
            animate={{
              x: [0, 30, 0],
              y: [0, 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#87CEEB]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
            animate={{
              x: [0, -30, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#87CEEB] to-[#FF6B6B] relative z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Master Algorithms with AlgoMitra
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your ultimate companion for conquering algorithms and data
            structures.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            >
              Start Learning
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </section>

        <section id="about" className="space-y-8 relative">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B6B]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.h2
            className="text-4xl font-semibold text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About AlgoMitra
          </motion.h2>
          <motion.div
            className="bg-card text-card-foreground rounded-lg p-8 shadow-lg relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed">
              AlgoMitra is your trusted guide through the intricate world of
              algorithms and data structures. We offer a unique blend of
              in-depth resources, interactive visualizations, and hands-on
              exercises designed to build a strong foundation in computer
              science fundamentals. Whether you&apos;re a student preparing for
              exams, a job seeker aiming to ace technical interviews, or a
              professional developer looking to sharpen your skills, AlgoMitra
              is here to support your journey to algorithmic mastery.
            </p>
          </motion.div>
        </section>

        <section id="features" className="space-y-8">
          <motion.h2
            className="text-4xl font-semibold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore Our Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={feature.link} className="block h-full">
                  <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 overflow-hidden group">
                    <CardHeader className="relative">
                      <div
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative z-10"
                        style={{ color: feature.color }}
                      >
                        {feature.icon}
                      </div>
                      <CardTitle
                        className="text-2xl relative z-10"
                        style={{ color: feature.color }}
                      >
                        {feature.title}
                      </CardTitle>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>);
}