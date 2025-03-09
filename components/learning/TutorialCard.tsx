import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/react';
import { Button } from '@heroui/react';
import { Progress } from '@heroui/react';
import { Tutorial } from '@/types/learning';
import Link from 'next/link';

interface TutorialCardProps {
  tutorial: Tutorial;
  progress?: number;
}

export const TutorialCard: React.FC<TutorialCardProps> = ({ tutorial, progress = 0 }) => {
  const difficultyColors = {
    beginner: 'text-green-500',
    intermediate: 'text-yellow-500',
    advanced: 'text-red-500',
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col gap-2">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-xl font-bold">{tutorial.title}</h3>
          <span className={difficultyColors[tutorial.difficulty]}>
            {tutorial.difficulty.charAt(0).toUpperCase() + tutorial.difficulty.slice(1)}
          </span>
        </div>
        <p className="text-gray-500">{tutorial.description}</p>
      </CardHeader>
      <CardBody>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Time Complexity</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>Best: {tutorial.timeComplexity.best}</div>
              <div>Average: {tutorial.timeComplexity.average}</div>
              <div>Worst: {tutorial.timeComplexity.worst}</div>
              <div>Space: {tutorial.timeComplexity.space}</div>
            </div>
          </div>
          <Progress
            value={progress}
            className="mt-4"
            color="success"
            showValueLabel
            label="Progress"
          />
        </div>
      </CardBody>
      <CardFooter>
        <Link href={`/learn/${tutorial.id}`} className="w-full">
          <Button className="w-full" color="primary">
            {progress > 0 ? 'Continue Learning' : 'Start Learning'}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};