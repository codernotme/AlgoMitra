import React, { useState } from 'react';
import { Card } from '@heroui/react';
import { Button } from '@heroui/react';
import { Progress } from '@heroui/react';
import ReactMarkdown from 'react-markdown';
import { AlgorithmVisualizer } from '../visualizer/AlgorithmVisualizer';
import { Tutorial, TutorialStep } from '@/types/learning';
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

interface TutorialContentProps {
  tutorial: Tutorial;
  onComplete: () => void;
}

export const TutorialContent: React.FC<TutorialContentProps> = ({ tutorial, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const step = tutorial.steps[currentStep];
  const progress = ((currentStep + 1) / tutorial.steps.length) * 100;

  const handleNext = () => {
    if (currentStep < tutorial.steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setShowSolution(false);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setShowSolution(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{tutorial.title}</h2>
        <Progress value={progress} className="w-48" color="primary" />
      </div>

      <Card className="p-6">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">{step.title}</h3>
          <div className="prose dark:prose-invert">
            <ReactMarkdown>{step.content}</ReactMarkdown>
          </div>

          {step.visualization && (
            <div className="mt-6">
              <AlgorithmVisualizer
                data={step.visualization.data}
                type={step.visualization.type}
                highlights={step.visualization.highlights}
              />
            </div>
          )}

          {step.code && (
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">Code Implementation</h4>
                <Button
                  size="sm"
                  variant="flat"
                  onClick={() => setShowSolution(!showSolution)}
                >
                  {showSolution ? 'Hide Solution' : 'Show Solution'}
                </Button>
              </div>
              {showSolution && (
                <div className="h-[300px] border rounded">
                  <MonacoEditor
                    height="100%"
                    language="javascript"
                    value={step.code}
                    theme="vs-dark"
                    options={{
                      readOnly: true,
                      minimap: { enabled: false },
                      fontSize: 14,
                    }}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </Card>

      <div className="flex justify-between">
        <Button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          variant="flat"
        >
          Previous
        </Button>
        <Button
          onClick={handleNext}
          color="primary"
        >
          {currentStep === tutorial.steps.length - 1 ? 'Complete' : 'Next'}
        </Button>
      </div>
    </div>
  );
};